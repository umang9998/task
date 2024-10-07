import React, { useState, useEffect } from 'react';

const Task18 = () => {
  const [coordinates, setCoordinates] = useState({ latitude: null, longitude: null });
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser');
      return;
    }

    const successHandler = (position) => {
      const { latitude, longitude } = position.coords;
      setCoordinates({ latitude, longitude });
    };

    const errorHandler = (err) => {
      setError(`Error: ${err.message}`);
    };

    const watchId = navigator.geolocation.watchPosition(successHandler, errorHandler);

    return () => {
      navigator.geolocation.clearWatch(watchId);
    };
  }, []); 

  return (
    <div>
      <h1>Geolocation Tracker</h1>
      {error ? (
        <p>{error}</p>
      ) : coordinates.latitude && coordinates.longitude ? (
        <p>
          Latitude: {coordinates.latitude} <br />
          Longitude: {coordinates.longitude}
        </p>
      ) : (
        <p>Fetching location...</p>
      )}
    </div>
  );
};

export default Task18;
