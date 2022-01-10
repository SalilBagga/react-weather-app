import React, { useState } from 'react';

//import component
import Searchbar from '../components/Searchbar';
import Weathercard from '../components/Weathercard.js';
import Alertpop from '../components/Alertpop.js';
import { useFetchdata } from '../hooks/useFetchdata';
export default function Home() {
  const [city, setCity] = useState(null);
  const [invalidCity, setInvalidCity] = useState(false);
  const { error, invalidInput, data } = useFetchdata(city);
  return (
    <div>
      <Searchbar setCity={setCity} invalidInput={invalidInput} error={error} />
      {data && <Weathercard cityData={data} />}
    </div>
  );
}
