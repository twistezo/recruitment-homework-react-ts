import { LocationShape } from 'components/Location'

export interface GetLocationsIdData {
  locations: Pick<LocationShape, 'id'>[]
}

export interface GetLocationData {
  location: LocationShape
}

export interface GetLocationInput {
  id: LocationShape['id']
}
