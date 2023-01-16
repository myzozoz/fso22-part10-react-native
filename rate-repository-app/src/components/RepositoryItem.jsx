import { Image, View, StyleSheet } from 'react-native'
import Text from './Text'
import LanguageLabel from './LanguageLabel'
import StatLabel from './StatLabel'
import theme from '../theme'

const styles = StyleSheet.create({
  itemCard: {
    shadowColor: theme.colors.primary,
    shadowRadius: 10,
    padding: 10,
    backgroundColor: 'white',
  },
  infoRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  infoColumn: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginLeft: 10,
  },
  statRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 3,
  },
  textContainer: {
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

const RepositoryItem = ({ item }) => {
  return (
    <View testID="repositoryItem" style={styles.itemCard}>
      <View style={styles.infoRow}>
        <Image style={styles.image} source={{ uri: item.ownerAvatarUrl }} />
        <View style={styles.infoColumn}>
          <Text fontSize="subheading" fontWeight={'bold'}>
            {item.fullName}
          </Text>
          <View style={styles.textContainer}>
            <Text color={'textSecondary'} style={styles.wrappedText}>
              {item.description}
            </Text>
          </View>
          <LanguageLabel language={item.language} />
        </View>
      </View>
      <View style={styles.statRow}>
        <StatLabel count={item.stargazersCount} label={'Stars'}></StatLabel>
        <StatLabel count={item.forksCount} label={'Forks'}></StatLabel>
        <StatLabel count={item.reviewCount} label={'Reviews'}></StatLabel>
        <StatLabel count={item.ratingAverage} label={'Rating'}></StatLabel>
      </View>
    </View>
  )
}

export default RepositoryItem
