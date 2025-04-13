import { View, Text, StyleSheet, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import OutlinedButton from "../ui/OutlinedButton";
import { Colors } from "../../constants/Colors";
import {
  useNavigation,
  useRoute,
  useIsFocused,
} from "@react-navigation/native";
import {
  getCurrentPositionAsync,
  useForegroundPermissions,
  PermissionStatus,
} from "expo-location";

const LocationPicker = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const isFocused = useIsFocused();
  const [locationPermissionInformation, requestLocationPermission] =
    useForegroundPermissions();
  const [pickedLocation, setPickedLocation] = useState();

  useEffect(() => {
    if (isFocused && route.params) {
      const mapPickedLocation = {
        lat: route.params.pickedLat,
        lng: route.params.pickedLng,
      };
      setPickedLocation(mapPickedLocation);
    }
  }, [route, isFocused]);

  async function verifyPermissions() {
    if (
      locationPermissionInformation.status === PermissionStatus.UNDETERMINED
    ) {
      const permissionRequest = await requestLocationPermission();
      return permissionRequest.granted;
    } else if (
      locationPermissionInformation.status === PermissionStatus.DENIED
    ) {
      Alert.alert(
        "Insufficient permissions",
        "You need to grant camera permissions to use this app"
      );
      return false;
    }
    return true;
  }

  async function getLocationHandler() {
    try {
      const hasPermission = await verifyPermissions();
      if (!hasPermission) {
        return;
      }
      const location = await getCurrentPositionAsync();
      console.log("location: ", location);
    } catch (error) {
      console.log("error while capturing image: ", error.message);
    }
  }

  function pickOnMapHandler() {
    navigation.navigate("Map");
  }

  return (
    <View>
      <View style={styles.mapPreview}>
        <Text style={{ color: "white" }}>
          requires card details in google maps
        </Text>
      </View>
      <View style={styles.actions}>
        <OutlinedButton icon={"camera"} onPress={getLocationHandler}>
          Locate User
        </OutlinedButton>
        <OutlinedButton icon={"map"} onPress={pickOnMapHandler}>
          Pick on Map
        </OutlinedButton>
      </View>
    </View>
  );
};

export default LocationPicker;

const styles = StyleSheet.create({
  mapPreview: {
    width: "100%",
    height: 200,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary100,
    borderRadius: 4,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
