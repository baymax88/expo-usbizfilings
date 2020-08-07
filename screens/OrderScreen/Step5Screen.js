import React, { useState, useContext, useEffect } from 'react'
import { View, ScrollView, StyleSheet, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import Icon from '@expo/vector-icons/Ionicons'
import { useFonts, Comfortaa_700Bold } from '@expo-google-fonts/comfortaa';
import { AppLoading } from 'expo'
import SelectPicker from 'react-native-form-select-picker'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Title, Button, Checkbox, Caption } from 'react-native-paper'

import { AppContext } from '../../contexts/AppContext';
import { STATES, ADD_ON_SERVICES } from '../../config/consts'

const Step5Stack = createStackNavigator()

const Step5Screen = ({ navigation }) => {
    let [ fontsLoaded ] = useFonts({
        Comfortaa_700Bold
    })

    if (!fontsLoaded) {
        <AppLoading />
    }

    return (
        <Step5Stack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#00438b',
              },
              headerTintColor: '#fff'
        }}>
            <Step5Stack.Screen name="Step5" component={Screen} options={{
                title: 'Order Process',
                headerLeft: () => (
                    <Icon.Button name="ios-menu" size={25} backgroundColor="#00438b" onPress={() => navigation.openDrawer()}></Icon.Button>
                )
            }} />
        </Step5Stack.Navigator>
    )
}

const Screen = () => {
    return (
        <View />
    )
}

export default Step5Screen