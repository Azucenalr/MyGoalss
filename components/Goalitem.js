import {StyleSheet, View, Text, Pressable} from "react-native"

function GoalItem({ItemData, OnDeleteItem}){
return(
    <Pressable>
        <View style={StyleSheet.goalsItem}>
            <Text style={styles.goalText}>{ItemData.item}</Text>
        </View>     
    </Pressable>                                                                                                                                                                                                                                                                                                                        
)
}    

    export default GoalItem

    const styles = StyleSheet.create({
        goalsItem:{
            margin:8,
            padding: 8,
            borderRadius: 6,
            backgroundColor: "#8576FF",
            color: 'white'
    },
    goalText:{
        color:'white'
    }
})