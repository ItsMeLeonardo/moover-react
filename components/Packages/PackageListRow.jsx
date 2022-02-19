import { Grid, Row, Avatar, Text } from "@nextui-org/react";

import { formatDate } from "../../utils/formatDate";

const packageItemCss = {
  bg: "$accents2",
  p: ".75rem",
  cursor: "pointer",
  borderRadius: "1rem",
  "@sm": {
    p: ".5rem",
  },
};

export default function PackageListRow({ order, onClick }) {
  const { id, client, orderDate, from, to, orderStatus, packageSize } = order;

  const handleClick = () => {
    onClick({ from: from.center, to: to.center });
  };

  return (
    <Grid.Container key={id} css={packageItemCss} onClick={handleClick}>
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
  );
}
