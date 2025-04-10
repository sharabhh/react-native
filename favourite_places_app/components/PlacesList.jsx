import { View, Text, FlatList } from 'react-native'
import React from 'react'

const PlacesList = ({places}) => {
  return (
    <FlatList data={places} keyExtractor={item => item.id} />
  )
}

export default PlacesList