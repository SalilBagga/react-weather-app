import React from 'react';

import './Locationdetails.css';
import '../components/weather-icons.min.css';
export default function Locationdetails({ cityData }) {
  const celcius = Math.round(cityData.main.temp - 273.15);
  return (
    <div>
      <article>
        <div className="location-articleBox mt-4">
          <div className="location-blackBoxs-left row ml-2 ">
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
          </div>
          <div className="location-whiteBoxDetail row">
            <div className="iconBox col-5">
              <i className={`wi wi-owm-${cityData.weather[0].id}`}></i>
            </div>
            <div className="infoBox col-6">
              <div>{cityData.weather[0].main}</div>
              <div>
                <span> {celcius}&deg;</span>
              </div>
              <div>
                {cityData.name}, {cityData.sys.country}
              </div>
            </div>
          </div>
          <div className="location-blackBoxs-right row">
            <div className="col-5">
              <div>Longitude - {cityData.coord.lon}</div>
              <div>Latitude - {cityData.coord.lat}</div>
            </div>
            <div className="col-6">
              <div>Description - {cityData.weather[0].description}</div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
