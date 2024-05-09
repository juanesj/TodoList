import React, { useEffect } from 'react'; // Importa useEffect aquí con React
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Item from './Componentes/Item/Item';
import Form from './Componentes/Form/Form';
import Menu from './Componentes/Menu/Menu';
import AddingMobileButton from './Componentes/AddingMobileButton/AddingMobileButton';
import { useDispatch, useSelector } from 'react-redux';
import { initAddTodo } from './Componentes/reducers/todoSlice';
import { Col, Container, Row } from 'react-bootstrap';

const list = [
  { name: 'Task 1', description: 'Description for task 1', dueDate: '2024-05-01' },
  { name: 'Task 2', description: 'Description for Task 2', dueDate: '2024-05-02' },
  { name: 'Task 3', description: 'Description for Task 3', dueDate: '2024-05-03' },
  { name: 'Task 4', description: 'Description for Task 4', dueDate: '2024-05-04' },
];

function App() {
  const todos = useSelector(state => state.todos.value);
  const option = useSelector(state => state.option.value); 
  const goals = useSelector(state => state.goals.value);
  const dispatch = useDispatch();

  console.log(todos, option, goals);

  function initFetch() {
    fetch("http://localhost:3000/tasks/getTasks", {
      method: "GET",
      headers: {
        "Content-Type": "application/json", //  "Content-Type"
        "Authorization": "123456"
      }
    }).then(response => {
      return response.json();
    }).then(data => {
      data.forEach(task => {
        dispatch(initAddTodo(data)); // data
      });
    }).catch(err => {
      console.error(err);
    });
  }

  useEffect(() => {
    initFetch();
  }, []);

  return (
    <div className="App">
      <Menu />
      <Container>
        <Row>
          <Col xs={12} md={6} className="d-none d-md-block"> {/* Ajuste de clases de Bootstrap */}
            <Form />
          </Col>
          <Col xs={12} sm={12}>
            <Row className="d-md-none">
              <div className="bg-transparent">
                <AddingMobileButton className="float-left"/>
              </div>
            </Row>
            <Row>
              <div className="scrolling">
                {option === 'tasks' && todos.map((todo, index) => (
                  <Item key={index} name={todo.name} description={todo.description} dueDate={todo.dueDate} />
                ))}
                {option === 'goals' && goals.map((goal, index) => ( // Corregido para mostrar metas solo si se seleccionan metas
                  <Item key={index} name={goal.name} description={goal.description} dueDate={goal.dueDate} />
                ))}
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
