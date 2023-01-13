import { StyleSheet, View } from 'react-native'
import { Formik } from 'formik'
import * as yup from 'yup'
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
  const onSubmit = (values) => {
    console.log(values)
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
