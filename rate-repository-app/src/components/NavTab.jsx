import { Pressable, StyleSheet } from 'react-native'
import { Link } from 'react-router-native'
import Text from './Text'

const styles = StyleSheet.create({
  navLabel: {
    padding: 10,
  },
  // ...
})

const NavTab = ({ to, label, callBack }) => {
  return callBack ? (
    <Pressable style={styles.navLabel} onPress={callBack}>
      <Text title>{label}</Text>
    </Pressable>
  ) : (
    <Link to={to} style={styles.navLabel}>
      <Text title>{label}</Text>
    </Link>
  )
}

export default NavTab
