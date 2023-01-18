import { FlatList, StyleSheet, View } from 'react-native'
import useUser from '../hooks/useUser'
import ReviewItem from './ReviewItem'
import Text from './Text'

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
})

const ItemSeparator = () => <View style={styles.separator} />

const UserReviews = () => {
  const { me, loading, fetchMoreReviews } = useUser({
    includeReviews: true,
    reviewsFirst: 1,
  })
  if (loading) return <Text>loading...</Text>

  const reviewNodes = me?.reviews
    ? me.reviews.edges.map((edge) => edge.node)
    : []

  const onEndReach = () => {
    console.log('end reached :(')
    fetchMoreReviews()
  }
  console.log('reviews', reviewNodes)
  return (
    <FlatList
      data={reviewNodes}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ItemSeparatorComponent={ItemSeparator}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
  )
}

export default UserReviews
