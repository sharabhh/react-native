import { View, Text, FlatList } from "react-native";
import React from "react";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

const CategoriesScreen = () => {
  const RenderCategoryTile = (itemData) => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
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
