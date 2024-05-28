import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Homework from "../Screens/Homework"
import HomeScreen from "../Screens/HomeScreen"
import GuestLogin from  "../Screens/GuestLogin"
import Report from "../Screens/Report"
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator >
            <Drawer.Screen name="DTE" component={HomeScreen}/>
            <Drawer.Screen name="Guest Login" component={GuestLogin}/>
            <Drawer.Screen name="Report" component={Report}/>
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;