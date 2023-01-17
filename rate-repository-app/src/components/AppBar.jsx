import { View, StyleSheet, ScrollView } from 'react-native'
import Constants from 'expo-constants'
import { useQuery, useApolloClient } from '@apollo/client'
import useAuthStorage from '../hooks/useAuthStorage'
import { ME } from '../graphql/queries'
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
  const { loading, data } = useQuery(ME)
  const authStorage = useAuthStorage()
  const apolloClient = useApolloClient()

  if (!loading) console.log('me', data.me)

  const signOut = () => {
    console.log('signing out...')
    authStorage.removeAccessToken()
    apolloClient.resetStore()
  }

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <NavTab to={'/'} label={'Repositories'} />
        {!loading && data.me && (
          <NavTab to={'/review'} label={'Write review'} />
        )}
        {!loading && !data.me ? (
          <NavTab to={'/signin'} label={'Sign in'} />
        ) : (
          <NavTab to={'/'} label={'Sign out'} callBack={signOut} />
        )}
      </ScrollView>
    </View>
  )
}

export default AppBar
