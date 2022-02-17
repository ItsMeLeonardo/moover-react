import { Grid, Text, Button } from "@nextui-org/react";

import { DeliveryData } from "../../components/PlaceOrder/DeliveryData";
import { ChooseSize } from "../../components/PlaceOrder/ChooseSize";
import { ChooseRoutes } from "../../components/PlaceOrder/ChooseRoutes";

export default function Order() {
  return (
    <>
      <Grid.Container
        gap={2}
        justify="center"
        alignItems="center"
        css={{ maxW: "900px", mx: "auto" }}
      >
        <Grid xs={12}>
          <Text h2 css={{ textAlign: "center", w: "100%" }}>
            Place your order
          </Text>
        </Grid>
        <Grid css={{ w: "100%" }}>
          <DeliveryData />
        </Grid>

        <Grid css={{ w: "100%" }}>
          <ChooseSize />
        </Grid>

        <Grid css={{ w: "100%" }}>
          <ChooseRoutes />
        </Grid>

        <Grid xs={12}>
          <Button color="gradient" shadow>
            Confirm
          </Button>
        </Grid>
      </Grid.Container>
    </>
  );
}
