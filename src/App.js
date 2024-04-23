import './App.scss';
import Formulario from './Components/Formulario/Formulario';
import Item from './Components/Item/Item';
import Menu from './Components/Menu/Menu'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
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
            <Item></Item>
            <Item></Item>
            <Item></Item>
          </Col>
        </Row>
      </Container>      
      </header>
    </div>
  );
}

export default App;
