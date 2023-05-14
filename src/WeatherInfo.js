import React from "react";
import FormattedDate from "./FormattedDate";

import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <ul className="main">
        <li>
          <h1>{props.data.city}</h1>
        </li>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="d-flex">
            <div className="col-6">
              <img src={props.data.iconUrl} alt="icon"></img>
            </div>

            <h2>
              <WeatherTemperature celsius={props.data.temperature} />
            </h2>
          </div>
        </div>
        <div className="col-6">
          <ul className="today">
            <li className="text-capitalize">{props.data.description}</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
