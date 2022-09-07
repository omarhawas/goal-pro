import React, { useEffect, useState } from "react";
import { getGoals } from '../api/goals';
import { Link } from "react-router-dom";

const GoalsPage = (props) => {
  const [goals, setGoals] = useState([]);
  useEffect(() => {
    const goalsData = getGoals();
    setGoals(goalsData);
  }, []);

  return (
    <div>
      <p>Homepage/All goals page</p>
      {goals.map((goal) => (
        <div key={goal.id}>
          <Link to={`/goals/${goal.id}`}>{goal.title}</Link>
        </div>
      ))}
    </div>
  );
};

export default GoalsPage;
