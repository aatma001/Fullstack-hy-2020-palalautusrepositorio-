import React, { useState, useEffect } from "react";
import axios from "axios";

const ShowWeather = ({ country }) => {
  const [weather, setNewWeather] = useState("");

  useEffect(() => {
    const params = {
      access_key: process.env.REACT_APP_API_KEY,
      query: country.capital,
    };

    console.log("effect");
    axios
      .get("http://api.weatherstack.com/current", { params })
      .then((response) => {
        console.log("promise fulfilled");
        setNewWeather(response.data.current);
      });
  }, [country]);

  return (
    <div>
      <h4>Weather in {country.name}</h4>
      <div>
        <strong>Temperature:</strong> {weather.temperature} celcius
      </div>
      <img src={weather.weather_icons} alt="Weather png" />
      <div>
        <strong>Wind</strong> {weather.wind_speed} mph Direction{" "}
        {weather.wind_dir}
      </div>
    </div>
  );
};

export default ShowWeather;
