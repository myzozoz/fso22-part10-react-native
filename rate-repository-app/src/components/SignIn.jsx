import { StyleSheet, View } from 'react-native'
import { Formik } from 'formik'
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

const Separator = () => {
  return <View style={styles.separator} />
}

const initialValues = { username: '', password: '' }

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values)
  }
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
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
