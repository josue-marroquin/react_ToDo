import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Item.scss';

function Item(props) {
  return (
    <Card className='cards' style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title className='title'>{props.name}</Card.Title>
        <Card.Text className='description'>
          {props.description}
        </Card.Text>
        <Card.Text className='date'>
            {props.dueDate}
        </Card.Text>
        <Button variant="outline-info">Mark as Done</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;