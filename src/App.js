import React, { useState } from "react";
import "./App.css";
import axios from "axios";

const App = () => {
  const [city, setCity] = useState("");
  const [error, setError] = useState(null);
  const [data, setData] = useState();
  const apiKey="7a4e64f68f32fee84ed16e1e216e0762";
  const SearchWeather = () => {
    if(city) {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
      axios
        .get(url)
        .then((response) => setData(response.data))
        .catch((err) => setError(err.response.data.message));
    }
  };
  return (
    <div className="div1">
      <div className="weatherbg">
        <h1>Weather API</h1>
        <input
          type="text"
          className="inpStyle"
          onChange={(e) => setCity(e.target.value)}
        />
        <button className="butStyle" disabled={city ? false : true} onClick={() => SearchWeather()}>
          Search
        </button>
      </div>
      <div className="card">
        <div className="container">
          <img
            src="https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png"
            className="imgStyle"
          />
          <h6>{error && error}</h6>
          <h5>{!error && data?.name}</h5>
          <h6>{!error && data ? Math.round(data?.main?.temp) - 273.5 +"°C" : "Please enter city name"}</h6>
        </div>
      </div>
    </div>
  );
};

export default App;
