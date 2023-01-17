import { StyleSheet, View } from 'react-native'
import { useNavigate } from 'react-router-native'
import { Formik } from 'formik'
import * as yup from 'yup'
import useCreateReview from '../hooks/useCreateReview'
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
  ownerName: yup.string().required('Repository owner name is required'),
  repositoryName: yup.string().required('Repository name is required'),
  rating: yup
    .number()
    .integer()
    .required('Rating is required')
    .min(0, 'Value must be between 0 and 100')
    .max(100, 'Value must be between 0 and 100'),
  text: yup.string().optional(),
})

const Separator = () => {
  return <View style={styles.separator} />
}

const initialValues = {
  ownerName: '',
  repositoryName: '',
  rating: '',
  text: '',
}

export const CreateReviewContainer = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => (
        <View style={styles.container}>
          <FormikTextInput
            name="ownerName"
            placeholder="Repository owner name"
          />
          <Separator />
          <FormikTextInput
            name="repositoryName"
            placeholder="Repository name"
          />
          <Separator />
          <FormikTextInput
            name="rating"
            placeholder="Rating between 0 and 100"
          />
          <Separator />
          <FormikTextInput name="text" placeholder="Review" multiline />
          <Separator />
          <Button onSubmit={handleSubmit} label={'Create a review'} />
        </View>
      )}
    </Formik>
  )
}

const ReviewForm = () => {
  const [createReview] = useCreateReview()
  const navigate = useNavigate()

  const onSubmit = async (values) => {
    console.log('values', values)
    const { ownerName, repositoryName, rating, text } = values
    try {
      const res = await createReview({
        ownerName,
        repositoryName,
        rating: parseInt(rating),
        text,
      })
      console.log('redirecting to', res.data.createReview.repositoryId)
      navigate(`/repositories/${res.data.createReview.repositoryId}`)
    } catch (e) {
      console.log(e)
    }
  }
  return <CreateReviewContainer onSubmit={onSubmit} />
}

export default ReviewForm
