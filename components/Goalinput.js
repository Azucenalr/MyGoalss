import { useState } from "react";
import {View, TextInput, Button, StyleSheet} from "react-native"

function GoalInput({onAddGoal}){
function handleInputGoal(enteredText){
    console.log(enteredText)
    setEnteredGoalText(enteredText)
}
function addGoalHandler(){
    onAddGoal(enteredGoalText)
    setEnteredGoalText('')
    console.log('addGoalHandler')
}
return(
    <View style={StyleSheet.InputContainer}></View>
)
}