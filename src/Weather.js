import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import Date from "./Date";

export default function Search() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [Weather, setWeather] = useState(null);

  function showWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),

      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "13065ab195dea106282943aa8c990bea";
    let units = "metric";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiURL).then(showWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="Type a City..." onChange={updateCity} />
      <button type="submit">search</button>
    </form>
  );
  if (loaded) {
    return (
      <div>
        {form}{" "}
        <div className="container">
          <div className="row">
            <div className="col-6">
              <h1 class="text-capitalize">{city}</h1>
            </div>
          </div>

          <div className="row">
            <div className="col-5">
              <ul className="today">
                <li>
                  <Date date={Weather.date} />
                </li>
                <li>Wind Speed {Weather.wind}KM/hr</li>
                <li>Humidity {Weather.humidity}%</li>
                <li>Conditions {Weather.description}</li>
              </ul>
            </div>
            <div className="col-5">
              <h2>
                {Math.round(Weather.temperature)}°{" "}
                <span className="celfar">
                  C | <a href="F">F</a>
                </span>
              </h2>
            </div>
            <div className="col-2">
              <img
                className="nowImage"
                src={Weather.icon}
                alt={Weather.description}
              />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return form;
  }
}
