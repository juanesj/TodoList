import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "./Item.scss";

function Item(props) {
  return (
    <Card >
      <Card.Body>
        <Card.Title >{props.name}</Card.Title>
        <Card.Text className="fw-bold">
          Description
        </Card.Text>
        <Card.Text>
        {props.description}
        </Card.Text>
        <Card.Text className="fw-bold">
          Due Date
        </Card.Text>
        <Card.Text>
        {props.dueDate}
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Button variant="info">Editar</Button>
        <Button variant="info">Eliminar</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;