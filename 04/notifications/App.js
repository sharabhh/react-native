import { StatusBar } from "expo-status-bar";
import { Alert, Button, StyleSheet, Text, View } from "react-native";
import * as Notifcations from "expo-notifications";
import { useEffect } from "react";

Notifcations.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldPlaySound: false,
      shouldSetBadge: false,
      shouldShowAlert: true,
    };
  },
  handleSuccess: async () => {
    console.log("Notification sent successfully");
  },
  handleError: async (error) => {
    console.log("Error sending notification", error);
  },
});

export default function App() {

useEffect(()=>{

  async function requestPermissions() {
    try{
      const {status} = await Notifcations.getPermissionsAsync();
      if(status !== "granted"){
        const {status} = await Notifcations.requestPermissionsAsync();
        if(status !== "granted"){
          Alert.alert("permission not granted", "push notifications need to be enabled");
          return;
        }
      }
      console.log("Notification permissions granted");
      // Get the expo push token, after getting the permissions
      getExpoToken();
      

    } catch (error) { 
      console.log("Error requesting permissions", error);
    }
  }
  requestPermissions();
  
  async function getExpoToken() {
    try{
      const response = await Notifcations.getExpoPushTokenAsync();
      console.log("Expo push token", response);
    }
    catch (error) {
      console.log("Error getting Expo push token", error);
    }
  }
  // getExpoToken();
}, [])

  useEffect(() => {
    const subscription1 = Notifcations.addNotificationReceivedListener(
      (notification) => {
        console.log("Notification received");
        console.log(notification);
      }
    );

    const subscription2 = Notifcations.addNotificationResponseReceivedListener((response)=>{
      console.log("Notification response received");
      console.log(response);
    })

    return () => {
      subscription1.remove();
      subscription2.remove();
    };
  }, []);
  
  
  const scheduleNotificationHandler = () => {
    console.log("Scheduling notification");
    Notifcations.scheduleNotificationAsync({
      content: {
        title: "Test Notification",
        body: "This is a test notification for sharabh",
        data: { username: "sharabh" },
      },
      trigger: {
        seconds: 5,
        repeats: false
      },
    });
  };

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button
        title="Get local notification"
        onPress={scheduleNotificationHandler}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
