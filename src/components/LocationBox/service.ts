import { LazyQueryExecFunction } from '@apollo/client'
import { GetLocationData, GetLocationInput } from 'api/types'
import { LocationShape } from 'components/Location'
import { Dispatch, SetStateAction } from 'react'

export default class LocationBoxService {
  static fetchLocation = ({
    lastLocationId,
    getLocation,
    setLocation,
    setShouldReload
  }: {
    lastLocationId: string
    getLocation: LazyQueryExecFunction<GetLocationData, GetLocationInput>
    setLocation: Dispatch<SetStateAction<LocationShape | undefined>>
    setShouldReload: Dispatch<SetStateAction<boolean>>
  }) =>
    void getLocation({ variables: { id: lastLocationId } }).then(res => {
      console.log('-----')
      console.log('here')
      const { data } = res

      if (data) {
        const { location } = data
        console.log('location', location)
        setLocation(location)
        setShouldReload(false)
      }
    })
}
