import Layout, { siteTitle } from "../components/layout";
import Head from "next/head";

export default function Talks() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <h1>TALKS PAGE</h1>
    </Layout>
  );
}
