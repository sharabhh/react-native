import { View, Text, ScrollView, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Colors } from "../../constants/Colors";
import ImagePicker from "./ImagePicker";

const PlaceForm = () => {
  const [enteredTitle, setEnteredTitle] = React.useState("");

  function changeTextHandler(enteredText) {
    setEnteredTitle(enteredText);
  }
  return (
    <ScrollView style={styles.form}>
      <Text style={styles.label}>Title</Text>
      <TextInput style={styles.input} value={enteredTitle} onChangeText={changeTextHandler} />
      <ImagePicker />
    </ScrollView>
  );
};

export default PlaceForm;

const styles = StyleSheet.create({
  form:{
    flex: 1,
    padding: 24
  },
  label:{
    fontWeight: "bold",
    marginBottom: 4,
    color: Colors.primary500
  },
  input:{
    marginVertical: 8,
    paddingHorizontal: 4,
    paddingVertical: 8,
    fontSize: 16,
    borderBottomColor: Colors.primary700,
    borderBottomWidth: 2,
    backgroundColor: Colors.primary100,
  }
})