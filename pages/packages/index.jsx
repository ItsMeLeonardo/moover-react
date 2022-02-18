import axios from "axios";
import { Grid } from "@nextui-org/react";

import PackagesList from "../../components/Packages/PackagesList";
import Map from "../../components/Map";

export default function Packages({ orders }) {
  return (
    <>
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
  const res = await axios.get("http://localhost:3000/api/orders");
  const { orders } = res.data;
  return {
    props: {
      orders,
    },
  };
}
