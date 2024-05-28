import React, { Component } from "react";
import { Text, View, StyleSheet,TouchableOpacity } from 'react-native';

export default class HomeScreen extends Component {
  render(){
   return (
     <View>
     <Text style={styles.homestyle}> WELCOME TO DTE TUTION APP </Text>
    <TouchableOpacity style={[styles.button,{backgroundColor:"red",marginTop:120}]}
    onPress={
      ()=>{this.props.navigation.navigate("guest")}} >
         <Text style={styles.buttonText}>
            Guest Login
        </Text>
    </TouchableOpacity>

    <TouchableOpacity style={[styles.button,{backgroundColor:"green",marginTop:60}]}
    onPress={
      ()=>{this.props.navigation.navigate("student")}} >
         <Text style={styles.buttonText}>
            Student Login
        </Text>
    </TouchableOpacity>

    <TouchableOpacity style={[styles.button,{backgroundColor:"blue",marginTop:60}]} 
    onPress={
      ()=>{this.props.navigation.navigate("teacher")}}>
         <Text style={styles.buttonText}>
            Teacher Login
        </Text>
    </TouchableOpacity>
    </View>
  );
}
}
const styles = StyleSheet.create({
   button:{
    justifyContent : 'center',
    alignSelf : 'center',
    borderWidth : 2,
    borderRadius : 15,
    width : 200,
    height:50,
    
  },
  buttonText : {
    fontSize:20,
    textAlign : 'center',
    color : 'white'
  },
  homestyle:{
    justifyContent:'center',
    alignSelf:'center',
    fontFamily:'ALGERIAN',
    fontSize:25
  }
})