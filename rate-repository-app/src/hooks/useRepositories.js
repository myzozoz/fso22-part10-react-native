import { useQuery } from '@apollo/client'
import { GET_REPOSITORIES } from '../graphql/queries'

const useRepositories = (variables) => {
  console.log('variables', variables)
  const { loading, data, fetchMore, ...result } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables,
  })
  const res = data?.repositories
  console.log('query data', res)

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage
    console.log('canFetchMore', canFetchMore)
    if (!canFetchMore) {
      return
    }
    console.log('truly fetching more...')
    fetchMore({
      variables: {
        after: data.repositories.pageInfo.endCursor,
        ...variables,
      },
    })
  }

  return { repositories: res, fetchMore: handleFetchMore, loading, ...result }
}

export default useRepositories
