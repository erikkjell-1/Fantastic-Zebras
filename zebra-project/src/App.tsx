import React, { useState } from 'react'
import './App.css'

type ReactSetState<T> = React.Dispatch<React.SetStateAction<T>>

function App() {
  const [message, setMessage] = useState<string>('')
  const [address, setAddress] = useState<string>('')

  const lat = 59.3297408, lon = 18.0224

  function getPosition(setMessage: ReactSetState<string>) {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position: GeolocationPosition) => {

        const coords: GeolocationCoordinates = position.coords;
      
        setMessage(`Your position is: ${coords.latitude} latitude, ${coords.longitude} longitude`)
        
        console.log(coords);
        console.log(position);

      }, error => {
        console.log('position error', error);
        setMessage('Please enable position')
      })
    }
  }
const apiKey ='b4c630ea-b9b0-4bf9-967f-60537212e062'


async function reverseGeocode(lat: number, lon: number, setAddress: ReactSetState<string>) {
  const url = `https://api.resrobot.se/v2.1/location.nearbystops?originCoordLat=${lat}&originCoordLong=${lon}&format=json&accessId=${apiKey}`
  const response = await fetch(url)
  const data: Place[] = await response.json()
  console.log(data);
  
  const firstAddress: string = data[0].name
  setAddress(firstAddress)


}

interface Place {
  name: string;
}

  return (
    <div>

    <button onClick={() => getPosition(setMessage)}> See location </button>
    <p> { message } </p>
   
    <button onClick={() =>reverseGeocode(lat, lon, setAddress)}>Place</button>
    <p>{address}</p>
    </div>
  )
}

export default App
