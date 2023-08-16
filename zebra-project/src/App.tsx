import React, { useState } from 'react'
import './App.css'

type ReactSetState<T> = React.Dispatch<React.SetStateAction<T>>

function App() {
  const [message, setMessage] = useState<string>('')

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

  return (
    <div>

    <button onClick={() => getPosition(setMessage)}> See location </button>
    <p> { message } </p>
    </div>
  )
}

export default App
