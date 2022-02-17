import { Grid } from "@nextui-org/react";

import PackagesList from "../../components/Packages/PackagesList";
import Map from "../../components/Map";

export default function Packages() {
  return (
    <>
      <h1>Packages </h1>
      <Grid.Container gap={2}>
        <Grid xs={12} sm={3} css={{ overflow: "auto", py: ".5rem", maxH: 400 }}>
          <PackagesList />
        </Grid>
        <Grid xs={12} sm={9}>
          <Map height="400px" />
        </Grid>
      </Grid.Container>
      <style jsx>{``}</style>
    </>
  );
}
