import React, { useEffect, useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Icon from '@expo/vector-icons/Ionicons'
import { ScrollView, StyleSheet } from 'react-native'
import { Title } from 'react-native-paper'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'

import { AppContext } from '../../contexts/AppContext';

const CancelStack = createStackNavigator()

const CancelScreen = ({ navigation }) => {
    return (
        <CancelStack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#00438b',
              },
              headerTintColor: '#fff'
        }}>
            <CancelStack.Screen name="Cancel" component={Screen} options={{
                title: 'Transaction Result',
                headerLeft: () => (
                <Icon.Button name="ios-arrow-back" size={25} backgroundColor="#00438b" onPress={() => navigation.navigate('Home')}></Icon.Button>
                )
            }} />
        </CancelStack.Navigator>
    )
}

const Screen = () => {
    const { orderData } = useContext(AppContext)
    const { contact_info } = orderData

    useEffect(() => {
        fetch('https://usbizfilings.com/mobile/v1/notify2', {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
                first_name: contact_info.first_name,
                last_name: contact_info.last_name
            })
        }).then(res => {
            if (res.status === 200) {
               console.log("Notification Email is delivered")
            }
        })
    }, [orderData])

    return (
        <ScrollView style={{paddingHorizontal: wp('5%'), marginVertical: 10}}>
            <Title style={styles.title}>Your transaction completed successfuly. You will be contacted by USBizFilings&reg; shortly.</Title>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    title: {
        marginVertical: 10,
        color: '#00498b',
        textAlign: 'center'
    }
})

export default CancelScreen