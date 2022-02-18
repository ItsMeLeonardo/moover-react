import { Collapse, Grid, Col, Text } from "@nextui-org/react";

import { Location } from "react-iconly";

import Map from "../Map";

export function ChooseRoutes({
  dispatch,
  actions,
  defaultStartLocation,
  defaultEndLocation,
}) {
  const selectFromLocation = (location) => {
    dispatch({
      type: actions.CHOOSE_ROUTES.FROM,
      payload: location,
    });
  };

  const selectToLocation = (location) => {
    dispatch({
      type: actions.CHOOSE_ROUTES.TO,
      payload: location,
    });
  };

  return (
    <>
      <Collapse title="Select route" arrowIcon={<Location />}>
        <Grid.Container gap={2} alignItems="center" justify="center">
          <Grid xs={12} sm={6}>
            <Col>
              <Text h5>
                From: {defaultStartLocation && defaultStartLocation.place_name}{" "}
              </Text>
              <Map height="320px" searcher onResultClick={selectFromLocation} />
            </Col>
          </Grid>

          <Grid xs={12} sm={6}>
            <Col>
              <Text h5>
                To: {defaultEndLocation && defaultEndLocation.place_name}
              </Text>
              <Map height="320px" searcher onResultClick={selectToLocation} />
            </Col>
          </Grid>
        </Grid.Container>
      </Collapse>
    </>
  );
}
