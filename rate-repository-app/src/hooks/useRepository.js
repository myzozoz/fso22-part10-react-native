import { useQuery } from '@apollo/client'
import { GET_REPOSITORY } from '../graphql/queries'

const useRepository = (variables) => {
  console.log('useRepository variables', variables)
  const { loading, data, fetchMore, ...result } = useQuery(GET_REPOSITORY, {
    fetchPolicy: 'cache-and-network',
    variables,
  })
  const res = data?.repository
  console.log('res:', res)

  const handleFetchMoreReviews = () => {
    const canFetchMore =
      !loading && data?.repository.reviews.pageInfo.hasNextPage
    if (!canFetchMore) {
      return
    }
    fetchMore({
      variables: {
        reviewsAfter: data.repository.reviews.pageInfo.endCursor,
        ...variables,
      },
    })
  }

  return {
    repository: res,
    fetchMoreReviews: handleFetchMoreReviews,
    loading,
    ...result,
  }
}

export default useRepository
