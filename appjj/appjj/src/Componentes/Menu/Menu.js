import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Menu.scss";
import { changeOption } from '../reducers/optionSlice';
import { useDispatch, useSelector } from 'react-redux';





function Menu() {
  
  const option=useSelector((state)=> state.option.value);
  const dispatch = useDispatch();

  const changeOptionFunction = (e)=>{
  e.preventDefault();

    if (option ==='tasks')
        dispatch(changeOption('goals'));
      else 
        dispatch(changeOption('tasks'));

  }

  return (
    <Navbar expand="lg" className="navbar navbar-dark bg-dark">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse >
          <Nav>
            <Nav.Link href="#home" >Tasks</Nav.Link>
            <Nav.Link href="#link" onClick={changeOptionFunction}>Goals</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;