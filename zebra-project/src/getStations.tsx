type ReactSetState<T> = React.Dispatch<React.SetStateAction<T>>

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

const apiKey: string ='b4c630ea-b9b0-4bf9-967f-60537212e062'

async function reverseGeocode(lat: number, lon: number, setStation) {
  const url = `https://api.resrobot.se/v2.1/location.nearbystops?originCoordLat=${lat}&originCoordLong=${lon}&format=json&accessId=${apiKey}`
  const response = await fetch(url)
  const data= await response.json()
  console.log(data.stopLocationOrCoordLocation);

  //setStation(data.stopLocationOrCoordLocation)
}

export { getPosition, reverseGeocode }