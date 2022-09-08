import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {convertDateString} from '../utils/date';
import { Link } from "react-router-dom";

function GoalCard({ goal }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          currentStreak: {goal.currentStreak}
          startDate: {convertDateString(goal.startDate)}
          <Link to={`/goals/${goal.id}`}>{goal.title}</Link>
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default GoalCard;