import axios from "axios";
import Head from "next/head";
import { Grid } from "@nextui-org/react";

import PackagesList from "../../components/Packages/PackagesList";
export default function Packages({ orders }) {
  return (
    <>
      <Head>
        <title>Moover | Packages</title>
      </Head>
      <h1>Packages </h1>
      <Grid.Container gap={2}>
        <Grid xs={12} css={{ overflow: "auto", py: ".5rem" }}>
          <PackagesList orders={orders} />
        </Grid>
      </Grid.Container>
      <style jsx>{``}</style>
    </>
  );
}

export async function getStaticProps() {
  const res = await axios.get(`${process.env.API_URL}/orders`);
  const { orders } = res.data;
  return {
    props: {
      orders,
    },
  };
}
