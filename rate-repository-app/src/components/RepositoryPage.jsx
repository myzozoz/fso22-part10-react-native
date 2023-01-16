import { useParams } from 'react-router-native'
import { useQuery } from '@apollo/client'
import RepositoryItem from './RepositoryItem'
import { GET_REPOSITORY } from '../graphql/queries'
import Text from './Text'

const RepositoryPage = () => {
  const { id } = useParams()
  const { loading, data } = useQuery(GET_REPOSITORY, {
    variables: { id },
  })
  console.log('repository page rendered', id)
  if (loading) return <Text>loading...</Text>

  console.log('data', data)
  return <RepositoryItem item={data?.repository} full />
}

export default RepositoryPage
