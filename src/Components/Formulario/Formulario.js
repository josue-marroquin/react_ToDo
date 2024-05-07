import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import './Formulario.scss';
import { useDispatch } from 'react-redux';
import { addGoal } from '../../Reducers/goalsSlice';
import { useRef } from 'react';

function Formulario(props) {
  
  const inputRefName = useRef();
  const inputRefDescription = useRef();
  const inputRefDueDate = useRef();
  const dispatch = useDispatch();

  const addItem = (e) => {
    e.preventDefault();
    dispatch(addGoal({
      'name': inputRefName.current.value,
      'description': inputRefDescription.current.value,
      'dueDate': inputRefDueDate.current.value
    }));
  }

  return (
    <Form>
      <Form.Group className="mb-3" controlId="">
        <Form.Label>Name:</Form.Label>
        <Form.Control type="text" placeholder="" ref={inputRefName} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="">
        <Form.Label>Description:</Form.Label>
        <Form.Control as="textarea" rows={3} ref={inputRefDescription} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="">
        <Form.Label>Due Date:</Form.Label>
        <Form.Control type="date" placeholder="" ref={inputRefDueDate} />
      </Form.Group>
      <Button variant="info" onClick={addItem}>Add</Button>
    </Form>
  );
}

export default Formulario;