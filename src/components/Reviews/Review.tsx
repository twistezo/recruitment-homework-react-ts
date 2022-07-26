import React, { ReactNode } from 'react'
import { ReviewShape } from './types'
import './Review.scss'

const Review = (rev: ReviewShape): ReactNode => (
  <div
    key={rev.id}
    className='Review'
  >
    <div className='Review__comment'>{rev.comment}</div>

    <div>
      ({rev.id}, rating: {rev.rating})
    </div>
  </div>
)

export default Review
