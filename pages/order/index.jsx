import Head from "next/head";
import { useReducer, useState } from "react";
import { Grid, Text, Button, Spacer, Col } from "@nextui-org/react";

import { ChooseRoutes } from "../../components/PlaceOrder/ChooseRoutes";
import { DeliveryData } from "../../components/PlaceOrder/DeliveryData";
import { ChooseSize } from "../../components/PlaceOrder/ChooseSize";
import ModalConfirm from "../../components/PlaceOrder/ModalConfirm";

const ACTIONS = {
  CHOOSE_SIZE: "CHOOSE_SIZE",
  CHOOSE_ROUTES: {
    FROM: "CHOOSE_ROUTES_FROM",
    TO: "CHOOSE_ROUTES_TO",
  },
  CHOOSE_DELIVERY_DATA: {
    TIME: "CHOOSE_DELIVERY_DATA_TIME",
    DATE: "CHOOSE_DELIVERY_DATA_DATE",
    CLIENT: "CHOOSE_DELIVERY_DATA_CLIENT",
  },
  CLEAR: "CLEAR",
};

const initialState = {
  time: null,
  date: null,
  client: null,
  packageSize: null,
  from: null,
  to: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.CHOOSE_SIZE:
      return {
        ...state,
        packageSize: action.payload,
      };
    case ACTIONS.CHOOSE_ROUTES.FROM:
      return {
        ...state,
        from: action.payload,
      };
    case ACTIONS.CHOOSE_ROUTES.TO:
      return {
        ...state,
        to: action.payload,
      };
    case ACTIONS.CHOOSE_DELIVERY_DATA.DATE:
      return {
        ...state,
        date: action.payload,
      };
    case ACTIONS.CHOOSE_DELIVERY_DATA.TIME:
      return {
        ...state,
        time: action.payload,
      };
    case ACTIONS.CHOOSE_DELIVERY_DATA.CLIENT:
      return {
        ...state,
        client: action.payload,
      };
    case ACTIONS.CLEAR:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default function Order() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const validateOrder = () => {
    for (const [key, val] of Object.entries(state)) {
      if (val) continue;

      setError(`this 👉"${key.toUpperCase()}" field is required`);
      setTimeout(() => {
        setError(null);
      }, 5000);
      return;
    }
    setIsModalOpen(true);
  };

  const handleConfirm = () => {
    alert("Confirm");
    dispatch({
      type: ACTIONS.CLEAR,
    });
  };

  return (
    <>
      <Head>
        <title>Moover | Order</title>
      </Head>

      <Grid.Container
        gap={2}
        justify="center"
        alignItems="center"
        css={{ maxW: "900px", mx: "auto" }}
      >
        <Grid xs={12}>
          <Text h2 css={{ textAlign: "center", w: "100%" }}>
            Place your order
          </Text>
        </Grid>

        <Grid css={{ w: "100%" }}>
          <DeliveryData
            dispatch={dispatch}
            actions={ACTIONS}
            clientDefault={state?.client}
          />
        </Grid>

        <Grid css={{ w: "100%" }}>
          <ChooseSize dispatch={dispatch} actions={ACTIONS} />
        </Grid>

        <Grid css={{ w: "100%" }}>
          <ChooseRoutes
            dispatch={dispatch}
            actions={ACTIONS}
            defaultStartLocation={state?.from}
            defaultEndLocation={state?.to}
          />
        </Grid>

        <Col xs={12}>
          <Button color="gradient" shadow onClick={validateOrder}>
            Confirm
          </Button>
          <Spacer y={0.5} />
          {error && (
            <Text h6 color="error">
              {error}
            </Text>
          )}
        </Col>

        <ModalConfirm
          state={state}
          visible={isModalOpen}
          setVisible={setIsModalOpen}
          onConfirm={handleConfirm}
        />
      </Grid.Container>
    </>
  );
}
