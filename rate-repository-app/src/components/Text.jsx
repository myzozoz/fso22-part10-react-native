import { Text as NativeText, StyleSheet } from 'react-native'

import theme from '../theme'

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },
  colorTextSecondary: {
    color: theme.colors.textSecondary,
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  title: {
    fontSize: theme.fontSizes.title,
    color: theme.colors.textTitle,
  },
  fontSizeSubheading: {
    fontSize: theme.fontSizes.subheading,
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold,
  },
  center: {
    textAlign: 'center',
  },
})

const Text = ({
  title,
  color,
  fontSize,
  fontWeight,
  center,
  style,
  ...props
}) => {
  const textStyle = [
    styles.text,
    title && styles.title,
    color === 'textSecondary' && styles.colorTextSecondary,
    color === 'primary' && styles.colorPrimary,
    fontSize === 'subheading' && styles.fontSizeSubheading,
    fontWeight === 'bold' && styles.fontWeightBold,
    center && styles.center,
    style,
  ]
  return <NativeText style={textStyle} {...props} />
}

export default Text
