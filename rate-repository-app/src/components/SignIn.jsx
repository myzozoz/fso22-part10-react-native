import { StyleSheet, View } from 'react-native'
import { Formik } from 'formik'
import * as yup from 'yup'
import useSignIn from '../hooks/useSignIn'
import FormikTextInput from './FormikTextInput'
import SubmitButton from './SubmitButton'

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'white',
  },
  separator: {
    height: 5,
  },
})

const validationSchema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
})

const Separator = () => {
  return <View style={styles.separator} />
}

const initialValues = { username: '', password: '' }

const SignIn = () => {
  const [signIn] = useSignIn()

  const onSubmit = async (values) => {
    const { username, password } = values
    try {
      const { data } = await signIn({ username, password })
      console.log(data)
    } catch (e) {
      console.log(e)
    }
  }
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => (
        <View style={styles.container}>
          <FormikTextInput name="username" placeholder="Username" />
          <Separator />
          <FormikTextInput
            name="password"
            placeholder="Password"
            secureTextEntry
          />
          <Separator />
          <SubmitButton onSubmit={handleSubmit} label={'Sign in'} />
        </View>
      )}
    </Formik>
  )
}

export default SignIn
