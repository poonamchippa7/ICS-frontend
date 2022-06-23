import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function GridComplexExample(props) {
  return (
    <Form>
      {console.log(props.farmer[0].email)}
      <Form.Group className="mb-3" controlId="formGridEmail">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" defaultValue={props.farmer[0].name} />
        </Form.Group>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" defaultValue={props.farmer[0].email} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCode">
          <Form.Label>Phone No.</Form.Label>
          <Form.Control type="text" placeholder="Code" defaultValue={props.farmer[0].phone}/>
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="Address" defaultValue={props.farmer[0].address}/>
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control defaultValue={props.farmer[0].city}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Control defaultValue={props.farmer[0].state}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control  defaultValue={props.farmer[0].zipcode}/>
        </Form.Group>
      </Row>
    </Form>
  );
}

export default GridComplexExample;