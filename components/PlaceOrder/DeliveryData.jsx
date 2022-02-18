import { useState } from "react";
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

export function DeliveryData() {
  const { isLoading, data, error, getClients } = useClients();

  const [client, setClient] = useState(null);
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
            <InputSearchWithResults
              onChange={handleChange}
              loading={isLoading}
              results={data?.clients || []}
              propToDisplayResult="email"
              onClick={setClient}
              clearResultsAfterClick
            />
            {client && (
              <Row align="center" css={{ gap: ".5rem" }}>
                <Avatar src={client.profile} square />
                <Col>
                  <Text h5 weight="Bold">
                    {client.name}
                  </Text>
                  <Text h6>{client.email}</Text>
                </Col>
              </Row>
            )}
          </Col>
        </Grid>
      </Grid.Container>
    </Collapse>
  );
}
