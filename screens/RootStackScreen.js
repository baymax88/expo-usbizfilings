import React from 'react';

import { createStackNavigator } from '@react-navigation/stack'

import SplashScreen from './AuthScreen/SplashScreen'
import SignInScreen from './AuthScreen/SignInScreen'
import SignUpScreen from './AuthScreen/SignUpScreen'

const RootStack = createStackNavigator()

const RootStackScreen = ({ navigation }) => {
    return (
        <RootStack.Navigator headerMode="none">
            <RootStack.Screen name="Splash" component={SplashScreen} />
            <RootStack.Screen name="Signin" component={SignInScreen} />
            <RootStack.Screen name="Signup" component={SignUpScreen} />
        </RootStack.Navigator>
    )
}

export default RootStackScreen