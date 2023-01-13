import { TextInput as NativeTextInput, StyleSheet } from 'react-native'
import theme from '../theme'

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    borderStyle: 'solid',
    borderColor: theme.colors.backgroundGrey,
    borderWidth: 1,
    borderRadius: 3,
    padding: 10,
    placeholderTextColor: theme.colors.textSecondary,
  },
})

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [styles.input, style]

  return <NativeTextInput style={textInputStyle} {...props} />
}

export default TextInput
