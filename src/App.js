import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const apiKey = 'd9bd90fa022748a4b6962a6b9e03b11e';

const App = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`
      );
      if (response.data.success === false) {
        setError('City not found');
        setWeatherData(null);
      } else {
        setWeatherData(response.data);
        setError('');
      }
    } catch (error) {
      setError('Error fetching weather data');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-indigo-600 text-white flex flex-col">
      <Navbar />
      <div className="flex-grow container mx-auto py-8">
        <h1 className="text-center text-4xl font-bold mb-6">Weather Dashboard</h1>
        <div className="flex justify-center items-center">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city name"
            className="rounded-l-md p-3 w-64 focus:outline-none text-gray-900"
          />
          <button
            onClick={fetchWeather}
            className="bg-yellow-500 text-black rounded-r-md px-4 py-3 hover:bg-yellow-600 transition"
          >
            Get Weather
          </button>
        </div>

        {error && (
          <p className="text-red-500 text-center mt-4">{error}</p>
        )}

        {weatherData && (
          <div className="mt-8 text-center space-y-4">
            <h2 className="text-2xl font-bold">{weatherData.location.name}</h2>
            <p className="text-lg">
              {weatherData.current.weather_descriptions[0]}
            </p>
            <div className="flex justify-center items-center space-x-4">
              <img
                src={weatherData.current.weather_icons[0]}
                alt="weather icon"
                className="w-16 h-16"
              />
              <p className="text-4xl">{weatherData.current.temperature}°C</p>
            </div>
            <div className="mt-4 text-lg space-y-2">
              <p>Humidity: {weatherData.current.humidity}%</p>
              <p>Wind Speed: {weatherData.current.wind_speed} km/h</p>
              <p>Feels like: {weatherData.current.feelslike}°C</p>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default App;
