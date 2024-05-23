import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../reducers/todoSlice';
import { deleteGoal } from '../reducers/goalsSlice';
import "./Item.scss";

function Item(props) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    if (props.type === 'todo') {
      dispatch(deleteTodo(props.id));
    } else if (props.type === 'goal') {
      dispatch(deleteGoal(props.id));
    }
  };

  return (
    <Card >
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text className="fw-bold">Description</Card.Text>
        <Card.Text>{props.description}</Card.Text>
        <Card.Text className="fw-bold">Due Date</Card.Text>
        <Card.Text>{props.dueDate}</Card.Text>
      </Card.Body>
      <Card.Body>
        <Button variant="info">Editar</Button>
        <Button variant="danger" onClick={handleDelete}>Eliminar</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;
