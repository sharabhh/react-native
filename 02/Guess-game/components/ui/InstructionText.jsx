import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Colors from "../../constants/colors";

const InstructionText = ({ children }) => {
  return (
    <View>
      <Text style={styles.instructionText}>{children}</Text>
    </View>
  );
};

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.accent500,
    fontSize: 24,
  },
});
