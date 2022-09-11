import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ScheduleItemModal({ scheduleItem, show, handleClose, goal }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          {scheduleItem?.action}
          {console.log(scheduleItem.action)}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ScheduleItemModal;
