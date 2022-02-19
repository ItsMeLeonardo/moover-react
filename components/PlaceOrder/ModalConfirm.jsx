import { Modal, Text, Row, Button } from "@nextui-org/react";

// { state } is from useReducer
export default function ModalConfirm({
  visible,
  setVisible,
  state,
  onConfirm,
}) {
  const { time, date, client, packageSize, from, to } = state;
  const closeHandler = () => {
    setVisible(false);
  };

  const handleConfirm = () => {
    closeHandler();
    onConfirm();
  };

  return (
    <Modal
      closeButton
      preventClose
      aria-labelledby="modal-title"
      open={visible}
      onClose={closeHandler}
    >
      <Modal.Header>
        <Text id="modal-title" size={18}>
          Please confirm your{" "}
          <Text b size={18}>
            order
          </Text>
        </Text>
      </Modal.Header>

      <Modal.Body>
        <Row justify="flex-start" align="center">
          <Text
            weight="bold"
            size={20}
            css={{ textGradient: "$gradPurple", mr: "1rem" }}
          >
            Date
          </Text>
          <Text size={18}>
            {date} : {time}
          </Text>
        </Row>
        <Row justify="flex-start" align="center">
          <Text
            weight="bold"
            size={20}
            css={{ textGradient: "$gradPurple", mr: "1rem" }}
          >
            Package Size
          </Text>
          <Text size={18}>{packageSize}</Text>
        </Row>

        <Row justify="flex-start" align="center">
          <Text
            weight="bold"
            size={20}
            css={{ textGradient: "$gradPurple", mr: "1rem" }}
          >
            Client
          </Text>
          <Text size={18}>{client?.email}</Text>
        </Row>

        <Row justify="flex-start" align="center">
          <Text
            weight="bold"
            size={20}
            css={{ textGradient: "$gradPurple", mr: "1rem" }}
          >
            Route
          </Text>
          <Text size={18}>
            From {from?.text} to {to?.text}
          </Text>
        </Row>
      </Modal.Body>

      <Modal.Footer>
        <Button auto flat color="error" onClick={closeHandler}>
          Cancel
        </Button>
        <Button auto onClick={handleConfirm}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
