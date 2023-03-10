import { FlatList, View, StyleSheet, Pressable } from 'react-native'
import { useNavigate } from 'react-router-native'
import React, { useState } from 'react'
import { useDebounce } from 'use-debounce'
import useRepositories from '../hooks/useRepositories'
import RepositoryListHeader from './RepositoryListHeader'
import RepositoryItem from './RepositoryItem'

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
})

const ItemSeparator = () => <View style={styles.separator} />

const Item = ({ item, navigate }) => {
  return (
    <Pressable onPress={() => navigate(`/repositories/${item.id}`)}>
      <RepositoryItem item={item} />
    </Pressable>
  )
}

export class RepositoryListContainer extends React.Component {
  renderHeader = () => {
    const { selectedSorting, setSelectedSorting, filter, setFilter } =
      this.props

    return (
      <RepositoryListHeader
        selectedSorting={selectedSorting}
        setSelectedSorting={setSelectedSorting}
        filter={filter}
        setFilter={setFilter}
      />
    )
  }

  render() {
    const { repositories, navigate, onEndReach } = this.props
    const repositoryNodes = repositories
      ? repositories.edges.map((edge) => edge.node)
      : []

    return (
      <FlatList
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => <Item item={item} navigate={navigate} />}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={this.renderHeader}
        onEndReached={onEndReach}
        onEndReachedThreshold={0.5}
      />
    )
  }
}

const RepositoryList = () => {
  const [selectedSorting, setSelectedSorting] = useState({
    orderBy: 'CREATED_AT',
    orderDirection: 'DESC',
  })
  const [filter, setFilter] = useState('')
  const [debouncedFilter] = useDebounce(filter, 500)
  const { repositories, fetchMore } = useRepositories({
    ...selectedSorting,
    searchKeyword: debouncedFilter,
    first: 8,
  })
  const navigate = useNavigate()

  const onEndReach = () => {
    console.log('Fetching more...')
    fetchMore()
  }

  return (
    <RepositoryListContainer
      repositories={repositories}
      selectedSorting={selectedSorting}
      setSelectedSorting={setSelectedSorting}
      navigate={navigate}
      filter={filter}
      setFilter={setFilter}
      onEndReach={onEndReach}
    />
  )
}

export default RepositoryList
