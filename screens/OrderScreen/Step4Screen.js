import React, { useState, useContext, useEffect } from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import Icon from '@expo/vector-icons/Ionicons'
import { useFonts, Comfortaa_700Bold } from '@expo-google-fonts/comfortaa';
import { AppLoading } from 'expo'
import SelectPicker from 'react-native-form-select-picker'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Title, Button, Checkbox } from 'react-native-paper'

import { AppContext } from '../../contexts/AppContext';
import { STATES, ADD_ON_SERVICES } from '../../config/consts'

const Step4Stack = createStackNavigator()

const Step4Screen = ({ navigation }) => {
    let [ fontsLoaded ] = useFonts({
        Comfortaa_700Bold
    })

    if (!fontsLoaded) {
        <AppLoading />
    }

    return (
        <Step4Stack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#00438b',
              },
              headerTintColor: '#fff'
        }}>
            <Step4Stack.Screen name="Step4" component={Screen} options={{
                title: 'Order Process',
                headerLeft: () => (
                    <Icon.Button name="ios-menu" size={25} backgroundColor="#00438b" onPress={() => navigation.openDrawer()}></Icon.Button>
                )
            }} />
        </Step4Stack.Navigator>
    )
}

const Screen = () => {
    const { orderData } = useContext(AppContext)
    const { state_number, entity_type, package_name, enabled_services } = orderData
    const { state, inc, llc, non_profit } = STATES.filter(item => item.no === state_number)[0]
    const services = ADD_ON_SERVICES.filter(item => item.entity === entity_type)[0]
    console.log(enabled_services)

    return (
        <ScrollView>
            <View style={styles.stepTitleContainer}>
                <Title style={styles.stepTitle}>
                    Step 4
                </Title>
            </View>

            <Title style={styles.description}>
                Please review the following information.
                If you would like to make any changes, please go back to the previous step and make the changes as you like, otherwise, proceed to the next step.
            </Title>

            <View style={styles.stateEntityInfoContainer}>
                <View style={{flexDirection: 'row'}}>
                    <Title style={{color: '#dc3545', fontSize: wp('4.5%')}}>State: </Title>
                    <Title style={{fontSize: wp('4.5%')}}>{state}</Title>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Title style={{color: '#dc3545', fontSize: wp('4.5%')}}>Entity: </Title>
                    <Title style={{fontSize: wp('4.5%')}}>{entity_type}</Title>
                </View>
            </View>

            <View style={styles.serviceListItem}>
                <Title style={{fontSize: wp('4%'), flex: 3, color: '#00438b', paddingRight: wp('2%')}}>
                    Selected Formation Package
                </Title>
                <Title style={{fontSize: wp('4%'), flex: 1, color: '#00438b', paddingLeft: wp('2%')}}>
                    {package_name}
                </Title>
            </View>
            {services.services.map(item => {
                return (
                    <View style={styles.serviceListItem} key={item.no}>
                        <Title style={{fontSize: wp('4%'), flex: 3, paddingRight: wp('2%')}}>
                            {item.description}
                        </Title>
                        <View style={{flex: 1, paddingLeft: wp('2%'), alignItems: 'flex-start'}}>
                            {(item[package_name] === 'unchecked' && !enabled_services.includes(item.no)) ? null : (
                                <Checkbox status="checked" color="#28a745" />
                            )}
                        </View>
                    </View>
                )
            })}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    stepTitleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    stepTitle: {
        color: '#00438b'
    },
    description: {
        marginTop: 20,
        color: '#fff',
        fontSize: wp('4%'),
        lineHeight: wp('6%'),
        backgroundColor: '#00438b',
        padding: wp('3%')
    },
    stateEntityInfoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginVertical: 5
    },
    serviceListItem: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginVertical: 5,
        marginHorizontal: wp('4%'),
    },
})

export default Step4Screen