import { useState, useEffect } from 'react';
import axios from 'axios';

const useWeather = (apiKey) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = async (city) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`
      );
      setWeatherData(response.data);
    } catch (err) {
      setError('Failed to fetch data');
    } finally {
      setLoading(false);
    }
  };

  return { weatherData, loading, error, fetchWeather };
};

export default useWeather;
