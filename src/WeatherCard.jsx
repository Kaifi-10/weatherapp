import React from 'react';
import './Weather.css';

const WeatherCard = ({title, data}) => {
//   const { location, current } = weatherData;

  return (
    <div className="weather-card">
      
      <div>{title} </div>
      <div>{data} </div>      
    </div>
  );
};

export default WeatherCard;
