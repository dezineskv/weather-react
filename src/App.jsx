import "./App.css";
import "./backend/script";
import React, { useState } from "react";

const resultEl = document.getElementById("result");

function App() {
  const [data, setData] = useState("");
  const [city, setCity] = useState("San Francisco");
  const date = new Date();
  const today = date.toLocaleDateString();

  async function fetchWeather() {
    try {
      const res = await fetch(`http://localhost:3001/weather?q=${city}`);
      const data = await res.json();
      // const temperature = Math.round(((data.main.temp - 273.15) * 9) / 5 + 32);
      console.log(data);
      setData(data);
      setCity("");
    } catch (err) {
      console.error("Fetch error:", err);
      resultEl.innerText = "Error fetching weather";
    }
  }

  // Allow user to search for their city then clear input field
  function handleSearch(e) {
    e.preventDefault();
    if (city) fetchWeather();
    city.focus();
  }

  return (
    <>
      <div className="h-100 mb-auto">
        <form onSubmit={handleSearch} className="col-md-6 m-auto py-5 form">
          <div className="input-group mb-3">
            <input
              type="text"
              placeholder="enter city"
              className="form-control"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <div className="input-group-append">
              <button type="submit" className="btn btn-danger">
                Search
              </button>
            </div>
          </div>
        </form>
        <div className="weather-status text-white text-center">
          Search your city's current weather
          {data && (
            <div>
              <h2>{data.name}</h2>
              <h4>{Math.round(((data.main.temp - 273.15) * 9) / 5 + 32)} °F</h4>

              <h4>{data.weather[0].description}</h4>
              <img
                src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                alt="icon"
              />
            </div>
          )}
        </div>
        <div className="weather-initial text-black text-left">
          {city}
          <br />
          {today}
        </div>
      </div>
    </>
  );
}

export default App;
