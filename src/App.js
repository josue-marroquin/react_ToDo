import './App.scss';
import Formulario from './Components/Formulario/Formulario';
import Item from './Components/Item/Item';
import Menu from './Components/Menu/Menu'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSelector } from 'react-redux';

function App() {
  const goals = useSelector((state) => state.goals.value);
  return (
    <div className="App">
      <Menu></Menu>
      <header className="App-header">
      <Container>
        <Row>
          <Col>
            <Formulario></Formulario>  
          </Col>
          <Col>
            {goals.map((task, index)=>(
              <Item name={task.name} description={task.description} dueDate={task.dueDate}></Item>
            ))}
          </Col>
        </Row>
      </Container>      
      </header>
    </div>
  );
}

export default App;
