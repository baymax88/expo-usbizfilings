import React from 'react';

import { createStackNavigator } from '@react-navigation/stack'

import SplashScreen from './AuthScreen/SplashScreen'
import SignInScreen from './AuthScreen/SignInScreen'
import SignUpScreen from './AuthScreen/SignUpScreen'
import ResetPasswordScreen from './AuthScreen/ResetPasswordScreen'

const RootStack = createStackNavigator()

const RootStackScreen = ({ navigation }) => {
    return (
        <RootStack.Navigator headerMode="none">
            <RootStack.Screen name="Splash" component={SplashScreen} />
            <RootStack.Screen name="Signin" component={SignInScreen} />
            <RootStack.Screen name="Signup" component={SignUpScreen} />
            <RootStack.Screen name="ResetPassword" component={ResetPasswordScreen} />
        </RootStack.Navigator>
    )
}

export default RootStackScreen