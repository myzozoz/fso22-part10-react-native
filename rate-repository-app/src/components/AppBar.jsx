import { View, StyleSheet, ScrollView } from 'react-native'
import Constants from 'expo-constants'
import { useApolloClient } from '@apollo/client'
import useAuthStorage from '../hooks/useAuthStorage'
import { useNavigate } from 'react-router-native'
import NavTab from './NavTab'
import theme from '../theme'
import useUser from '../hooks/useUser'

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
  const { loading, me } = useUser()
  const authStorage = useAuthStorage()
  const apolloClient = useApolloClient()
  const navigate = useNavigate()

  if (!loading) console.log('me', me)

  const signOut = () => {
    console.log('signing out...')
    authStorage.removeAccessToken()
    apolloClient.resetStore()
    navigate('/')
  }

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <NavTab to={'/'} label={'Repositories'} />

        {!loading && !me ? (
          <>
            <NavTab to={'/signin'} label={'Sign in'} />
            <NavTab to={'/signup'} label={'Sign up'} />
          </>
        ) : (
          <>
            <NavTab to={'/review'} label={'Write review'} />
            <NavTab to={'/myReviews'} label={'My reviews'} />
            <NavTab to={'/'} label={'Sign out'} callBack={signOut} />
          </>
        )}
      </ScrollView>
    </View>
  )
}

export default AppBar
