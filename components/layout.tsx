import HtmlHead, { HtmlMeta } from "./html-head";

export const siteTitle = "Site";

type PageProps = {
  children: React.ReactNode;
  meta: HtmlMeta;
};

export default function Layout({ children, meta }: PageProps) {
  return (
    <div>
      <div>
        <HtmlHead meta={meta} />
        <header></header>
        <main>{children}</main>
      </div>
    </div>
  );
}
