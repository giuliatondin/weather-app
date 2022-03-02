import React, { useState } from "react";
import { Container } from '@mui/material';

import './App.scss';
import SearchBar from "./components/SearchBar/SearchBar";
import WeatherInfo from "./components/WeatherInfo/WeatherInfo";

function App() {

  const [cityWeather, setCityWeather] = useState([])
  const [location, setLocation] = useState('')

  return (
    <div className="App">
      <Container>
        <p className="page__info">Insira o nome de uma cidade, estado ou país: </p>
        <SearchBar location={location} setLocation={setLocation} setCityWeather={setCityWeather}/>
        { cityWeather.length !== 0 && ( <WeatherInfo cityWeather={cityWeather} /> )}
      </Container>
    </div>
  );
}

export default App;
