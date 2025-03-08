import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  Platform,
} from "react-native";
import React from "react";
import {useNavigation} from "@react-navigation/native"
import MealDetail from "./MealDetail";

const MealItem = ({ id , title, imgUrl, duration, complexity, affordability }) => {
  const navigation = useNavigation();
  const pressHandler = () => {
    console.log("meal item pressed", id);
    navigation.navigate("MealDetail", {
      mealId: id,
    });
  };

  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={pressHandler}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imgUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetail duration={duration} complexity={complexity} affordability={affordability}/>
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 16,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    margin: 8,
  }
});
