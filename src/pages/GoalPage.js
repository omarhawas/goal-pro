import React, { useState, useEffect } from "react";
import { Calendar, globalizeLocalizer } from "react-big-calendar";
import globalize from "globalize";
import { convertDate } from "../utils/date";
import mockGoal from "../mock-data/goal-data";
import { Link } from "react-router-dom";

import ScheduleItemModal from "../components/ScheduledItemModal";

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
  const [showScheduledItemModal, setShowScheduledItemModal] = useState(false);
  const eventData = getEventData(mockGoal);

  useEffect(() => {
    // call the api which will return the mock data. This
    // sets the state for goal
  }); 

  const handleSelectEvent = (event) => {
    setShowScheduledItemModal(true);
  }

  const handleModalClose = () => {
    setShowScheduledItemModal(false);
  }

  return (
    <div>
      <p>GOAL PAGE</p>
      <Calendar
        localizer={localizer}
        events={eventData}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        onSelectEvent={handleSelectEvent}
      />
      <ScheduleItemModal show={showScheduledItemModal} handleClose={handleModalClose}/>
      <Link to="/goals">Back to homepage</Link>
    </div>
  );
};

export default GoalPage;
