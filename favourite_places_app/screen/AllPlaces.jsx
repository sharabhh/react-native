import { View, Text } from "react-native";
import React from "react";
import PlacesList from "../components/Places/PlacesList";

const AllPlaces = () => {
  return (
    <View style={{ flex: 1}}>
      {/* <Text style={{marginTop: 100, color: "white"}}>AllPlaces</Text> */}
      <PlacesList />
      {/* <Text>AllPlaces</Text> */}
    </View>
  );
};

export default AllPlaces;
