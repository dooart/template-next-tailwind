import Head from "next/head";

export type HtmlMeta = { title: string; description?: string; ogImage?: string; noTitlePrefix?: boolean };

export const DEFAULT_TITLE = "Site";
export const DEFAULT_DESCRIPTION = "Site Description";

export default function HtmlHead({ meta }: { meta?: HtmlMeta }) {
  const title = meta?.title ? (meta.noTitlePrefix ? "" : `${DEFAULT_TITLE}: `) + meta.title : DEFAULT_TITLE;
  const description = meta?.description || DEFAULT_DESCRIPTION;

  return (
    <Head>
      <>
        <link rel="icon" href="/favicon.ico" />
        <meta name="twitter:card" content="summary_large_image" />

        <meta name="og:title" content={title} />
        {meta?.ogImage && <meta property="og:image" content={meta.ogImage} />}

        <meta name="description" content={description} />
        <title>{title}</title>
      </>
    </Head>
  );
}
