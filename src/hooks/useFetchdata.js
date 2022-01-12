import { useState, useEffect } from 'react';

export const useFetchdata = (input) => {
  const [error, setError] = useState(null);
  const [invalidInput, setInvalidInput] = useState(false);
  const [data, setData] = useState(null);

  const fetchdata = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&APPID=${process.env.REACT_APP_WEATHER_API_KEY}`;

    setError(null);
    // sign the user out
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      const data = await res.json();
      setData(data);
      setError(null);
      setInvalidInput(false);
    } catch (err) {
      setError(err.message);
      setData(null);
    }
  };

  useEffect(() => {
    if (input) {
      fetchdata();
    }
  }, [input]);

  return { fetchdata, error, invalidInput, data };
};
