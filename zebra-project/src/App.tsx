import { useState } from 'react'
import './App.css'
import { getPosition } from './getStations'
import { reverseGeocode } from './getStations'
import { Data } from './interfaces'
import { StopLocation, Coords } from "./interfaces";


function App() {
  const [position, setPosition] = useState<Coords | null>(null)
  const [station, setStation] = useState<Data | null>(null)
  const [departure, setDeparture] = useState('')

  function handleClick() {
    
  }


  return (
    <div>

      <button onClick={() => getPosition(setPosition)}> See location </button>
      <p>Your position is {position?.lat} {position?.lon}</p>
    
    {position ? 
      <button onClick={() =>reverseGeocode(position.lat, position.lon, setStation)}>Stations</button>
    : <p> hej </p>
    }
      {station ?
      station.stopLocationOrCoordLocation.map(stop => (
      <ul> 
          <button onClick={handleClick} key={stop.StopLocation.extId}>{stop.StopLocation.name}{stop.StopLocation.dist}</button>
      </ul>
      ))
    : <p>ingen station</p>
    }

    </div>
  )
}

export default App
