import React from 'react';

import './Weathercard.css';
import '../components/weather-icons.min.css';
export default function Weathercard({ cityData }) {
  const celcius = Math.round(cityData.main.temp - 273.15);
  return (
    <div>
      <article className="widget">
        <div className="weatherIcon">
          <i className={`wi wi-owm-${cityData.weather[0].id}`}></i>
          <div className="mainInfo">
            <div className="description">
              <div className="place">{cityData.weather[0].main}</div>
            </div>
            <div className="temperature">
              <span> {celcius}&deg;</span>
            </div>
            <div className="description">
              <div className="place">
                {cityData.name}, {cityData.sys.country}
              </div>
            </div>
          </div>
        </div>
        <div className="weatherInfo">
          <div className="description">
            <div className="place">
              High/Low - {Math.floor(cityData.main.temp_max - 273.15)}/
              {Math.floor(cityData.main.temp_min - 273.15)}
            </div>
            <div className="place">Humidity - {cityData.main.humidity}</div>
          </div>
          <div className="description">
            <div className="place">Pressure, {cityData.main.pressure}</div>
            <div className="place">Visibility - {cityData.visibility}</div>
          </div>
          <div className="temperature">
            <div>Description - {cityData.weather[0].description}</div>
          </div>
        </div>
      </article>
    </div>
  );
}
