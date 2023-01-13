import { Platform } from 'react-native'

const theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    textTitle: '#f2f2f2',
    appBar: '#24292e',
    primary: '#0366d6',
    backgroundGrey: '#e1e4e8',
    error: '#d73a4a',
  },
  fontSizes: {
    body: 14,
    subheading: 16,
    title: 22,
  },
  fonts: {
    main: Platform.select({
      android: 'Roboto',
      ios: 'Arial',
      native: 'System',
      default: 'System',
    }),
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
}

export default theme
