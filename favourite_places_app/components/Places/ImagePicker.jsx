import { View, Text, Button, Alert, Image, StyleSheet } from "react-native";
import React, { useState } from "react";
import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
} from "expo-image-picker";
import { Colors } from "../../constants/Colors";
import OutlinedButton from "../ui/OutlinedButton";

const ImagePicker = () => {
    const [pickedImage, setPickedImage] = useState();
  const [cameraPermissionInformation, requestCameraPermission] =
    useCameraPermissions();

  const verifyPermissions = async () => {
    if (cameraPermissionInformation.status === PermissionStatus.UNDETERMINED) {
      const permissionRequest = await requestCameraPermission();
      return permissionRequest.granted;
    } else if (cameraPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient permissions",
        "You need to grant camera permissions to use this app"
      );
      return false;
    }
    return true;
  };

  const takeImageHandler = async () => {
    try {
      const hasPermission = await verifyPermissions();
      if (!hasPermission) {
        return;
      }
      const image = await launchCameraAsync({
        allowsEditing: true,
        quality: 0.5,
        aspect: [16, 9],
      });
    //   console.log("image: ", image);
    setPickedImage(image.assets[0].uri);
    } catch (error) {
      console.log("error while capturing image: ", error.message);
    }
  };

let imagePreview = <Text style={{color: "white"}}>No image taken yet.</Text>;


if(pickedImage){
    imagePreview = <Image source={{uri: pickedImage}} style={styles.image} />
}

  return (
    <View>
      {/* <Text>ImagePicker</Text> */}
      <View style={styles.imagePreview}>
        {imagePreview}
      </View>
      <OutlinedButton onPress={takeImageHandler} icon="camera">
        Take Picture
      </OutlinedButton>
      {/* <Button title="Take Pictrue" onPress={takeImageHandler} /> */}
    </View>
  );
};

export default ImagePicker;

const styles = StyleSheet.create({
    imagePreview:{
        width: "100%",
        height: 200,
        marginVertical: 8,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.primary100,
        borderRadius: 4
    },
    image:{
        height : "100%",
        width: "100%",
        borderRadius: 4,
    }
})