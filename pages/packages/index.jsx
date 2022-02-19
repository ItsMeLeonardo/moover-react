import { useEffect, useState } from "react";
import axios from "axios";
import Head from "next/head";
import { Grid } from "@nextui-org/react";

import PackagesList from "../../components/Packages/PackagesList";

export default function Packages() {
  const [packages, setPackages] = useState();

  useEffect(() => {
    const baseUrl = globalThis.location.origin;
    const res = axios.get(`${baseUrl}/api/orders`);
    res.then(({ data }) => {
      const { orders } = data;
      setPackages(orders);
    });
  }, []);

  return (
    <>
      <Head>
        <title>Moover | Packages</title>
      </Head>
      <h1>Packages </h1>
      <Grid.Container gap={2}>
        <Grid xs={12} css={{ overflow: "auto", py: ".5rem" }}>
          {packages && <PackagesList orders={packages} />}
        </Grid>
      </Grid.Container>
      <style jsx>{``}</style>
    </>
  );
}
