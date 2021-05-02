import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E8EAED',
     
    },
    HeaderStyleWrapper:{
      paddingTop: 80,
      paddingHorizontal: 20,},
    HeaderStyleText:{
      color:'#4db8ff',
      fontSize:24,
      fontWeight:'bold'
    },
    EmptyListStyleText:{
      fontSize:24,
      fontWeight:'bold',
      alignItems: 'center',
      margin:50,
      color:'#ff6666',
    },
    items:{ marginTop: 30,},
    tasks:{
      flexDirection:'row',
      paddingHorizontal:50,
      marginTop: 10,
      justifyContent: 'space-between',
    }
  });
export default styles