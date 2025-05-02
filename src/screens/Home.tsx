import { View, Text, FlatList } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/types";

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Home"
>;
const Home = () => {
  const nav = useNavigation<HomeScreenNavigationProp>();
  const [mysPosts,setMyPosts] = useState<any[]>([])
  const posts = async() => {
   try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data:any[] = await response.json() 
    setMyPosts(data)
   } catch (error) {
    console.log(error)
   }
  };
posts()
  return (
    <View>
      <Text>Home</Text>
      <Text>This is second branch called second</Text>
      <Text>Remot repo haha</Text>
      
    </View>
  );
};

export default Home;
