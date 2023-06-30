 import { StyleSheet, Text, View } from 'react-native';
 import React from 'react';
 import { SafeAreaView } from "react-native-safe-area-context";
import MovieCards from '../components/MovieCards';
 
 const HomeScreen = () => {
   return (
     <SafeAreaView style={{backgroundColor:"#F0F0F0",flex:1,marginTop:5}}>
       <MovieCards />
     </SafeAreaView>
   )
 }
 
 export default HomeScreen
 
 const styles = StyleSheet.create({})