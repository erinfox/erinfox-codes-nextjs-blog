import Layout, { siteTitle } from "../components/layout";
import Head from "next/head";

export default function Newsletter() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <h1>Newsletter PAGE</h1>
    </Layout>
  );
}
