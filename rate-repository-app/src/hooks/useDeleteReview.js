import { useMutation } from '@apollo/client'
import { DELETE_REVIEW } from '../graphql/mutations'

const useDeleteReview = () => {
  const [mutate, result] = useMutation(DELETE_REVIEW)

  const deleteReview = async (deleteReviewId) => {
    const res = await mutate({
      variables: { deleteReviewId },
    })
    return res
  }

  return [deleteReview, result]
}

export default useDeleteReview
