import Text from './Text'
import theme from '../theme'

const styles = {
  label: {
    backgroundColor: theme.colors.primary,
    color: theme.colors.textTitle,
    borderRadius: 3,
    paddingHorizontal: 5,
    paddingVertical: 3,
    alignSelf: 'flex-start',
  },
}

const LanguageLabel = ({ language }) => {
  return (
    <Text center style={styles.label}>
      {language}
    </Text>
  )
}

export default LanguageLabel
