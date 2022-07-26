import React from 'react'
import LocationBox from 'components/LocationBox'
import { LocationBoxContextProvider } from 'contexts/LocationBoxContext'

const LocationBoxContainer: React.FC = () => (
  <LocationBoxContextProvider>
    <LocationBox />
  </LocationBoxContextProvider>
)

export default LocationBoxContainer
