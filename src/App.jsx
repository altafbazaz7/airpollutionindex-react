import React from 'react';
import WeatherApp from './Components/AirPollutionIndex/AirPollutionIndex';
import "./App.css";
import "./Components/AirPollutionIndex/AirPollutionIndex.scss";
import Navbar from './Components/Navbar/Navbar';

const App = () => {
  return (
    <>
    <Navbar/>
 
    <WeatherApp/>
    </>
  )
}

export default App
