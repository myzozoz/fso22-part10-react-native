import { useParams } from 'react-router-native'
import { FlatList, StyleSheet, View } from 'react-native'
import useRepository from '../hooks/useRepository'
import RepositoryItem from './RepositoryItem'
import ReviewItem from './ReviewItem'
import Text from './Text'

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
})

const ItemSeparator = () => <View style={styles.separator} />

const RepositoryPage = () => {
  const { id } = useParams()
  const { repository, loading } = useRepository(id)
  if (loading) return <Text>loading...</Text>

  const reviews = repository?.reviews.edges.map((e) => e.node)

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => <RepositoryItem item={repository} full />}
      ItemSeparatorComponent={ItemSeparator}
    />
  )
}

export default RepositoryPage
