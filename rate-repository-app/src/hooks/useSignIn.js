import { useMutation, useApolloClient } from '@apollo/client'
import useAuthStorage from '../hooks/useAuthStorage'
import { AUTHENTICATE } from '../graphql/mutations'

const useSignIn = () => {
  const authStorage = useAuthStorage()
  const [mutate, result] = useMutation(AUTHENTICATE)
  const apolloClient = useApolloClient()

  const signIn = async ({ username, password }) => {
    const res = await mutate({
      variables: { credentials: { username, password } },
    })
    const token = res.data.authenticate.accessToken
    authStorage.setAccessToken(token)
    apolloClient.resetStore()
    return res
  }

  return [signIn, result]
}

export default useSignIn
