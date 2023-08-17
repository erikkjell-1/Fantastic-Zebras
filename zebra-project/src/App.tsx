import { useState } from 'react'
import './App.css'
import { getPosition } from './getStations'
import { reverseGeocode } from './getStations'
import { Data } from './interfaces'
import { StopLocation, Coords, Selected } from "./interfaces";



function App() {
  const [position, setPosition] = useState<Coords | null>(null)
  const [station, setStation] = useState<Data | null>(null)
  const [selectedStop, setSelectedStop] = useState<Selected | null>(null)

function handleClick(stop: Selected) {
  setSelectedStop(stop)
  console.log(stop);
  
  
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
       
          <button onClick={() => handleClick(stop.StopLocation)} key={stop.StopLocation.extId}>{stop.StopLocation.name}{stop.StopLocation.dist}</button>
      
      ))
    : <p>ingen station</p>
    }

    </div>
  )
}

export default App


//välja hållplats
//få fram tidtabeller för den valda hållplatsen
// - hämta tidtabeller från API
// - spara tidtabeller i state
//Visa tiderna