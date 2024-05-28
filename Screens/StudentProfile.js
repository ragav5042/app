import React, { Component } from 'react';
import { Text, View,TouchableOpacity,StyleSheet,TextInput} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
// import  DrawerNavigator  from '../Navigation/DrawerNavigator';
export default class StudentProfile extends Component {
    render() {
        return (
        <View>
          
            <View
                style={{
                    flex: 1,

                    alignItems: "center"
                }}>
                
                <Text style={styles.header}>Welcome</Text>
<View style={{flexDirection:"row"}}>
 <TouchableOpacity style={[styles.buttonsLeft,{backgroundColor:"blue"}]}
 onPress={()=>{this.props.navigation.navigate("performance")}}>
                  <Text style={{color:"white"}}> Performance</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={[styles.buttonsRight,{backgroundColor:"green"}]}
                  onPress={()=>{this.props.navigation.navigate("report")}}>
                  <Text style={{color:"white"}}> Today's Report</Text>
                  </TouchableOpacity>
</View>

<View style={{flexDirection:"row"}}>
                  <TouchableOpacity style={[styles.buttonsLeft,{backgroundColor:"red"}]}
                  onPress={()=>{this.props.navigation.navigate("homework")}}>
                  <Text style={{color:"white"}}> Today's Homework</Text>
                  </TouchableOpacity>

<TouchableOpacity style={[styles.buttonsRight,{backgroundColor:"#B982FA"}]}
onPress={()=>{this.props.navigation.navigate("timeslots")}}>
                  <Text style={{color:"white"}}> Time Slots</Text>
                  </TouchableOpacity>
</View>
<TouchableOpacity style={[styles.backButton,{backgroundColor:"#FFC100",justifyContent:"center",marginLeft:20}]}
onPress={()=>{this.props.navigation.navigate("leave")}}>
                  <Text style={{color:"white"}}> Leave Request</Text>
                  </TouchableOpacity>


                <TouchableOpacity style={[styles.backButton,{backgroundColor:"blue"}]}
                onPress={()=>{this.props.navigation.navigate("home")}}>
                <Text style={{color:"white"}}>
                Go Back To HomeScreen
                </Text>
                </TouchableOpacity>

                 
       
    
            </View>
            </View>

            
        )
    }
}

const styles=StyleSheet.create({
backButton : {
textAlign:"center",
marginTop:50,
marginLeft:-150,
width:150,
height:50,
borderRadius:70
},
header:{
marginTop:25,
fontSize:30,
fontWeight:"bold"
},
buttonsRight:{
textAlign:"center",
justifyContent:"center",
marginTop: 40,
marginLeft:20,
width:100,
height:100,
borderTopLeftRadius:70
},
buttonsLeft:{
textAlign:"center",
justifyContent:"center",
marginTop:40,
width:100,
height:100,
borderTopRightRadius:70
}
})