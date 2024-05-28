import React, { Component } from 'react';
import { Text, View, TouchableOpacity,StyleSheet,} from 'react-native';

export default class GuestLogin extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    alignItems: "center"
                }}>
                <Text style={{fontSize:30,fontWeight:"bold",color:"white"}}> Welcome</Text>
                <Text> Classes Taken </Text>
                <TouchableOpacity style={styles.backButton}
                onPress={()=>{this.props.navigation.navigate("home")}}>
                <Text style={{color:"white"}}>
                Go Back To HomeScreen
                </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles=StyleSheet.create({
backButton : {
textAlign:"center",
marginTop:150,
marginLeft:-150,
backgroundColor:"blue",
width:150,
height:50,
borderRadius:70
}
})