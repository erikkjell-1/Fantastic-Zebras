import { useState } from 'react'
import './App.css'
import { getPosition } from './getStations'
import { reverseGeocode } from './getStations'


function App() {
  const [message, setMessage] = useState<string>('')
  const [station, setStation] = useState()

  const lat = 59.3297408, lon = 18.0224

  

  return (
    <div>

    <button onClick={() => getPosition(setMessage)}> See location </button>
    <p> { message } </p>
   
    <button onClick={() =>reverseGeocode(lat, lon, setStation)}>Stations</button>
    <p>{ station }</p>
    </div>
  )
}

export default App
