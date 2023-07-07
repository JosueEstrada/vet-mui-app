import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import resourceTimeGridPlugin from "@fullcalendar/resource-timegrid";
import esLocale from "@fullcalendar/core/locales/es";

export default function MyCalendar() {
  const [events, setEvents] = useState([
    { id: 1, title: "FERIADO", date: "2023-07-01" },
    {
      title: "PONENCIA DE MEDICOS",
      start: "2023-07-25",
      end: "2023-07-28",
      allDay: true,
      HostName: "Dr. William",
    },
    {
      title: "DELIVERY REACTIVOS",
      date: "2023-07-11",
      allDay: true,
    },
    {
      title: "DESPARASITACION GATOS",
      start: "2023-07-15",
      end: "2023-07-16",
      allDay: true,
    },
    {
      title: "Fiscalización",
      start: "2023-07-20",
      end: "2023-07-21",
      allDay: true,
    },
    {
      title: "CAMPAÑA DE VACUNACION",
      start: "2023-07-05",
      end: "2023-07-07",
      allDay: true,
    },
  ]);

  const handleDateClick = (arg) => {
    alert(arg.dateStr);
  };

  const handleSelectedDates = (info) => {
    alert("selected " + info.startStr + " to " + info.endStr);
    const title = prompt("What's the name of the title");
    console.log(info);
    if (title != null) {
      const newEvent = {
        title,
        start: info.startStr,
        end: info.endStr,
      };
      const data = [...events, newEvent];
      setEvents(data);
      console.log("here", data);
    } else {
      console.log("nothing");
    }
  };

  return (
    <div>
      <FullCalendar
        locale={esLocale}
        schedulerLicenseKey="GPL-My-Project-Is-Open-Source"
        defaultView="dayGridMonth"
        dateClick={handleDateClick}
        displayEventTime={true}
        header={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
        }}
        selectable={true}
        plugins={[
          dayGridPlugin,
          interactionPlugin,
          timeGridPlugin,
          resourceTimeGridPlugin,
        ]}
        eventClick={(event) => {
          console.log(event.event._def.publicId);
        }}
        events={events}
        select={handleSelectedDates}
        eventLimit={3}
      />
    </div>
  );
}
