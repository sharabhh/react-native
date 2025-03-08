import { View, Text, Image } from "react-native";
import React from "react";
import { MEALS } from "../data/dummy-data";
import MealDetail from "../components/MealDetail";

const MealDetailScreen = ({ route }) => {
  const catId = route.params.mealId;
  const selectedMeal = MEALS.find((mealItem) => mealItem.id === catId);
  return (
    <View>
      <Image source={{ uri: selectedMeal.imageUrl }} />
      <Text></Text>
      <View>
        <MealDetail
          duration={selectedMeal.duration}
          complexity={selectedMeal.complexity}
          affordability={selectedMeal.complexity}
        />
      </View>
      <Text>Ingredients</Text>
      {selectedMeal.ingredients.map((ingredient) => (
        <Text key={ingredient}>{ingredient}</Text>
      ))}
      <Text>Steps</Text>
      {selectedMeal.steps.map((step) => (
        <Text key={step}>{step}</Text>
      ))}
    </View>
  );
};

export default MealDetailScreen;
