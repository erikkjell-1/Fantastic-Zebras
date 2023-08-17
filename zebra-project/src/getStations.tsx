import { Coords, StopLocation } from "./interfaces";
import { Data } from "./interfaces";

type ReactSetState<T> = React.Dispatch<React.SetStateAction<T>>

function getPosition(setPosition: ReactSetState<Coords | null>) {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position: GeolocationPosition) => {

        const coords: GeolocationCoordinates = position.coords;

        setPosition({lat: coords.latitude, lon: coords.longitude})
        console.log(coords);
        console.log(position);

      }, error => {
        console.log('position error', error);
        setPosition(null)
      })
    }
  }

const apiKey: string ='b4c630ea-b9b0-4bf9-967f-60537212e062'

async function reverseGeocode(lat: number, lon: number, setStation:any) {
  const url = `https://api.resrobot.se/v2.1/location.nearbystops?originCoordLat=${lat}&originCoordLong=${lon}&format=json&accessId=${apiKey}`
  const response = await fetch(url)
  const data: Data = await response.json()
  console.log(data.stopLocationOrCoordLocation);

  //setStation(data.stopLocationOrCoordLocation)
  setStation(data)
}

export { getPosition, reverseGeocode }