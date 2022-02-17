import { Collapse, Grid, Text, Col, Spacer, Input } from "@nextui-org/react";

import { Calendar } from "react-iconly";

export function DeliveryData() {
  return (
    <Collapse title="Delivery data" arrowIcon={<Calendar />} id="delivery-data">
      <Grid.Container gap={2} alignItems="center" justify="center">
        <Grid xs={12} sm={3}>
          <Col>
            <Text h6 weight="normal">
              Select your delivery time
            </Text>
            <Spacer y={0.5} />
            <Input width="100%" type="time" id="time" />
          </Col>
        </Grid>
        <Grid xs={12} sm={3}>
          <Col>
            <Text h6 weight="normal">
              Select your delivery date
            </Text>
            <Spacer y={0.5} />
            <Input width="100%" type="date" id="date" />
          </Col>
        </Grid>
        <Grid xs={12} sm={3}>
          <Col>
            <Text h6 weight="normal">
              Find your client
            </Text>
            <Spacer y={0.5} />
            <Input
              width="100%"
              type="text"
              clearable
              placeholder="john doe"
              id="client"
            />
          </Col>
        </Grid>
      </Grid.Container>
    </Collapse>
  );
}
