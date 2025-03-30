import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
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
