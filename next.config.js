const path = require('path')
const querystring = require('querystring')
const { createLoader } = require('simple-functional-loader')
const frontMatter = require('front-matter')
const withSmartQuotes = require('@silvenon/remark-smartypants')
const { withTableOfContents } = require('./remark/withTableOfContents')
const { withSyntaxHighlighting } = require('./remark/withSyntaxHighlighting')
const { withNextLinks } = require('./remark/withNextLinks')
const minimatch = require('minimatch')
const { withImages } = require('./remark/withImages')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
const defaultConfig = require('tailwindcss/resolveConfig')(require('tailwindcss/defaultConfig'))
const dlv = require('dlv')

const fallbackLayouts = {
  'src/pages/docs/**/*': ['@/layouts/DocumentationLayout', 'DocumentationLayout'],
}

const fallbackDefaultExports = {
  'src/pages/{docs,components}/**/*': ['@/layouts/ContentsLayout', 'ContentsLayout'],
}

const fallbackGetStaticProps = {}

module.exports = withBundleAnalyzer({
  swcMinify: true,
  pageExtensions: ['js', 'jsx', 'mdx'],
  images: {
    disableStaticImages: true,
  },
  async redirects() {
    return require('./redirects.json')
  },
  webpack(config, options) {
    if (!options.dev && options.isServer) {
      let originalEntry = config.entry

      config.entry = async () => {
        let entries = { ...(await originalEntry()) }
        return entries
      }
    }

    config.module.rules.push({
      test: /\.(png|jpe?g|gif|webp|avif|mp4)$/i,
      issuer: /\.(jsx?|tsx?|mdx)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next',
            name: 'static/media/[name].[hash].[ext]',
          },
        },
      ],
    })

    config.resolve.alias['defaultConfig$'] = require.resolve('tailwindcss/defaultConfig')
    config.module.rules.push({
      test: require.resolve('tailwindcss/defaultConfig'),
      use: createLoader(function (_source) {
        return `export default ${JSON.stringify(defaultConfig)}`
      }),
    })

    config.module.rules.push({
      test: /\.svg$/,
      use: [
        { loader: '@svgr/webpack', options: { svgoConfig: { plugins: { removeViewBox: false } } } },
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next',
            name: 'static/media/[name].[hash].[ext]',
          },
        },
      ],
    })

    let mdx = [
      {
        loader: '@mdx-js/loader',
        options: {
          remarkPlugins: [
            withImages,
            withTableOfContents,
            withSyntaxHighlighting,
            withNextLinks,
            withSmartQuotes,
          ],
        },
      },
      createLoader(function (source) {
        let pathSegments = this.resourcePath.split(path.sep)
        let slug =
          pathSegments[pathSegments.length - 1] === 'index.mdx'
            ? pathSegments[pathSegments.length - 2]
            : pathSegments[pathSegments.length - 1].replace(/\.mdx$/, '')
        return source + `\n\nexport const slug = '${slug}'`
      }),
    ]

    config.module.rules.push({
      test: /\.mdx$/,
      use: [
        options.defaultLoaders.babel,
        createLoader(function (source) {
          if (source.includes('/*START_META*/')) {
            const [meta] = source.match(/\/\*START_META\*\/(.*?)\/\*END_META\*\//s)
            return 'export default ' + meta
          }
          return (
            source.replace(/export const/gs, 'const') + `\nMDXContent.layoutProps = layoutProps\n`
          )
        }),
        ...mdx,
        createLoader(function (source) {
          let { meta: fields } = querystring.parse(this.resourceQuery.substr(1))
          let { attributes: meta, body } = frontMatter(source)
          if (fields) {
            for (let field in meta) {
              if (!fields.split(',').includes(field)) {
                delete meta[field]
              }
            }
          }

          let extra = []
          let resourcePath = path.relative(__dirname, this.resourcePath)

          if (!/^\s*export\s+(var|let|const)\s+Layout\s+=/m.test(source)) {
            for (let glob in fallbackLayouts) {
              if (minimatch(resourcePath, glob)) {
                extra.push(
                  `import { ${fallbackLayouts[glob][1]} as _Layout } from '${fallbackLayouts[glob][0]}'`,
                  'export const Layout = _Layout'
                )
                break
              }
            }
          }

          if (!/^\s*export\s+default\s+/m.test(source.replace(/```(.*?)```/gs, ''))) {
            for (let glob in fallbackDefaultExports) {
              if (minimatch(resourcePath, glob)) {
                extra.push(
                  `import { ${fallbackDefaultExports[glob][1]} as _Default } from '${fallbackDefaultExports[glob][0]}'`,
                  'export default _Default'
                )
                break
              }
            }
          }

          if (
            !/^\s*export\s+(async\s+)?function\s+getStaticProps\s+/m.test(
              source.replace(/```(.*?)```/gs, '')
            )
          ) {
            for (let glob in fallbackGetStaticProps) {
              if (minimatch(resourcePath, glob)) {
                extra.push(`export { getStaticProps } from '${fallbackGetStaticProps[glob]}'`)
                break
              }
            }
          }

          let metaExport
          if (!/export\s+(const|let|var)\s+meta\s*=/.test(source)) {
            metaExport =
              typeof fields === 'undefined'
                ? `export const meta = ${JSON.stringify(meta)}`
                : `export const meta = /*START_META*/${JSON.stringify(meta || {})}/*END_META*/`
          }

          return [
            ...(typeof fields === 'undefined' ? extra : []),
            typeof fields === 'undefined'
              ? body.replace(/<!--excerpt-->.*<!--\/excerpt-->/s, '')
              : '',
            metaExport,
          ]
            .filter(Boolean)
            .join('\n\n')
        }),
      ],
    })

    return config
  },
})

function normalizeProperties(input) {
  if (typeof input !== 'object') return input
  if (Array.isArray(input)) return input.map(normalizeProperties)
  return Object.keys(input).reduce((newObj, key) => {
    let val = input[key]
    let newVal = typeof val === 'object' ? normalizeProperties(val) : val
    newObj[key.replace(/([a-z])([A-Z])/g, (m, p1, p2) => `${p1}-${p2.toLowerCase()}`)] = newVal
    return newObj
  }, {})
}

function getUtilities(plugin, { includeNegativeValues = false } = {}) {
  if (!plugin) return {}
  const utilities = {}

  function addUtilities(utils) {
    utils = Array.isArray(utils) ? utils : [utils]
    for (let i = 0; i < utils.length; i++) {
      for (let prop in utils[i]) {
        for (let p in utils[i][prop]) {
          if (p.startsWith('@defaults')) {
            delete utils[i][prop][p]
          }
        }
        utilities[prop] = normalizeProperties(utils[i][prop])
      }
    }
  }

  plugin({
    addBase: () => {},
    addDefaults: () => {},
    addComponents: () => {},
    corePlugins: () => true,
    prefix: (x) => x,
    addUtilities,
    theme: (key, defaultValue) => dlv(defaultConfig.theme, key, defaultValue),
    matchUtilities: (matches, { values, supportsNegativeValues } = {}) => {
      if (!values) return

      let modifierValues = Object.entries(values)

      if (includeNegativeValues && supportsNegativeValues) {
        let negativeValues = []
        for (let [key, value] of modifierValues) {
          let negatedValue = require('tailwindcss/lib/util/negateValue').default(value)
          if (negatedValue) {
            negativeValues.push([`-${key}`, negatedValue])
          }
        }
        modifierValues.push(...negativeValues)
      }

      let result = Object.entries(matches).flatMap(([name, utilityFunction]) => {
        return modifierValues
          .map(([modifier, value]) => {
            let declarations = utilityFunction(value, {
              includeRules(rules) {
                addUtilities(rules)
              },
            })

            if (!declarations) {
              return null
            }

            return {
              [require('tailwindcss/lib/util/nameClass').default(name, modifier)]: declarations,
            }
          })
          .filter(Boolean)
      })

      for (let obj of result) {
        for (let key in obj) {
          let deleteKey = false
          for (let subkey in obj[key]) {
            if (subkey.startsWith('@defaults')) {
              delete obj[key][subkey]
              continue
            }
            if (subkey.includes('&')) {
              result.push({
                [subkey.replace(/&/g, key)]: obj[key][subkey],
              })
              deleteKey = true
            }
          }

          if (deleteKey) delete obj[key]
        }
      }

      addUtilities(result)
    },
  })
  return utilities
}
