import React from "react";
import { Calendar, globalizeLocalizer } from "react-big-calendar";
import globalize from "globalize";

const localizer = globalizeLocalizer(globalize);

const GoalPage = (props) => {
  return (
    <div>
      <p>GOAL PAGE</p>
      <Calendar
        localizer={localizer}
        // events={myEventsList}
        // startAccessor="start"
        // endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
};

export default GoalPage;
