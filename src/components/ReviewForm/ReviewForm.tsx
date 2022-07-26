import React, { useContext, useState } from 'react'
import { Form, formDefault } from './types'
import { SEND_REVIEW } from 'api'
import { useMutation } from '@apollo/client'
import { ReviewShape } from 'components/Reviews'
import { LocationBoxContext } from 'contexts/LocationBoxContext'
import './ReviewForm.scss'

const ReviewForm: React.FC = () => {
  const { setShouldReload } = useContext(LocationBoxContext)
  const [review, setReview] = useState<Form>(formDefault)

  const [sendReview, { loading: sendReviewLoading }] = useMutation<
    { submitReview: { success: boolean } },
    ReviewShape
  >(SEND_REVIEW)

  const setValue = (event: React.ChangeEvent<HTMLInputElement>) =>
    void setReview({ ...review, [event.currentTarget.id]: event.currentTarget.value })

  const onSend = () => {
    const { id, comment, rating } = review
    sendReview({ variables: { id, comment, rating: parseInt(rating, 10) } }).then(res => {
      if (res.data?.submitReview.success) {
        setShouldReload(true)
      }
    })
  }

  return (
    <div className='ReviewForm'>
      <div className='ReviewForm__title'>Your review</div>

      <div>
        <label htmlFor='id'>Id: </label>
        <input
          id='id'
          value={review.id}
          onChange={setValue}
        />
      </div>

      <div>
        <label htmlFor='rating'>Rating: </label>
        <input
          id='rating'
          value={review.rating}
          onChange={setValue}
        />
      </div>

      <div>
        <label htmlFor='comment'>Comment: </label>
        <input
          id='comment'
          value={review.comment}
          onChange={setValue}
        />
      </div>

      {sendReviewLoading ? 'Sending...' : <button onClick={onSend}>Send</button>}
    </div>
  )
}

export default ReviewForm
