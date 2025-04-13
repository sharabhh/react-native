import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Mapview, {Marker} from 'react-native-maps'

const Map = () => {
    const region = {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    };

  return (
    <Mapview style={styles.map} initialRegion={region}>

    </Mapview>
  )
}

export default Map

const styles = StyleSheet.create({
    map: {
        flex: 1,
    }
})