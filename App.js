import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View, ScrollView, FlatList } from "react-native";
import GoalItem from "./components/Goalitem";
import GoalInput from "./components/Goalinput";

export default function App() {
  const [ goals, setGoals] = useState ([])

  function handleAddGoal(enteredGoalText)
  //console.log(enteredGoalText)
  //console.log('Hello You')
  setGoals(() => [...goals,{text: enteredGoalText, key: Math.random().toString
  }])
  console.log(goals)

function handleDeleteGoal(){
  console.log('DELETE')
}

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

return (
  <View style={styles.container}>
    {/* <view style={styles.inputContainer}>
      <TextInput style={styles.TextInput}
      Placeholder='Your Goal!'
      onChangeText={handleInputGoal}
      />
      <Button
      title="Add Goal"
      color={'#A3FFD6'}
      onPress={handleAddGoal}
      />
  </View> */}
  <GoalInput
  onAddGoal={handleAddGoal}/>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
