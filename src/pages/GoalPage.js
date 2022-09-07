import React from "react";
import { Calendar, globalizeLocalizer } from "react-big-calendar";
import globalize from "globalize";
import { convertDate } from "../utils/date";
import mockGoal from "../mock-data/goal-data";
import { Link } from "react-router-dom";

const localizer = globalizeLocalizer(globalize);

const getEventData = (goal) => {
  const eventData = goal.scheduleItems.map((scheduleItem) => {
    return {
      id: scheduleItem.id,
      title: scheduleItem.action,
      allDay: true,
      start: convertDate(scheduleItem.startDate),
      end: convertDate(scheduleItem.endDate),
    };
  });

  return eventData;
};

const GoalPage = (props) => {
  const eventData = getEventData(mockGoal);
  return (
    <div>
      <p>GOAL PAGE</p>
      <Calendar
        localizer={localizer}
        events={eventData}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
      <Link to="/goals">Back to homepage</Link>
    </div>
  );
};

export default GoalPage;
