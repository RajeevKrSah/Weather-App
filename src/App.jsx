import React, { useState, useEffect } from 'react';
import Weather from './components/Weather';
import SearchBar from './components/SearchBar';
import axios from 'axios';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState({ lat: 40.7128, lon: -74.006 }); // Default: New York
  const [city, setCity] = useState('New York');

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.open-meteo.com/v1/forecast?latitude=${location.lat}&longitude=${location.lon}&current_weather=true&humidity=true`
        );
        setWeatherData({ ...response.data.current_weather, city });
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeather();
  }, [location, city]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500 flex justify-center items-center">
      <div className="w-full max-w-md">
        <SearchBar setLocation={setLocation} setCity={setCity} />
        {weatherData ? <Weather data={weatherData} /> : <p className="text-white text-center">Loading...</p>}
      </div>
    </div>
  );
}

export default App;
