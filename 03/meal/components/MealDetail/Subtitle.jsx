import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Subtitle = ({children}) => {
  return (
    <View style={styles.subtitleContainer}>
        <Text style={styles.subititleText}>{children}</Text>
      </View>
  )
}

export default Subtitle
const styles = StyleSheet.create({
    subititleText: {
        color: "#e2b497",
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
      },
      subtitleContainer: {
        borderBottomWidth: 2,
        marginHorizontal: 12,
        marginVertical: 4,
        padding: 8,
        borderBottomColor: "#e2b497",
      },
})