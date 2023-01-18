import { Alert, View, StyleSheet } from 'react-native'
import { useNavigate } from 'react-router-native'
import { format } from 'date-fns'
import Button from './Button'
import Text from './Text'
import theme from '../theme'
import useDeleteReview from '../hooks/useDeleteReview'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    padding: 10,
  },
  infoContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  mainColumn: {
    display: 'flex',
    flexDirection: 'column',
    padding: 6,
    flexGrow: 1,
  },
  buttonRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  button: {
    paddingHorizontal: 30,
  },
  deleteButton: {
    backgroundColor: theme.colors.error,
  },
})

const ReviewItem = ({ review, refetch, userReviewsView }) => {
  const navigate = useNavigate()
  const [deleteReview] = useDeleteReview()

  const deleteHandler = () =>
    Alert.alert('Delete', 'Delete confirmation', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel pressed'),
        style: 'cancel',
      },
      {
        text: 'Yes',
        onPress: () => {
          deleteReview(review.id)
          refetch()
        },
      },
    ])
  // Single review item
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <View style={styles.rating}>
          <Text fontWeight={'bold'} style={styles.ratingText}>
            {review.rating}
          </Text>
        </View>

        <View style={styles.mainColumn}>
          <Text fontWeight={'bold'}>
            {userReviewsView
              ? review.repository.fullName
              : review.user.username}
          </Text>
          <Text color={'textSecondary'}>
            {format(new Date(review.createdAt), 'dd.MM.yyyy')}
          </Text>
          <View style={styles.longTextContainer}>
            <Text style={styles.wrappedText}>{review.text}</Text>
          </View>
        </View>
      </View>
      {userReviewsView && (
        <View style={styles.buttonRow}>
          <Button
            onSubmit={() => {
              console.log('left button pressed')
              navigate(`/repositories/${review.repositoryId}`)
            }}
            label="View repository"
            style={styles.button}
          />
          <Button
            onSubmit={deleteHandler}
            label="Delete review"
            style={[styles.button, styles.deleteButton]}
          />
        </View>
      )}
    </View>
  )
}

export default ReviewItem
