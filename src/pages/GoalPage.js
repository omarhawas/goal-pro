import React, { useState, useEffect } from "react";
import { Calendar, globalizeLocalizer } from "react-big-calendar";
import globalize from "globalize";
import { convertDate } from "../utils/date";
import mockGoal from "../mock-data/goal-data";
import { Link } from "react-router-dom";
import { getGoal } from "../api/goal";

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
  const [goal, setGoal] = useState({});
  const eventData = getEventData(mockGoal);
  const [scheduleItem, setScheduleItem] = useState({});

  useEffect(() => {
    const goalData = getGoal();
    setGoal(goalData);
  }, []);

  const handleSelectEvent = (event) => {
    // console.log(event.id);
    const selectedItem = goal.scheduleItems.find((item) => {
      // console.log(item.id);
      return event.id === item.id;
    });
    setScheduleItem(selectedItem);
    setShowScheduledItemModal(true);
  };

  const handleModalClose = () => {
    setShowScheduledItemModal(false);
  };

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
      <ScheduleItemModal
        show={showScheduledItemModal}
        handleClose={handleModalClose}
        scheduleItem={scheduleItem}
      />
      <Link to="/goals">Back to homepage</Link>
    </div>
  );
};

export default GoalPage;
