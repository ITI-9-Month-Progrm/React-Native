import React, {useState} from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import styles from './src/styles/styles';
import Task from './src/components/Task';
import AddTask from './src/components/AddTask';


export default function App() {
  let [todoList,setTodoList] = useState([]);
  let [dones,setDones] = useState(0);
  let [tasks,setTasks] = useState(0);
  const taskAdded = (newTask)=>{
      setTodoList([...todoList,newTask])
      setTasks(todoList.length+1)
  }
 
  let taskDone = (index)=>{
  
    let tempList = [...todoList];
    tempList.splice(index,1);
    setTodoList(tempList);
    setDones(++dones)
    setTasks(--tasks)
   
  }

  return (
    <View style={styles.container}>
         <View style={styles.HeaderStyleWrapper}>
            <Text style={styles.HeaderStyleText}>Today's Tasks </Text>
            <View style={styles.tasks}>
            <Text style={{ color: 'orange',fontWeight:'bold',fontSize:15, }}> Tasks : {tasks}</Text>
            <Text style={{ color: 'green',fontWeight:'bold',fontSize:15, }}> Done : {dones}</Text>
            
            </View>
           
              <View style={styles.items}>
              <FlatList
    data = {todoList}
    renderItem = {({item, index})=>{ 
         return(
          <TouchableOpacity key={index} onPress = {taskDone}>
          <Task key={index} title={item.title} done={item.taskDone}></Task> 
      </TouchableOpacity>
                  
                  )
               }}
    ListEmptyComponent = {()=>{
       return <Text style = {styles.EmptyListStyleText}>
          Please Add Task 
       </Text>
    }}      
    initialNumToRender = {5}    
               >

    </FlatList>
              
              </View>
    
               </View>
               <AddTask onTaskAdd={taskAdded}/>
    </View>
 
  );
}


