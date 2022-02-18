import { useState } from "react";
import { Input, Avatar, Col, Spacer, Text, Grid, Row } from "@nextui-org/react";
import { TimeSquare } from "react-iconly";

import { useMapDirection } from "../../hooks/useMapDirection";
import { formatDate } from "../../utils/formatDate";
import HeaderTable from "./HeaderTable";

const packageItemCss = {
  bg: "$accents2",
  p: ".75rem",
  cursor: "pointer",
  borderRadius: "1rem",
  "@sm": {
    p: ".5rem",
  },
};

export default function PackagesList({ orders = [] } = {}) {
  const [filteredOrders, setFilteredOrders] = useState(orders);
  const { getDirections } = useMapDirection();

  const handleChange = (event) => {
    const keyword = event.target.value;
    if (!keyword) return setFilteredOrders(orders);
    const filtered = orders.filter(({ client }) => {
      const email = client.email.toLowerCase();
      return email.includes(keyword.toLowerCase());
    });
    setFilteredOrders(filtered);
  };

  return (
    <>
      <Col css={{ overflow: "hidden", p: ".5rem .25rem" }}>
        <Input
          placeholder="Find by email"
          type="search"
          bordered
          color="secondary"
          helperText="min 3 characters"
          name="keyword"
          id="SearchInput"
          arial-label="Search"
          css={{ bg: "#333", w: "100%", maxW: "420px" }}
          onChange={handleChange}
        />
        <Spacer y={1.5} />
        <HeaderTable />
        <Spacer y={0.25} />
        <section>
          {filteredOrders.map(
            ({ id, client, orderDate, from, to, orderStatus, packageSize }) => (
              <Grid.Container
                key={id}
                css={packageItemCss}
                onClick={() =>
                  getDirections({ from: from.center, to: to.center })
                }
              >
                {/* Client */}
                <Grid xs={2} sm={2} md={2} justify="center" alignItems="center">
                  <Row gap={1} align="center">
                    <Avatar size="md" src={client.profile} />
                    <Text
                      h6
                      size="14px"
                      css={{ display: "none", "@sm": { display: "block" } }}
                    >
                      {client.email}
                    </Text>
                  </Row>
                </Grid>
                {/* Date */}
                <Grid xs={0} sm={2} md={2} justify="center" alignItems="center">
                  <Text size="12px" css={{ letterSpacing: ".025rem" }}>
                    {formatDate(new Date(orderDate))}
                  </Text>
                </Grid>
                {/* From */}
                <Grid xs={4} sm={3} md={2} justify="center" alignItems="center">
                  <Text size="12px" css={{}}>
                    {from.text}
                  </Text>
                </Grid>
                {/* To */}
                <Grid xs={4} sm={3} md={2} justify="center" alignItems="center">
                  <Text size="12px" css={{}}>
                    {to.text}
                  </Text>
                </Grid>
                {/* Status */}
                <Grid xs={2} sm={2} md={2} justify="center" alignItems="center">
                  <Text size="12px" css={{}}>
                    {orderStatus}
                  </Text>
                </Grid>
                {/* Size */}
                <Grid xs={0} sm={0} md={2} justify="center" alignItems="center">
                  <Text size="12px" css={{}}>
                    {packageSize}
                  </Text>
                </Grid>
              </Grid.Container>
            )
          )}
        </section>
      </Col>
      <style jsx>{`
        section {
          width: 100%;
          display: flex;
          align-items: center;
          flex-direction: column;
          justify-content: center;
          gap: 0.75rem;
        }
      `}</style>
    </>
  );
}
