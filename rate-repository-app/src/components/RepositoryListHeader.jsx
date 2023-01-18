import { View } from 'react-native'
import Picker from './Picker'
import { Searchbar } from 'react-native-paper'

const options = [
  {
    label: 'Latest repositories',
    value: { orderBy: 'CREATED_AT', orderDirection: 'DESC' },
  },
  {
    label: 'Highest rated repositories',
    value: { orderBy: 'RATING_AVERAGE', orderDirection: 'DESC' },
  },
  {
    label: 'Lowest rated repositories',
    value: { orderBy: 'RATING_AVERAGE', orderDirection: 'ASC' },
  },
]

const styles = {
  container: {
    margin: 10,
  },
  textInput: {
    borderRadius: 3,
    shadowRadius: 5,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    marginBottom: 10,
  },
}

const RepositoryListHeader = ({
  selectedSorting,
  setSelectedSorting,
  filter,
  setFilter,
}) => {
  const onChangeFilter = (query) => setFilter(query)

  return (
    <View style={styles.container}>
      <Searchbar
        style={styles.textInput}
        placeholder="Search"
        onChangeText={onChangeFilter}
        value={filter}
      />
      <Picker
        selected={selectedSorting}
        setSelected={setSelectedSorting}
        options={options}
      />
    </View>
  )
}

export default RepositoryListHeader
