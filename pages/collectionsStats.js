import {requestMetaTagAPI} from "../lib/metaTags";
import {requestCollectionsStats} from "../lib/collectionsStatistics";
import Layout from "../components/Layout";
import React from "react";
import StatisticsTable from "../components/StatisticsTable";

export async function getServerSideProps(context) {
  const data = await requestCollectionsStats();
  const metaTags = await requestMetaTagAPI();

  metaTags.title = 'RTFKT Collections Statistics';
  return {
    props: {
      data,
      metaTags
    }
  };
}

export default function CollectionsStats({ data, metaTags }) {
  return (
    <Layout metaTags={metaTags}>
      {data.map((collection, index)=> <StatisticsTable key={index} collection={collection}/>)}
    </Layout>
  );
}
