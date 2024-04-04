import React from "react";
import "./Days.css";
import { addDays, format } from "date-fns";

function Days({ handleClickDay }) {
  const date = new Date();

  let days = [];
  for (let i = 0; i < 5; i = i + 1) {
    days.push(format(addDays(date, i), 'EEEE'));
  }

  return (
    <div className="card-action">
      {days.map((day, index) => (
        <a 
          href="#"
          id={index}
          key={index}
          onClick={handleClickDay}
          className={index === 0 ? "clickedDay" : "" }
        >
          {day}
        </a>
      ))

      }
    </div>
  );
}

export default Days;
