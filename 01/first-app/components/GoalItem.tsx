import { StyleSheet, Text, View, Pressable } from "react-native";

type GoalItemProps = {
  text: string;
  id: string;
  onDeleteItem: (id: string) => void;
};

export default function GoalItem(props: GoalItemProps) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={() => props.onDeleteItem(props.id)}
        style={(pressData)=> pressData.pressed && styles.pressedItemIos}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    padding: 8,
    color: "white",
  },
  pressedItemIos:{
    opacity: 0.5
  }
});
