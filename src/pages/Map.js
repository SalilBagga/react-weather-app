import React, { useState } from 'react';

//components
import Mapbox from '../components/Mapbox';
import Locationdetails from '../components/Locationdetails';
import Alertpop from '../components/Alertpop';
//hooks
import { useFetchlangdata } from '../hooks/useFetchlangdata';
export default function Map() {
  const [currentPos, setCurrentPos] = useState([28.7041, 77.1025]);
  const { error, data } = useFetchlangdata(currentPos);
  return (
    <div>
      {error && <Alertpop error={error} />}
      <Mapbox currentPos={currentPos} setCurrentPos={setCurrentPos} />
      {data && <Locationdetails cityData={data} />}
    </div>
  );
}
