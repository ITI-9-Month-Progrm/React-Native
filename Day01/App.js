
import React, { useState } from "react";
import {
 
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";


export default function App() {
  const pics = [
    "https://images.unsplash.com/photo-1521624213010-9fb0f30dcd20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=667&q=80",
    "https://images.unsplash.com/photo-1588642009723-c5cef07fdc99?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fHNwcmluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1454357402858-6f7bafb65814?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fHNwcmluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1485851345229-4cc8a8ef0271?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjB8fHNwcmluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1599029961701-17bbfa0d9d90?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzB8fHNwcmluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  ];
  const width = Dimensions.get("window").width;
  const height = (width * 100) / 60;
  let [activeImg,setActive] = useState(0);
  const ChangeImg = ({nativeEvent})=>{
    let slide =Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
    console.log(slide);
    if(slide !== {activeImg}){
      setActive(slide);
    }
  }

  return (
    <View style={{ marginTop: 50, width, height }}>
      <ScrollView
        horizontal
        pagingEnabled
        //showsHorizontalScrollIndicator={false}
        style={{ width, height }}
        onScroll={ChangeImg}
      >
        {pics.map((pic, id) => (
          <Image
            key={id}
            source={{ uri: pic }}
            style={{ width, height: 300, resizeMode: "cover" }}
          />
        ))}
      </ScrollView>

      <View
        style={{
          flexDirection: "row",
          position: "absolute",
          bottom: "45%",
          alignSelf: "center",
          marginBottom: 5,
        }}
      >
        {pics.map((i, k) => (
          <Text 
          key={k}
          style={ k == activeImg?styles.active:styles.notActive}>-</Text>
        ))}
      </View>
    </View>
  );
}
const styles = StyleSheet.create(
  {
    active:{ color: "#fff", fontSize: 100,marginRight:10 },
    notActive:{ color: "#999", fontSize: 100,marginRight:10 }
  }
)