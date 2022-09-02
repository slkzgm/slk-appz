import React from 'react';
import MnlthTable from "../components/MnlthTable";
import Layout from "../components/Layout";
import {requestMetaTagAPI} from "../lib/metaTags";
import {requestForgingSznAPI} from "../lib/forgingszn";

export async function getServerSideProps(context) {
  const data = await requestForgingSznAPI();
  const metaTags = await requestMetaTagAPI();

  metaTags.title = 'Forging SZN 1 supply'
  return {
    props: {
      data,
      metaTags
    }
  };
}

export default function Forgingszn({ data, metaTags }) {
  return (
    <Layout metaTags={metaTags}>
      <MnlthTable data={data} />
    </Layout>
  );
}
