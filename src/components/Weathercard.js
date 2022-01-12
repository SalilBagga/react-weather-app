import React from 'react';

import './Weather.css';
import '../components/weather-icons.min.css';
export default function Weathercard({ cityData }) {
  const celcius = Math.round(cityData.main.temp - 273.15);
  return (
    <div>
      <article>
        <div className="articleBox mt-4">
          <div className="whiteBoxDetails row">
            <div className="iconBox col-6">
              <i className={`wi wi-owm-${cityData.weather[0].id}`}></i>
            </div>
            <div className="infoBox col-6">
              <div> {cityData.weather[0].main}</div>
              <div>
                <span> {celcius}&deg;</span>
              </div>
              <div>
                {cityData.name}, {cityData.sys.country}
              </div>
            </div>
          </div>
          <div className="blackBox row">
            <div className="col-4">
              <div>
                High/Low - {Math.floor(cityData.main.temp_max - 273.15)}/
                {Math.floor(cityData.main.temp_min - 273.15)}
              </div>
              <div>Humidity - {cityData.main.humidity}</div>
            </div>
            <div className="col-4">
              <div>Pressure - {cityData.main.pressure}</div>
              <div>Visibility - {cityData.visibility}</div>
            </div>
            <div className="col-4">
              <div>Description - {cityData.weather[0].description}</div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
