import React from "react";
import "./Days.css";
import { addDays, format } from "date-fns";

function Days({ handleClickDay }) {
  const currentDate = new Date();
  const days = Array.from({ length: 5}, (_,index) => addDays(currentDate, index));

  // let days = [];
  // for (let i = 0; i < 5; i = i + 1) {
  //   days.push(format(addDays(date, i), 'EEEE'));
  }

  return (
    <div className="card-action">
      {days.map((day, index) => (
        <a 
        href="#"
        onClick={handleClickDay}
        key={index}
        className={index === 0 ? "clickedDay" : "" }
          id={index}
          onClick={handleClickDay}
        >
          {format(day, 'EEEE')}
        </a>
      ))

      }
    </div>
  );


export default Days;
