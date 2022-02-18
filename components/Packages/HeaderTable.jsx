import { Grid, Text } from "@nextui-org/react";

const ordersKeys = [
  { xs: 2, sm: 2, md: 2, name: "Client" },
  { xs: 0, sm: 2, md: 2, name: "Date" },
  { xs: 4, sm: 3, md: 2, name: "From" },
  { xs: 4, sm: 3, md: 2, name: "To" },
  { xs: 2, sm: 2, md: 2, name: "Status" },
  { xs: 0, sm: 0, md: 2, name: "Size" },
];

export default function HeaderTable() {
  return (
    <Grid.Container>
      {ordersKeys.map(({ name, xs, sm, md }) => (
        <Grid xs={xs} sm={sm} md={md} key={name} justify="center">
          <Text size="14" weight="bold">
            {name}
          </Text>
        </Grid>
      ))}
    </Grid.Container>
  );
}
