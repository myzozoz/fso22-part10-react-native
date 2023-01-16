import { Pressable, StyleSheet } from 'react-native'
import Text from './Text'
import theme from '../theme'

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.primary,
    color: 'white',
    padding: 10,
    textAlign: 'center',
    borderRadius: 3,
  },
})

const Button = ({ onSubmit, label }) => {
  return (
    <Pressable onPress={onSubmit}>
      <Text fontWeight={'bold'} style={styles.button}>
        {label}
      </Text>
    </Pressable>
  )
}

export default Button
