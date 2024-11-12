import React, { useState } from 'react';
import axios from 'axios';

function SearchBar({ setLocation, setCity }) {
  const [input, setInput] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/search?q=${input}&format=json&limit=1`
      );
      if (response.data.length > 0) {
        const { lat, lon, display_name } = response.data[0];
        setLocation({ lat: parseFloat(lat), lon: parseFloat(lon) });
        setCity(display_name.split(',')[0]); // Set the city name
      } else {
        alert('City not found!');
      }
    } catch (error) {
      console.error('Error fetching geolocation:', error);
    }
  };

  return (
    <div className="flex justify-center mb-6">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter city"
        className="w-3/4 p-3 rounded-l-lg focus:outline-none"
      />
      <button onClick={handleSearch} className="bg-white p-3 rounded-r-lg">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16l4-4m0 0l-4-4m4 4h8m2 4v-8m0 0L18 8" />
        </svg>
      </button>
    </div>
  );
}

export default SearchBar;
