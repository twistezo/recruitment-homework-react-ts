import React, { ReactNode } from 'react'
import { ReviewShape } from './types'
import Review from './Review'

export const Reviews = (reviews: ReviewShape[], last: number): ReactNode => (
  <>
    <div className='Review__title'>Reviews:</div>
    {reviews.slice(-last).map((rev: ReviewShape) => Review(rev))}
  </>
)
