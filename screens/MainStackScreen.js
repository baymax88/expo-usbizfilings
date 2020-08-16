import React from 'react';

import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from './HomeScreen/HomeScreen';
import Step1Screen from './OrderScreen/Step1Screen'
import Step2Screen from './OrderScreen/Step2Screen'
import Step3Screen from './OrderScreen/Step3Screen'
import Step4Screen from './OrderScreen/Step4Screen'
import Step5Screen from './OrderScreen/Step5Screen'
import SuccessScreen from './OrderScreen/SuccessScreen';
import CancelScreen from './OrderScreen/CancelScreen';
import TOSScreen from './TOSScreen/TOSScreen'
import ContactScreen from './ContactScreen/ContactScreen'
import SubscriptionScreen from './SubscriptionScreen/SubscriptionScreen'

const MainStack = createStackNavigator()

const MainStackScreen = ({ navigation }) => {
    return (
        <MainStack.Navigator headerMode="none">
            <MainStack.Screen name="Home" component={HomeScreen} />
            <MainStack.Screen name="Step1" component={Step1Screen} />
            <MainStack.Screen name="Step2" component={Step2Screen} />
            <MainStack.Screen name="Step3" component={Step3Screen} />
            <MainStack.Screen name="Step4" component={Step4Screen} />
            <MainStack.Screen name="Step5" component={Step5Screen} />
            <MainStack.Screen name="Success" component={SuccessScreen} />
            <MainStack.Screen name="Cancel" component={CancelScreen} />
            <MainStack.Screen name="TOS" component={TOSScreen} />
            <MainStack.Screen name="Contact" component={ContactScreen} />
            <MainStack.Screen name="Subscription" component={SubscriptionScreen} />
        </MainStack.Navigator>
    )
}

export default MainStackScreen