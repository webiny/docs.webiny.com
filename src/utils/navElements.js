import { importAll } from '@/utils/importAll'

export function createPageList(files, base) {
  return importAll(files).reduce((acc, cur) => {
    let slug = cur.fileName.substr(2).replace(/\.mdx$/, '')
    return {
      ...acc,
      [slug]: { ...cur.module.default, link: `/${base}/${slug}`},
    }
  }, {})
}

export const page = (mdxName) => {
  const pages = createPageList(require.context(`../pages/docs/?meta=title`, true, /\.mdx$/), 'docs')

  return {
    type: 'page',
    link: pages[mdxName]?.link || '/',
    title: pages[mdxName]?.title || 'invalid page link',
  }
}

// const link = (title, externalLink) => {
//   return { type: 'link', link: externalLink, title }
// }

export const section = (title, links) => {
  return {
    type: 'section',
    title,
    links,
  }
}

export const collapsable = (title, links) => {
  return {
    type: 'collapsable',
    title,
    links,
  }
}

export const horizontalLine = () => {
  return {
    type: 'horizontal-line',
  }
}