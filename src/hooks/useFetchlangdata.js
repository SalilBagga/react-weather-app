import { useState, useEffect } from 'react';

//config
import API_KEY from '../config/config';

export const useFetchlangdata = (input) => {
  const [error, setError] = useState(null);
  const [invalidInput, setInvalidInput] = useState(false);
  const [data, setData] = useState(null);

  const fetchlangdata = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${input[0]}&lon=${input[1]}&appid=${API_KEY}`;

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
      fetchlangdata();
    }
  }, [input]);

  return { fetchlangdata, error, invalidInput, data };
};
