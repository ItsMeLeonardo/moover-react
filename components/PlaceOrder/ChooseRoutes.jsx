import { Collapse, Grid, Col, Text } from "@nextui-org/react";

import { Location } from "react-iconly";

import Map from "../Map";

export function ChooseRoutes() {
  return (
    <>
      <Collapse title="Select route" arrowIcon={<Location />}>
        <Grid.Container gap={2} alignItems="center" justify="center">
          <Grid xs={12} sm={6}>
            <Col>
              <Text h5>From</Text>
              <Map height="320px" searcher />
            </Col>
          </Grid>

          <Grid xs={12} sm={6}>
            <Col>
              <Text h5>To</Text>
              <Map height="320px" searcher />
            </Col>
          </Grid>
        </Grid.Container>
      </Collapse>
    </>
  );
}
