import { View, StyleSheet, ScrollView } from 'react-native'
import Constants from 'expo-constants'
import NavTab from './NavTab'
import theme from '../theme'

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBar,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
})

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <NavTab to={'/'} label={'Repositories'} />
        <NavTab to={'/signin'} label={'Sign in'} />
      </ScrollView>
    </View>
  )
}

export default AppBar
