import React from "react";
import "./AirPollutionIndex.scss";
import { useState } from "react";
import axios from "axios";
import image from "./chart.png";
import Navbar from "../Navbar/Navbar";

const AirPollutionIndex = () => {
  const [Search, setSearch] = useState("");
  const [Data, setData] = useState([]);

  const handleClick = async() => {
    if(Search !== ""){
    const response = await axios.get(`http://api.waqi.info/feed/${Search}/?token=636824b0a15cba93f6a62ec3252407fd133d5e9a`)
    setData([response.data.data]);
      
    
    }else{
      alert('Please Enter City Name...')
    }
  
  };
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="chart">
          <h1>AIR POLLUTION INDEX</h1>
          <img src={image} alt="" style={{ height: "350px", width: "550px" }} />
        </div>
        <div className="lowerContainer">
          <div className="inputBtn">
            <input
              type="text"
              name="input"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              required
              placeholder="Enter City Name..."
            />
            <button onClick={handleClick}>Get Data</button>
          </div>
          <div className="subContainer">
            {Data.map((curElem, idx) => {
              return (
                <>
                  <div key={curElem} className="displayData">
                    <h3>City Name: {curElem.city.name}</h3>
                    <h3>Time Zone : {curElem.time.tz}</h3>
                    <h4>Air Quality Index: {curElem.aqi}</h4>
                    <div>
                      <h4>
                        Average O3 Level Today:{" "}
                        {curElem.forecast.daily.o3[7].avg}
                      </h4>
                      <h4>
                        Average pm10 Level Today:{" "}
                        {curElem.forecast.daily.pm10[7].avg}
                      </h4>
                      <h4>
                        <b>Average pm25 Level Today:</b>{" "}
                        {curElem.forecast.daily.pm25[7].avg}
                      </h4>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default AirPollutionIndex;
