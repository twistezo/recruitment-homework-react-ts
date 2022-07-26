import { ReviewShape } from 'components/Reviews'

export interface LocationShape {
  id: string
  name: string
  description: string
  photo: string
  overallRating: string
  reviewsForLocation: ReviewShape[]
}
