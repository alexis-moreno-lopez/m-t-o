import React, { useState } from "react";
import "./Weather.css";
import sun from "../../assets/icons/sun.svg";

function Weather() {
  const [WeatherData, setWeatherData] = useState(null);
  return (
    <div className="card-content white-text">
      <span className="card-title">Lyon</span>
      <p>
        <img alt="sun" src={sun} />
      </p>
      <span className="temperature">15°</span>
      <div className="wind">Vent 1km/h (360°)</div>
    </div>
  );
}

export default Weather;
