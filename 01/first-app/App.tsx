import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false)
  const [courseGoals, setCourseGoals] = useState<
    { text: string; id: string }[]
  >([]);


  function handleModal(){
    setModalIsVisible(!modalIsVisible)
  }

  function addGoalHandler(enteredGoalText: string) {
    setCourseGoals((prev) => [
      ...prev,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  }

  function deleteGoalHandler(id: string){
    setCourseGoals((prev)=>{
      return prev.filter((goal) => goal.id !== id);
    })
    console.log("deleted");
    
  }

  return (
    <>
    <StatusBar style="light" />
    <View style={styles.appContainer}>
      <Button title="Add new goal" color="#a065ec" onPress={handleModal} />
      <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler} toggleModal={handleModal} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return <GoalItem text={itemData.item.text} id={itemData.item.id} onDeleteItem={deleteGoalHandler}  />;
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          />
      </View>
    </View>
</>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#1e085a"
  },
  
  goalsContainer: {
    flex: 5,
  },
  
});
