interface Coords {
    lat: number;
    lon: number;
}

interface Data {
    stopLocationOrCoordLocation: StopLocation[]
  }
  
  interface StopLocation {
    StopLocation: {
        dist: number;
        extId: string;
        name: string;
    }
  }

  export type { Data, StopLocation, Coords }