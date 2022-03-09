import Head from 'next/head'

export function Title({ suffix, title, description }) {
  let titleWithSuffix = title + (suffix.trim().startsWith('|') ? '' : ' - ') +suffix;
  
  return (
    <Head>
      <title key="title">{titleWithSuffix}</title>
      <meta key="twitter:title" name="twitter:title" content={titleWithSuffix} />
      <meta key="og:title" property="og:title" content={titleWithSuffix} />
      <meta name="description" content={description}/>
      <meta property="og:description" content={description}/>
    </Head>
  )
}
