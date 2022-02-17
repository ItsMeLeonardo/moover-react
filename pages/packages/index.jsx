import { Grid } from "@nextui-org/react";

import PackagesList from "../../components/Packages/PackagesList";
import Map from "../../components/Map";

export default function Packages() {
  return (
    <>
      <h1>Packages </h1>
      <Grid.Container>
        <Grid xs={12} sm={3}>
          <PackagesList />
        </Grid>
        <Grid xs={12} sm={9}>
          <Map />
        </Grid>
      </Grid.Container>
      <style jsx>{``}</style>
    </>
  );
}
