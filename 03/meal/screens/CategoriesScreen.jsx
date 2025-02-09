import { View, Text, FlatList } from "react-native";
import React from "react";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

const CategoriesScreen = ({ navigation }) => {
  const RenderCategoryTile = (itemData) => {
    function pressHandler() {
      navigation.navigate("MealsOverview");
    }

    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  };
  return (
    <View>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={RenderCategoryTile}
        numColumns={2}
      />

      {/* <Text>CategoriesScreen</Text> */}
    </View>
  );
};

export default CategoriesScreen;
