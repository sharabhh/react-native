import { View, Text, FlatList } from "react-native";
import React, { useLayoutEffect } from "react";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

const MealsOverviewScreen = ({ route, navigation }) => {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(catId) >= 0;
  });

useLayoutEffect(()=>{
  const categoryTitle = CATEGORIES.find((category)=> category.id === catId).title
  navigation.setOptions({
    title: categoryTitle
  })
}, [catId, navigation])



  const renderItem = ({ item }) => {
    const mealItemProps = {
      title: item.title,
      imgUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };

    return <MealItem {...mealItemProps} />;
  };
  return (
    <View>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
      {/* <Text>MealsOverviewScreen</Text> */}
      {/* <Text>{catId}</Text> */}
    </View>
  );
};

export default MealsOverviewScreen;
