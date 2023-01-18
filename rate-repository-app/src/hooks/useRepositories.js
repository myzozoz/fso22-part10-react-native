import { useQuery } from '@apollo/client'
import { GET_REPOSITORIES } from '../graphql/queries'

const useRepositories = ({ orderBy, orderDirection }) => {
  console.log('repositories args', orderBy, orderDirection)
  const { loading, data } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables: { orderBy, orderDirection },
  })
  const res = data?.repositories
  console.log('query data', res)

  return { repositories: res, loading }
}

export default useRepositories
