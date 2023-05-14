import React from "react";

export default function WeatherTemperature(props) {
  return (
    <div className="WeatherTemperature">
      <span className="temperature">{Math.round(props.celsius)}</span>
      <span className="unit">
        °C | <a href="F">F</a>{" "}
      </span>
    </div>
  );
}
