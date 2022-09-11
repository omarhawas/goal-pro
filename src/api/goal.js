import goalsData from "../mock-data/goals-data";

export const getGoal = () => {
  // change here to make an axios call when the API is ready.
  return goalsData.goals[0];
};
