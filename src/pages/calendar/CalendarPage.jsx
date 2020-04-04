import React from "react";
import OftadehLayout from "../../components/OftadehLayout/OftadehLayout";
import OftadehBreadcrumbs from "../../components/OftadehBreadcrumbs/OftadehBreadcrumbs";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import { Paper } from "@material-ui/core";

const localizer = momentLocalizer(moment);

const myEventsList = [
  {
    id: 0,
    title: "Board meeting",
    start: new Date(2020, 0, 29, 9, 0, 0),
    end: new Date(2020, 0, 29, 13, 0, 0),
    resourceId: 1
  },
  {
    id: 1,
    title: "MS training",
    allDay: true,
    start: new Date(2020, 13, 29, 14, 0, 0),
    end: new Date(2020, 0, 29, 16, 30, 0),
    resourceId: 2
  },
  {
    id: 2,
    title: "Team lead meeting",
    start: new Date(2020, 0, 29, 8, 30, 0),
    end: new Date(2020, 0, 29, 12, 30, 0),
    resourceId: 3
  },
  {
    id: 11,
    title: "Birthday Party",
    start: new Date(2020, 0, 30, 7, 0, 0),
    end: new Date(2020, 0, 30, 10, 30, 0),
    resourceId: 4
  }
];

const CalendarPage = props => {
  const { history } = props;

  return (
    <OftadehLayout>
      <h1>Calendar</h1>
      <OftadehBreadcrumbs path={history} />
      <Paper style={{ padding: "5px" }}>
        <Calendar
          localizer={localizer}
          events={myEventsList}
          // startAccessor="start"
          // endAccessor="end"
          defaultDate={new Date(2020, 1, 1)}
          style={{ height: 500 }}
        />
      </Paper>
    </OftadehLayout>
  );
};

export default CalendarPage;
