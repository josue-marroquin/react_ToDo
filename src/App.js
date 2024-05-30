import './App.scss';
import Formulario from './Components/Formulario/Formulario';
import Item from './Components/Item/Item';
import Menu from './Components/Menu/Menu'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { initAddTask } from './Reducers/taskSlice';
import { initAddGoal } from './Reducers/goalsSlice';

function App() {

  const goals = useSelector((state) => state.goals.value);
  const tasks = useSelector((state) => state.tasks.value);
  const option = useSelector((state) => state.option.value);
  const dispatch = useDispatch();

  function initFetchTasks() { 
    fetch("http://localhost:3001/tasks/getTasks", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "12345"
      }
    }).then((response)=> {
      return response.json();
    }).then((response)=> {
      response.map((task)=> {
        dispatch((initAddTask(response)));
      })
    }).catch((err)=> {
      console.log(err);
    })
  }

  function initFetchGoals() { 
    fetch("http://localhost:3001/goals/getGoals", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "12345"
      }
    }).then((response)=> {
      return response.json();
    }).then((response)=> {
      response.map((task)=> {
        dispatch((initAddGoal(response)));
      })
    }).catch((err)=> {
      console.log(err);
    })
  }

  // Para hacer la llamada initFetch cada vez que la pagina se recarge
  // Para hacer la recuperacion de datos inicial en ambas tablas" se hizo un initFetch para 
  // -cada una de ellas.
  useEffect(()=> {
    initFetchTasks();
    initFetchGoals();
  }, [])

  // App Return 
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
            <div className='scrolling'>
                { option === "goals" &&
                  goals.map((goal, index)=>(
                  <Item key={index.key} name={goal.name} description={goal.description} dueDate={goal.dueDate}></Item>
                ))}
                { option === "tasks" &&
                  tasks.map((task, index)=>(
                  <Item key={index.key} name={task.name} description={task.description} dueDate={task.dueDate}></Item>
                ))}
            </div>
          </Col>
        </Row>
      </Container>      
      </header>
    </div>
  );
}

export default App;
