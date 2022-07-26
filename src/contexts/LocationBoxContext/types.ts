import { Dispatch, ReactNode, SetStateAction } from 'react'
import { LocationShape } from 'components/Location'

export interface LocationBoxContextProviderProps {
  children: ReactNode
}

export interface LocationBoxContextProps {
  location?: LocationShape
  setLocation: Dispatch<SetStateAction<LocationShape | undefined>>
  shouldReload: boolean
  setShouldReload: Dispatch<SetStateAction<boolean>>
}

export const locationBoxContextDefault: LocationBoxContextProps = {
  location: undefined,
  setLocation: () => void {},
  shouldReload: true,
  setShouldReload: () => void {}
}
