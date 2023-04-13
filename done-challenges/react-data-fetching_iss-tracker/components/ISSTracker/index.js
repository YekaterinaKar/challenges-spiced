import { useEffect, useState } from "react";
import Controls from "../Controls/index";
import Map from "../Map/index";

import useSWR from "swr";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function ISSTracker() {
  // const [coords, setCoords] = useState(0);

  const { data, isLoading, error } = useSWR(URL, fetcher, {
    refreshInterval: 5000,
  });
  console.log(data);

  if (isLoading) {
    return <h1>it is Loading</h1>;
  }

  if (error) {
    return <h1> {error.message}</h1>;
  }

  /* const [coords, setCoords] = useState({
    longitude: 0,
    latitude: 0,
  });
  setCoords(coords);
  /* async function getISSCoords() {
    try {
      const response = await fetch(URL);
      if (response.ok) {
        const data = await response.json();
        setCoords({ longitude: data.longitude, latitude: data.latitude });
      }
    } catch (error) {
      console.error(error);
    }
  }*/

  /* useEffect(() => {
    const timer = setInterval(() => {
      getISSCoords();
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, []); */

  return (
    <main>
      <Map longitude={data.longitude} latitude={data.latitude} />
      <Controls
        longitude={data.longitude}
        latitude={data.latitude}
        // onRefresh={getISSCoords}
      />
    </main>
  );
}
