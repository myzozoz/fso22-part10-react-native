import { useQuery } from '@apollo/client'
import { ME } from '../graphql/queries'

const useUser = (variables) => {
  console.log('useUser variables', variables)
  const { loading, data, fetchMore, refetch, ...result } = useQuery(ME, {
    fetchPolicy: 'cache-and-network',
    variables,
  })
  const res = data?.me
  console.log('res:', res)

  const handleFetchMoreReviews = () => {
    const canFetchMore = !loading && data?.me.reviews.pageInfo.hasNextPage
    console.log('can fetch more', canFetchMore)
    if (!canFetchMore) {
      return
    }
    fetchMore({
      variables: {
        reviewsAfter: data.me.reviews.pageInfo.endCursor,
        ...variables,
      },
    })
  }

  return {
    me: res,
    fetchMoreReviews: handleFetchMoreReviews,
    loading,
    refetch,
    ...result,
  }
}

export default useUser
