import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import './Formulario.scss';
// useSelector para utilizar algun estado actual
// useDispatch para despachar" los datos al store
import { useSelector, useDispatch } from 'react-redux';
import { addGoal } from '../../Reducers/goalsSlice';
import { addTask } from '../../Reducers/taskSlice';
import { useRef } from 'react';

function Formulario(props) {
  
  // establecer referencias del DOM
  const inputRefName = useRef();
  const inputRefDescription = useRef();
  const inputRefDueDate = useRef();
  // Dispatch
  const dispatch = useDispatch();
  // capturando el estado iniial de option
  const option = useSelector((state) => state.option.value);

  // Valiar el estado de option para insertar Item en la tabla correcta
  const addItem = (e) => {
    e.preventDefault();
    let id = (Math.random() *10 + 1) + Date.now();
    if(option === 'tasks'){
      console.log(option);
      console.log('add task');
      dispatch(addTask({
        'id': id,
        'name': inputRefName.current.value,
        'description': inputRefDescription.current.value,
        'dueDate': inputRefDueDate.current.value
      }));
    } else if (option === 'goals'){
      console.log(option);
      console.log('add goal');
      dispatch(addGoal({
        'id': id,
        'name': inputRefName.current.value,
        'description': inputRefDescription.current.value,
        'dueDate': inputRefDueDate.current.value
      }));
    }
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
      <Button variant="info" onClick={addItem}>Add Item</Button>
    </Form>
  );
}

export default Formulario;