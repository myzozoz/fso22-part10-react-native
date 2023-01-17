import { View, StyleSheet } from 'react-native'
import Text from './Text'
import theme from '../theme'
import { format } from 'date-fns'

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    padding: 6,
  },
  mainColumn: {
    display: 'flex',
    flexDirection: 'column',
    padding: 6,
    flexGrow: 1,
  },
  rating: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: theme.colors.primary,
    justifyContent: 'center',
  },
  ratingText: {
    color: theme.colors.primary,
    margin: 'auto',
    textAlign: 'center',
  },
  longTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 4,
    paddingBottom: 6,
  },
  wrappedText: {
    flex: 1,
    flexWrap: 'wrap',
    flexGrow: 1,
  },
})

const ReviewItem = ({ review }) => {
  // Single review item
  return (
    <View style={styles.container}>
      <View style={styles.rating}>
        <Text fontWeight={'bold'} style={styles.ratingText}>
          {review.rating}
        </Text>
      </View>

      <View style={styles.mainColumn}>
        <Text fontWeight={'bold'}>{review.user.username}</Text>
        <Text color={'textSecondary'}>
          {format(new Date(review.createdAt), 'dd.MM.yyyy')}
        </Text>
        <View style={styles.longTextContainer}>
          <Text style={styles.wrappedText}>{review.text}</Text>
        </View>
      </View>
    </View>
  )
}

export default ReviewItem
