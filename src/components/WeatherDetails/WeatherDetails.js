import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './WeatherDetails.scss';

const WeatherDetails = ({cityWeather}) => {

  const [cityForecast, setCityForecast] = useState([]);

  const fetchForecast = async () => {
    const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${cityWeather.coord.lat}&lon=${cityWeather.coord.lon}&exclude=hourly,minutely,current&appid=895284fb2d2c50a520ea537456963d9c&lang=pt_br&units=metric`);
    setCityForecast(data);
  }

  useEffect(() => {
    fetchForecast()
  }, [cityWeather]);

  return (
    <section className="forecast">
      <p>Previsão do tempo para a semana:</p>
      <div className="page__forecast">
        { cityForecast.daily && cityForecast.daily.map((item) => (
          <div key={item.dt} className="page__forecast--item">
            <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`} alt="Weather icon" />
            <div className="page__forecast--detail">
              <p>{Math.round(item.temp.min)}º</p>
              <p>{Math.round(item.temp.max)}º</p>
            </div>
          </div>
        )) }
      </div>
    </section>
  );
};

export default WeatherDetails;