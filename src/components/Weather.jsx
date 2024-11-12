import React from 'react';

function Weather({ data }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg text-center">
      <div className="text-5xl font-bold mb-2">{data.temperature}°C</div>
      <div className="text-2xl text-gray-700 mb-4">{data.city}</div>
      <div className="flex justify-center items-center mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-yellow-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8v4m0 4h.01"
          />
        </svg>
      </div>
      <div className="flex justify-between items-center text-sm text-gray-600">
        <div className="flex flex-col items-center">
          <span>🌊 Humidity</span>
          <span className="font-medium">{data.relative_humidity || 48}%</span>
        </div>
        <div className="flex flex-col items-center">
          <span>🌬️ Wind Speed</span>
          <span className="font-medium">{data.windspeed} km/h</span>
        </div>
      </div>
    </div>
  );
}

export default Weather;
