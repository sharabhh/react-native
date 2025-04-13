import { StatusBar } from "expo-status-bar";
import { Alert, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PlaceForm from "./components/Places/PlaceForm";
import AllPlaces from "./screen/AllPlaces";
import AddPlace from "./screen/AddPlace";
import IconButton from "./components/ui/IconButton";
import { Colors } from "./constants/Colors";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
           headerStyle:{
            backgroundColor: Colors.primary500,
          },
          headerTintColor: Colors.gray700,
          contentStyle: {backgroundColor: Colors.gray700},
        }}>
          <Stack.Screen
            name="AllPlaces"
            component={AllPlaces}
            options={({ navigation }) => ({
             
              title: "Your Favourite Places",
              headerRight: ({ tintColor }) => (
                <IconButton
                  name={"add"}
                  size={24}
                  color={tintColor}
                  onPress={() => navigation.navigate("AddPlace")}
                />
              ),
            })}
          />
          <Stack.Screen name="AddPlace" component={AddPlace} options={{title: "Add a place"}} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
