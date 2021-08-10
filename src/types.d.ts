
export type Location = {
    latitude: number,
    longitude: number,
    bearing: number
  }
  
export type Driver = {
    driver_id : string,
    location: Location
}

export type DriversApiResponse = {
    pickup_eta: number,
    drivers: Driver[]
}