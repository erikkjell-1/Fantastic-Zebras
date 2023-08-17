interface Coords {
    lat: number;
    lon: number;
}

interface Data {
    stopLocationOrCoordLocation: StopLocation[]
  }
  
  interface StopLocation {
    StopLocation: Selected;
  }

  interface Selected {
    dist: number;
    extId: string;
    name: string;
  }
  export type { Data, StopLocation, Coords, Selected }