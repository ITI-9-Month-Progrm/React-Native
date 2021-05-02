import React, { useState }  from 'react';
import { Text, View, TouchableOpacity} from 'react-native';
import taskStyles from './../styles/taskStyles';



 const Task = (prop)=>{

     return (
        <View style={taskStyles.item}>
      <View style={taskStyles.itemLeft}>
        
        <View style={taskStyles.circular}></View>
        <Text style={taskStyles.itemText}>{prop.title}</Text>
      </View>
      <View style={taskStyles.square}></View> 
      {/* <TouchableOpacity onPress = {prop.title.taskDone}>
          <View style={taskStyles.square}></View> 
      </TouchableOpacity> */}
     
    </View>
     );
 }

 export default Task;
