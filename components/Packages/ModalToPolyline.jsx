import { Modal, Button } from "@nextui-org/react";

import Map from "../Map";

export default function ModalToPolyline({ visible, setVisible, coords }) {
  const closeHandler = () => setVisible(false);

  return (
    <div>
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        blur
        onClose={closeHandler}
      >
        <Modal.Header></Modal.Header>
        <Modal.Body>
          <Map height="300px" coordsToPolyline={coords} />
        </Modal.Body>
        <Modal.Footer>
          <Button auto color="gradient" onClick={closeHandler} shadow>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
