import Layout, { siteTitle } from "../components/layout";
import Head from "next/head";

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <h1>CONTACT PAGE</h1>
    </Layout>
  );
}
