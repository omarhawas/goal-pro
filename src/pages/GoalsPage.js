import React, { useEffect, useState } from "react";
import { getGoals } from "../api/goals";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import GoalCard from "../components/GoalCard";

const GoalsPage = (props) => {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    const goalsData = getGoals();
    setGoals(goalsData);
  }, []);

  return (
    <div>
      {console.log(goals)}
      <br />
      <br />
      <Row>
        {goals.map((goal) => (
          <Col key={goal.id} s={12} md={6} lg={4}>
            <GoalCard goal={goal} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default GoalsPage;
