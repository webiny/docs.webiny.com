import NextDocument, { Html, Head, Main, NextScript } from "next/document";

const FAVICON_VERSION = 3;

function v(href) {
    return `${href}?v=${FAVICON_VERSION}`;
}

export default class Document extends NextDocument {
    static async getInitialProps(ctx) {
        const initialProps = await NextDocument.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html lang="en" className="dark [--scroll-mt:9.875rem] lg:[--scroll-mt:6.3125rem]">
                <Head>
                    <link
                        rel="apple-touch-icon"
                        sizes="180x180"
                        href={v("/favicons/apple-touch-icon.png")}
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="32x32"
                        href={v("/favicons/favicon-32x32.png")}
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="16x16"
                        href={v("/favicons/favicon-16x16.png")}
                    />
                    <link rel="manifest" href={v("/favicons/site.webmanifest")} />
                    <link
                        rel="mask-icon"
                        href={v("/favicons/safari-pinned-tab.svg")}
                        color="#FA5A28"
                    />
                    <link rel="shortcut icon" href={v("/favicons/favicon.ico")} />
                    <meta name="apple-mobile-web-app-title" content="Webiny Docs" />
                    <meta name="application-name" content="Webiny Docs" />
                    <meta name="msapplication-TileColor" content="#FA5A28" />
                    <meta name="msapplication-config" content={v("/favicons/browserconfig.xml")} />
                    <meta name="theme-color" content="#ffffff" />
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                try {
                  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark')
                  } else {
                    document.documentElement.classList.remove('dark')
                  }
                } catch (_) {}
              `,
                        }}
                    />

                    <script
                        type="text/javascript"
                        dangerouslySetInnerHTML={{
                            __html: `
              (window.heap = window.heap || []),
              (heap.load = function(e, t) {
                  (window.heap.appid = e), (window.heap.config = t = t || {});
                  var r = document.createElement("script");
                  (r.type = "text/javascript"),
                      (r.async = !0),
                      (r.src = "https://cdn.heapanalytics.com/js/heap-" + e + ".js");
                  var a = document.getElementsByTagName("script")[0];
                  a.parentNode.insertBefore(r, a);
                  for (
                      var n = function(e) {
                              return function() {
                                  heap.push([e].concat(Array.prototype.slice.call(arguments, 0)));
                              };
                          },
                          p = [
                              "addEventProperties",
                              "addUserProperties",
                              "clearEventProperties",
                              "identify",
                              "resetIdentity",
                              "removeEventProperty",
                              "setEventProperties",
                              "track",
                              "unsetEventProperty"
                          ],
                          o = 0;
                      o < p.length;
                      o++
                  )
                      heap[p[o]] = n(p[o]);
              });
              `,
                        }}
                    />

                    <script async src="https://www.googletagmanager.com/gtag/js?id=GTM-5TG2W9G" />
                    <script
                        type="text/javascript"
                        dangerouslySetInnerHTML={{
                            __html: `
                  window.dataLayer = window.dataLayer || []; 
                  function gtag(){
                      dataLayer.push(arguments);
                  } 
                  gtag('js', new Date()); 
                  gtag('config', 'GTM-5TG2W9G'); 
              `,
                        }}
                    />
                </Head>
                <body className="antialiased text-slate-500 dark:text-slate-400 dark:bg-dark-theme">
                    <Main />
                    <NextScript />
                    <script> </script>
                </body>
            </Html>
        );
    }
}
