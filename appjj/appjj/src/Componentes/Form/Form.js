import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Formulario.scss'
import { useDispatch } from 'react-redux';
import { addGoal } from './../reducers/goalsSlice';

import { useRef } from 'react';

function Formulario(props) {

  const inputRefName = useRef();
  const inputRefDescription = useRef();
  const inputRefDueDate = useRef();

  const dispatch = useDispatch();

  const addItem = (e) =>{
    e.preventDefault();
    dispatch(addGoal({'name':inputRefName.current.value, 'description':inputRefDescription.current.value, 'dueDate':inputRefDueDate.current.value}));
  }

  return (
  <div className='space'>
       <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder=""  ref={inputRefName}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows={3}  ref={inputRefDescription}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Due Date</Form.Label>
        <Form.Control type="date" placeholder="name@example.com" ref={inputRefDueDate} />
      </Form.Group>
      <Button variant="info" onClick={addItem}>Add Goal</Button>
    </Form>
  </div>
 
  );
}

export default Formulario;