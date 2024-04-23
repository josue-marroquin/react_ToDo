import Form from 'react-bootstrap/Form';

function Formulario() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="">
        <Form.Label>Name:</Form.Label>
        <Form.Control type="name" placeholder="" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description:</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="">
        <Form.Label>Due Date:</Form.Label>
        <Form.Control type="date" placeholder="" />
      </Form.Group>
    </Form>
  );
}

export default Formulario;