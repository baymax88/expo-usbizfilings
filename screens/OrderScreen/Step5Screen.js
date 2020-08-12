import React, { useState, useContext, useEffect } from 'react'
import { View, ScrollView, StyleSheet, Text, Modal } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import Icon from '@expo/vector-icons/Ionicons'
import { WebView } from 'react-native-webview';
import { useFonts, Comfortaa_700Bold } from '@expo-google-fonts/comfortaa';
import { AppLoading } from 'expo'
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

const Screen = ({ navigation }) => {
    const [modalShow, setModalShow] = useState(false)
    const { orderData } = useContext(AppContext)
    const {
        state_number,
        entity_type,
        state_fee,
        package_price,
        package_name,
        enabled_services,
        contact_info,
        company_info,
        paypal_email
    } = orderData
    const { state } = STATES.filter(item => item.no === state_number)[0]

    const services = ADD_ON_SERVICES.filter(item => item.entity === entity_type)[0].services.filter(service => enabled_services.includes(service.no))

    const calAddOnServicePrice = services => {
        let price = 0
        services.map(service => {
            price += service.price
        })
        return price
    }

    const addOnServicePrice = calAddOnServicePrice(services)

    const totalPrice = (company_info.registered_agent) ? (package_price + state_fee + addOnServicePrice + 85) : (package_price + state_fee + addOnServicePrice)

    const handleSubmit = () => {
        setModalShow(true)
    }

    const handleResponse = data => {
        if (data.title === 'cancelled') {
            setModalShow(false)
            navigation.navigate('Cancel')
        } else if (data.title === 'success') {
            setModalShow(false)
            navigation.navigate('Success')
        }
    }

    return (
        <ScrollView>
            <Modal
                visible={modalShow}
                onRequestClose={() => setModalShow(false)}
            >
                <WebView
                    source={{uri: 'https://usbizfilings.com/order_mobile.php'}}
                    style={{marginTop: 50}}
                    injectedJavaScript={`document.getElementById("business").value="${paypal_email}";document.getElementById("amount").value="${totalPrice}";document.getElementById("first_name").value="${contact_info.first_name}";document.getElementById("last_name").value="${contact_info.last_name}";document.getElementById("os0").value="${contact_info.first_name} ${contact_info.last_name}";document.getElementById("os1").value="${entity_type} ${package_name}";document.form.submit();`}
                    onMessage={() => {}}
                    onNavigationStateChange={data => handleResponse(data)}
                />
            </Modal>
            <View style={styles.stepTitleContainer}>
                <Title style={styles.stepTitle}>
                    Step 5
                </Title>
            </View>

            <Title style={styles.description}>
                Your Invoice Summary is below. Please, click on Pay Now button to continue with payment procedure.
            </Title>

            <View style={styles.stateEntityInfoContainer}>
                <View style={{flexDirection: 'row'}}>
                    <Title style={{color: '#dc3545', fontSize: wp('4%')}}>State: </Title>
                    <Title style={{fontSize: wp('4%')}}>{state}</Title>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Title style={{color: '#dc3545', fontSize: wp('4%')}}>Entity: </Title>
                    <Title style={{fontSize: wp('4%')}}>{entity_type}</Title>
                </View>
            </View>

            <View style={{backgroundColor: '#ddd', borderRadius: wp('2%'), marginHorizontal: wp('2%')}}>
                <View style={styles.serviceListItem}>
                    <Title style={{fontSize: wp('4%'), flex: 3, color: '#222', paddingRight: wp('2%')}}>
                        Package Price
                    </Title>
                    <Title style={{fontSize: wp('4%'), flex: 1, color: '#00438b', paddingLeft: wp('2%')}}>
                        ${package_price.toLocaleString()}
                    </Title>
                </View>
                <View style={styles.serviceListItem}>
                    <Title style={{fontSize: wp('4%'), flex: 3, color: '#222', paddingRight: wp('2%')}}>
                        Add-On Service
                    </Title>
                    <Title style={{fontSize: wp('4%'), flex: 1, color: '#00438b', paddingLeft: wp('2%')}}>
                        ${addOnServicePrice.toLocaleString()}
                    </Title>
                </View>
                <View style={styles.serviceListItem}>
                    <Title style={{fontSize: wp('4%'), flex: 3, color: '#222', paddingRight: wp('2%')}}>
                        State Fees
                    </Title>
                    <Title style={{fontSize: wp('4%'), flex: 1, color: '#00438b', paddingLeft: wp('2%')}}>
                        ${state_fee.toLocaleString()}
                    </Title>
                </View>
                <View style={styles.serviceListItem}>
                    <Title style={{fontSize: wp('4%'), flex: 3, color: '#222', paddingRight: wp('2%')}}>
                        Registered Agent
                    </Title>
                    <Title style={{fontSize: wp('4%'), flex: 1, color: '#00438b', paddingLeft: wp('2%')}}>
                        ${(company_info.registered_agent) ? 85 : 0}
                    </Title>
                </View>
            </View>
            <View style={{
                alignItems: 'center',
                justifyContent: 'space-around',
                flexDirection: 'row',
                marginVertical: 5,
                marginHorizontal: wp('8%'),
            }}>
                <Title style={{fontSize: wp('4%'), flex: 3, color: '#00438b', paddingRight: wp('2%')}}>
                    Total Price
                </Title>
                <Title style={{fontSize: wp('4%'), flex: 1, color: '#00438b', paddingLeft: wp('2%')}}>
                    ${totalPrice.toLocaleString()}
                </Title>
            </View>

            <Button
                mode="contained"
                style={{width: wp('30%'), alignSelf: 'center', marginVertical: 20, borderRadius: 20, backgroundColor: '#ffc439'}}
                uppercase={false}
                labelStyle={{color: '#000', fontSize: wp('4%')}}
                onPress={handleSubmit}
            >
                Pay Now
            </Button>
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

export default Step5Screen