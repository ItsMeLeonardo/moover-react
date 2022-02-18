import { useState } from "react";
import { Collapse, Grid, Col, Text } from "@nextui-org/react";

import { Location } from "react-iconly";

import Map from "../Map";

export function ChooseRoutes() {
  const [fromLocation, setFromLocation] = useState(null);
  const [toLocation, setToLocation] = useState(null);

  console.log({ fromLocation, toLocation });
  return (
    <>
      <Collapse title="Select route" arrowIcon={<Location />}>
        <Grid.Container gap={2} alignItems="center" justify="center">
          <Grid xs={12} sm={6}>
            <Col>
              <Text h5>From: {fromLocation && fromLocation.place_name} </Text>
              <Map height="320px" searcher onResultClick={setFromLocation} />
            </Col>
          </Grid>

          <Grid xs={12} sm={6}>
            <Col>
              <Text h5>To: {toLocation && toLocation.place_name}</Text>
              <Map height="320px" searcher onResultClick={setToLocation} />
            </Col>
          </Grid>
        </Grid.Container>
      </Collapse>
    </>
  );
}
