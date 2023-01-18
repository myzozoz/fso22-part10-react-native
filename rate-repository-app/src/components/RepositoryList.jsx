import { FlatList, View, StyleSheet, Pressable } from 'react-native'
import { useNavigate } from 'react-router-native'
import { useState } from 'react'
import useRepositories from '../hooks/useRepositories'
import Picker from './Picker'
import RepositoryItem from './RepositoryItem'

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
})

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

const ItemSeparator = () => <View style={styles.separator} />

export const RepositoryListContainer = ({
  repositories,
  selectedSorting,
  setSelectedSorting,
}) => {
  const navigate = useNavigate()
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : []

  const Item = ({ item }) => {
    return (
      <Pressable onPress={() => navigate(`/repositories/${item.id}`)}>
        <RepositoryItem item={item} />
      </Pressable>
    )
  }

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={Item}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={
        <Picker
          selected={selectedSorting}
          setSelected={setSelectedSorting}
          options={options}
        />
      }
    />
  )
}

const RepositoryList = () => {
  const [selectedSorting, setSelectedSorting] = useState({
    orderBy: 'CREATED_AT',
    orderDirection: 'DESC',
  })
  const { repositories } = useRepositories(selectedSorting)

  return (
    <RepositoryListContainer
      repositories={repositories}
      selectedSorting={selectedSorting}
      setSelectedSorting={setSelectedSorting}
    />
  )
}

export default RepositoryList
