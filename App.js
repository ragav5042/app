import * as React from 'react';
import { Text, View, StyleSheet,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  DrawerNavigator  from './Navigation/DrawerNavigator';
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();  

import HomeScreen from "./Screens/HomeScreen"
import GuestLogin from "./Screens/GuestLogin"
import StudentLogin from "./Screens/StudentLogin"
import TeacherLogin from "./Screens/TeacherLogin"
import StudentProfile from "./Screens/StudentProfile"
import Homework from "./Screens/Homework"
import Report from "./Screens/Report"
import Performance from "./Screens/Performance"
import TimeSlots from "./Screens/TimeSlots"
import Leaverequest from "./Screens/LeaveRequest"
const Stack=createStackNavigator()
export default function App() {
  return (
    
   <NavigationContainer>
<Stack.Navigator screenOptions={{headerShown:false}}>
<Stack.Screen name="home" component={HomeScreen}/>
<Stack.Screen name="guest" component={GuestLogin}/>
<Stack.Screen name="student" component={StudentLogin}/>
<Stack.Screen name="teacher" component={TeacherLogin}/>
<Stack.Screen name="profile" component={StudentProfile}/>
<Stack.Screen name="homework" component={Homework}/>
<Stack.Screen name="report" component={Report}/>
<Stack.Screen name="performance" component={Performance}/>
<Stack.Screen name="timeslots" component={TimeSlots}/>
<Stack.Screen name="leave" component={Leaverequest}/>
</Stack.Navigator>
    </NavigationContainer>
    
    
    
  );
}