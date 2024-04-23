import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Item.scss';

function Item() {
  return (
    <Card className='cards' style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Task Title</Card.Title>
        <Card.Text>
          Content of the Task
        </Card.Text>
        <Card.Text>
            Due Date: 
        </Card.Text>
        <Button variant="primary">Mark as Done</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;