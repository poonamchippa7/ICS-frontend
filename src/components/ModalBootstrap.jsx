import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import GridComplexExample from '../components/ICSAdmin/ModalForm'
export default function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      size="3xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className='!text-medium '>
          {`Framer Details`}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <GridComplexExample farmer={props.modaldata[0]}/>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Button onClick={()=>{props.handlelistchange(props.modaldata[0])}}>Approve</Button>
      </Modal.Footer>
    </Modal>
  );
}