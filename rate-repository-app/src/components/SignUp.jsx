import { StyleSheet, View } from 'react-native'
import { useNavigate } from 'react-router-native'
import { Formik } from 'formik'
import * as yup from 'yup'
import useSignUp from '../hooks/useSignUp'
import useSignIn from '../hooks/useSignIn'
import FormikTextInput from './FormikTextInput'
import Button from './Button'

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
  username: yup
    .string()
    .required('Username is required')
    .min(1, 'Minimum length 1 character')
    .max(30, 'Max length 30 characters'),
  password: yup
    .string()
    .required('Password is required')
    .min(5, 'Minimum length 5 characters')
    .max(50, 'Max length 50 characters'),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref('password'), null], "Passwords don't match")
    .required('Password confirmation is required'),
})

const Separator = () => {
  return <View style={styles.separator} />
}

const initialValues = { username: '', password: '', passwordConfirmation: '' }

export const SignUpContainer = ({ onSubmit }) => {
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
          <FormikTextInput
            name="passwordConfirmation"
            placeholder="PasswordConfirmation"
            secureTextEntry
          />
          <Separator />
          <Button onSubmit={handleSubmit} label={'Sign in'} />
        </View>
      )}
    </Formik>
  )
}

const SignUp = () => {
  const [signUp] = useSignUp()
  const [signIn] = useSignIn()
  const navigate = useNavigate()

  const onSubmit = async (values) => {
    const { username, password } = values
    try {
      const { data } = await signUp({ username, password })
      console.log(data)
      await signIn({ username, password })
      navigate('/')
    } catch (e) {
      console.log(e)
    }
  }
  return <SignUpContainer onSubmit={onSubmit} />
}

export default SignUp
