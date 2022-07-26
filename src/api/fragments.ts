import { gql } from '@apollo/client'

export const LOCATION_FIELDS = gql`
  fragment LocationFields on Location {
    id
    name
    description
    photo
    overallRating
  }
`

export const REVIEW_FIELDS = gql`
  fragment ReviewFields on Review {
    id
    comment
    rating
  }
`
