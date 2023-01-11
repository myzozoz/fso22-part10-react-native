import { View, StyleSheet, Pressable } from 'react-native'
import theme from '../theme'
import Constants from 'expo-constants'
import Text from './Text'

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.primary,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    // ...
  },
  navLabel: {
    padding: 10,
  },
  // ...
})

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => console.log('Pressed')} style={styles.navLabel}>
        <Text title>Repositories</Text>
      </Pressable>
    </View>
  )
}

export default AppBar
