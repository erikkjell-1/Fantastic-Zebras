import { useState } from 'react'
import './App.css'
import { getPosition } from './getStations'
import { reverseGeocode } from './getStations'
import { Data } from './interfaces'
import { StopLocation, Coords, Stop } from "./interfaces";



function App() {
  const [position, setPosition] = useState<Coords | null>(null)
  const [station, setStation] = useState<Data | null>(null)
  const [selectedStop, setSelectedStop] = useState<Stop | null>(null)

//Hämtar avgångar inte hittat rätt variabel för att få med extId än
const apiKey: string ='b4c630ea-b9b0-4bf9-967f-60537212e062'
async function getDepartures(extId: string) {
  const url = `https://api.resrobot.se/v2.1/departureBoard?id=${extId}&format=json&accessId=${apiKey}`
  const response = await fetch(url)
  const data = await response.json()

  console.log(data);
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
          <button onClick={() => getDepartures(stop.StopLocation.extId)}>{stop.StopLocation.name}{stop.StopLocation.dist}</button>
      ))
    : <p>ingen station</p>
    }

    </div>
  )
}

export default App


//välja hållplats
//få fram tidtabeller för den valda hållplatsen
// - hämta API
// - spara tidtabeller i state
//Visa tiderna