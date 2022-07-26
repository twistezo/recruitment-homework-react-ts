import { useContext, useEffect, useState } from 'react'
import Location from 'components/Location'
import ReviewForm from 'components/ReviewForm'
import { useLazyQuery } from '@apollo/client'
import { GET_LOCATIONS_ID, GET_LOCATION } from 'api'
import { LocationBoxContext } from 'contexts/LocationBoxContext'
import { GetLocationData, GetLocationInput, GetLocationsIdData } from 'api/types'
import service from './service'
import './LocationBox.scss'

const LocationBox: React.FC = () => {
  const [locationsId, setLocationsId] = useState<string[]>([])
  const [lastLocationId, setLastLocationId] = useState<string>()
  const { location, setLocation, shouldReload, setShouldReload } = useContext(LocationBoxContext)

  const [getLocationsId, { loading: getLocationsIdLoading }] = useLazyQuery<GetLocationsIdData>(
    GET_LOCATIONS_ID
  )
  const [getLocation, { loading: getLocationLoading }] = useLazyQuery<
    GetLocationData,
    GetLocationInput
  >(GET_LOCATION, {
    fetchPolicy: 'no-cache'
  })

  useEffect(() => {
    getLocationsId().then(res => {
      const { data } = res

      if (data) {
        const ids: string[] = data.locations.map((l): string => l.id)
        setLocationsId(ids)
      }
    })
  }, [])

  useEffect(() => {
    if (locationsId.length > 0) {
      setLastLocationId(locationsId[locationsId.length - 1])
    }
  }, [locationsId])

  useEffect(() => {
    if (lastLocationId && shouldReload) {
      service.fetchLocation({ lastLocationId, getLocation, setLocation, setShouldReload })
    }
  }, [lastLocationId, shouldReload])

  return (
    <div className='LocationBox'>
      {getLocationsIdLoading && 'Loading locations ID...'}
      {getLocationLoading && 'Loading last location...'}

      {!getLocationsIdLoading && !getLocationLoading && location && (
        <>
          {Location(location)}
          {<ReviewForm />}
        </>
      )}
    </div>
  )
}

export default LocationBox
