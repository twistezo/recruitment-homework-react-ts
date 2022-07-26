import { gql } from '@apollo/client'
import { LOCATION_FIELDS, REVIEW_FIELDS } from './fragments'

export const GET_LOCATIONS_ID = gql`
  query getLocationsId {
    locations {
      id
    }
  }
`

export const GET_LOCATION = gql`
  ${LOCATION_FIELDS}
  ${REVIEW_FIELDS}

  query getLocation($id: ID!) {
    location(id: $id) {
      ...LocationFields

      reviewsForLocation {
        ...ReviewFields
      }
    }
  }
`

export const SEND_REVIEW = gql`
  mutation submitReview($id: String!, $rating: Int!, $comment: String!) {
    submitReview(locationReview: { locationId: $id, rating: $rating, comment: $comment }) {
      success
    }
  }
`
