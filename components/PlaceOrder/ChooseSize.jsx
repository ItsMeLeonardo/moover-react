import { Collapse, Grid, Radio, Tooltip } from "@nextui-org/react";

import { Send } from "react-iconly";

const packagesSizes = [
  {
    label: "Small",
    value: "small",
    description: "Small packages",
  },
  {
    label: "Medium",
    value: "medium",
    description: "Medium packages",
  },
  {
    label: "Large",
    value: "large",
    description: "Large packages",
  },
  {
    label: "X-Large",
    value: "x-large",
    description: "X-Large packages",
  },
];

export function ChooseSize({ dispatch, actions }) {
  const selectSize = (event) => {
    const { value } = event.target;
    if (!value) return;
    dispatch({
      type: actions.CHOOSE_SIZE,
      payload: value,
    });
  };

  return (
    <>
      <Collapse title="Choose Package size" arrowIcon={<Send />}>
        <Grid xs={12} alignItems="center" justify="center" css={{ w: "100%" }}>
          <Radio.Group value="1" row css={{ justifyContent: "space-evenly" }}>
            {packagesSizes.map(({ label, value, description }) => (
              <Tooltip content={description} key={value} onChange={selectSize}>
                <Radio value={value}>{label}</Radio>
              </Tooltip>
            ))}
          </Radio.Group>
        </Grid>
      </Collapse>
    </>
  );
}
