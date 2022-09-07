import React from "react";
import mockGoal from "../mock-data/goal-data";
import { Link } from "react-router-dom";

const displayGoals = (goal) => {
  const goals = goal.title;
  return goals;
};

const GoalsPage = (props) => {
  const goals = displayGoals(mockGoal);
  return (
    <div>
      {console.log(goals)}
      <p>Homepage/All goals page</p>
      <Link to="/goals/:id">{goals}</Link>
    </div>
  );
};

export default GoalsPage;
