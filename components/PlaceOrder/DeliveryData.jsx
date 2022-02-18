import {
  Collapse,
  Grid,
  Text,
  Col,
  Spacer,
  Input,
  Row,
  Avatar,
} from "@nextui-org/react";
import { Calendar } from "react-iconly";

import InputSearchWithResults from "../InputSearchWithResults";
import { useClients } from "../../hooks/useClients";

export function DeliveryData({ dispatch, actions, clientDefault }) {
  const { isLoading, data, error, getClients } = useClients();

  const selectClient = (client) => {
    dispatch({
      type: actions.CHOOSE_DELIVERY_DATA.CLIENT,
      payload: client,
    });
  };

  const selectTime = (event) => {
    const value = event.target.value;
    if (!value) return;
    dispatch({
      type: actions.CHOOSE_DELIVERY_DATA.TIME,
      payload: value,
    });
  };

  const selectDate = (event) => {
    const value = event.target.value;
    if (!value) return;
    dispatch({
      type: actions.CHOOSE_DELIVERY_DATA.DATE,
      payload: value,
    });
  };

  const handleChange = (value) => {
    getClients({ email: value });
  };

  return (
    <Collapse title="Delivery data" arrowIcon={<Calendar />} id="delivery-data">
      <Grid.Container gap={2} alignItems="center" justify="center">
        <Grid xs={12} sm={3}>
          <Col>
            <Text h6 weight="normal">
              Select your delivery time
            </Text>
            <Spacer y={0.5} />
            <Input width="100%" type="time" id="time" onBlur={selectTime} />
          </Col>
        </Grid>
        <Grid xs={12} sm={3}>
          <Col>
            <Text h6 weight="normal">
              Select your delivery date
            </Text>
            <Spacer y={0.5} />
            <Input width="100%" type="date" id="date" onBlur={selectDate} />
          </Col>
        </Grid>
        <Grid xs={12} sm={3}>
          <Col>
            <Text h6 weight="normal">
              Find your client
            </Text>
            <Spacer y={0.5} />
            <InputSearchWithResults
              onChange={handleChange}
              loading={isLoading}
              results={data?.clients || []}
              propToDisplayResult="email"
              onClick={selectClient}
              clearResultsAfterClick
            />
            {clientDefault && (
              <Row align="center" css={{ gap: ".5rem" }}>
                <Avatar src={clientDefault.profile} squared />
                <Col>
                  <Text h5 weight="Bold">
                    {clientDefault.name}
                  </Text>
                  <Text h6>{clientDefault.email}</Text>
                </Col>
              </Row>
            )}
          </Col>
        </Grid>
      </Grid.Container>
    </Collapse>
  );
}
