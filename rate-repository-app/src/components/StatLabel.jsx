import { View, StyleSheet } from 'react-native'
import Text from './Text'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    marginHorizontal: 10,
  },
})

const StatLabel = ({ count, label }) => {
  const abbr =
    count >= 1000 ? String((count / 1000).toFixed(1), 1) + 'k' : count
  return (
    <View style={styles.container}>
      <Text fontWeight="bold" center>
        {abbr}
      </Text>
      <Text center color="textSecondary">
        {label}
      </Text>
    </View>
  )
}

export default StatLabel
