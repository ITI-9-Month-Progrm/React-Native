import React , { useState }from 'react';
import { Text, View, KeyboardAvoidingView, TouchableOpacity, TextInput, Keyboard  } from 'react-native';
import addTaskStyles from './../styles/addTaskStyles';

const AddTask = ({onTaskAdd})=>{
  
   let [titleTask,setTitle]=useState('');
  
   const addTaskHandler = ()=>{
    Keyboard.dismiss();
    let newTask = {
       title:titleTask,
       done:false
     }
    
        setTitle(null);
      console.log(newTask)
      onTaskAdd(newTask);
   }
   return(
        <KeyboardAvoidingView
    // behavior={Platform.OS === "ios" ? "padding" : "height"}
    style = {addTaskStyles.writeTaskWrapper}
    >
        <TextInput style={addTaskStyles.input} placeholder={'Write a task'}  value={titleTask} onChangeText={text => setTitle(text)}/>
       <TouchableOpacity  onPress ={()=>addTaskHandler()} >
      <View style={addTaskStyles.addWrapper}>
        <Text style={addTaskStyles.addText}>+</Text>
      </View>
    </TouchableOpacity>
    </KeyboardAvoidingView>

    );
}

export default AddTask;
