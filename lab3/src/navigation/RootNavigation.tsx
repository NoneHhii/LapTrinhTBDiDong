import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { CodeInva } from "../screens/CodeInva";
import { ForgetPassword } from "../screens/ForgetPassword";
import { HomeScreen } from "../screens/HomeScreen";
import { SplashScreen } from "../screens/SplashScreen";

export type RootStackParamList = {
    Home: undefined,
    Splash: undefined,
    ForgetPass: undefined,
    CodeInva: undefined,
}

const Stack = createStackNavigator();

export const RootNavigation : React.FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Splash"
                screenOptions={{headerShown: false}}
            >
                <Stack.Screen name="Splash" component={SplashScreen}/>
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="ForgetPass" component={ForgetPassword}/>
                <Stack.Screen name="CodeInva" component={CodeInva}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}