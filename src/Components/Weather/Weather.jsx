import React, { useState } from "react";
import "./Weather.css";
import sun from "../../assets/icons/sun.svg";

function Weather({ city, tempC, wind, windDegree }) {
  
  return (
    <div className="card-content white-text">
      <span className="card-title">{city}</span>
      <p>
        <img alt="sun" src={sun} />
      </p>
      <span className="temperature">{tempC}°</span>
      <div className="wind">Vent {wind}km/h ({windDegree}°)</div>
    </div>
  );
}

export default Weather;
