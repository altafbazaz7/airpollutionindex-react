import React from 'react';
import WeatherApp from './Components/AirPollutionIndex/AirPollutionIndex';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import "./App.css";
import "./Components/AirPollutionIndex/AirPollutionIndex.scss";
import Navbar from './Components/Navbar/Navbar';

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route exact path="/" element={<WeatherApp/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
