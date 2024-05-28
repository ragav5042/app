import React, { Component } from 'react';
import { Text, View,TouchableOpacity,StyleSheet,TextInput} from 'react-native';
// import StudentProfile from "./StudentProfile"
export default class StudentLogin extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,

                   backgroundColor:"#C79AFC"
                }}>
                <Text style={{marginLeft:75,fontSize:25,fontWeight:"bold",color:"white"}}> Student Login</Text>
                <View style={styles.textInputContainer}>
                <TextInput placeholder={"Email"} style={styles.textinput}
                placeholderTextColor={"red"}/> 

                <TextInput placeholder={"Password"} style={styles.textinput}
                placeholderTextColor={"red"}/> 
            
                <TouchableOpacity style={styles.backButton}
                onPress={()=>{this.props.navigation.navigate("home")}}>
                <Text style={{color:"white"}}>
                Go Back To HomeScreen
                </Text>
                </TouchableOpacity>


                <TouchableOpacity
              style={[styles.button, { marginTop: 20 }]}
              onPress={()=>{this.props.navigation.navigate("profile")}}
            >
              <Text style={styles.buttonText} >Login</Text>
            </TouchableOpacity>

            
                </View>
            </View>
        )
    }
}
const styles=StyleSheet.create({
backButton : {
textAlign:"center",
marginTop:75,
backgroundColor:"blue",
width:150,
height:50,
borderRadius:70
},
textInputContainer:{
  marginLeft:75,
  borderColor:"white",
},
textinput: {
  marginTop:60,
  
    width: "75%",
    height: 55,
    padding: 10,
    borderColor: "#FFFFFF",
    fontWeight:"bold",
    borderWidth: 4,
    borderRadius: 10,
    fontSize: 18,
    color: "red",
    backgroundColor: "#B1FFD4"
  },
  button: {
    marginLeft:100,
    width: "43%",
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F48D20",
    borderRadius: 15
  },
  buttonText: {
    fontSize: 24,
    color: "#FFFFFF",
    fontFamily: "Rajdhani_600SemiBold"
  }
})