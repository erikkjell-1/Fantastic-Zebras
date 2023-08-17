import { useState } from 'react'
import './App.css'
import { getPosition } from './getStations'
import { reverseGeocode } from './getStations'
import { Data } from './interfaces'
import { StopLocation, Coords } from "./interfaces";



function App() {
  const [position, setPosition] = useState<Coords | null>(null)
  const [station, setStation] = useState<Data | null>(null)

 let stops: null | StopLocation[] = null;
 if (station) {
  stops = station.stopLocationOrCoordLocation
 }

  return (
    <div>

    <button onClick={() => getPosition(setPosition)}> See location </button>
    <p>Your position is {position?.lat} {position?.lon}</p>
   
    <button onClick={() =>reverseGeocode(lat, lon, setStation)}>Stations</button>
    <p>{ station }</p>
    </div>
  )
}

export default App
