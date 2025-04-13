import { View, Text, StyleSheet, Alert } from "react-native";
import React from "react";
import OutlinedButton from "../ui/OutlinedButton";
import { Colors } from "../../constants/Colors";
import {
  getCurrentPositionAsync,
  useForegroundPermissions,
  PermissionStatus,
} from "expo-location";

const LocationPicker = () => {
  const [locationPermissionInformation, requestLocationPermission] =
    useForegroundPermissions();

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

  function pickOnMapHandler() {}

  return (
    <View>
      <View style={styles.mapPreview}>
        <Text style={{ color: "white" }}>requires card details in google maps</Text>
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
