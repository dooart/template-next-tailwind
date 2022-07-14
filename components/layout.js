import Head from "next/head";

export const siteTitle = "Site";

export default function Layout({ children, meta = {} }) {
  return (
    <div>
      <div>
        <Head>
          <link rel="icon" href="/images/meta/favicon.ico" />
          {meta.description && (
            <meta name="description" content={meta.description} />
          )}
          {meta.ogImage && <meta property="og:image" content={meta.ogImage} />}
          <meta name="og:title" content={meta.title || siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
          <title>{meta.title || siteTitle}</title>
        </Head>
        <header>
        </header>
        <main>{children}</main>
      </div>
    </div>
  );
}
