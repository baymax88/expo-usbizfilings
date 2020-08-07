import React, { useState, useContext, useEffect } from 'react'
import { View, ScrollView, StyleSheet, Text, Alert } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import Icon from '@expo/vector-icons/Ionicons'
import { useFonts, Comfortaa_700Bold } from '@expo-google-fonts/comfortaa';
import { AppLoading } from 'expo'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Title, Button, Checkbox, Caption } from 'react-native-paper'

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

const Screen = ({ navigation }) => {
    const [agreeTos, setAgreeTos] = useState(false)
    const { orderData } = useContext(AppContext)
    const {
        state_number,
        entity_type,
        package_name,
        enabled_services,
        contact_info,
        company_info
    } = orderData
    const { state } = STATES.filter(item => item.no === state_number)[0]
    const services = ADD_ON_SERVICES.filter(item => item.entity === entity_type)[0]

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

    const handleSubmit = () => {
        if (!agreeTos) {
            Alert.alert(
                "Warning",
                "Please check Terms of Service!",
                [{
                    text: 'OK',
                    style: 'cancel'
                }]
            )
        } else {
            navigation.navigate('Step5')
        }
    }

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
                    <Title style={{color: '#dc3545', fontSize: wp('4%')}}>State: </Title>
                    <Title style={{fontSize: wp('4%')}}>{state}</Title>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Title style={{color: '#dc3545', fontSize: wp('4%')}}>Entity: </Title>
                    <Title style={{fontSize: wp('4%')}}>{entity_type}</Title>
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

            <Title style={styles.subTitle}>
                Contact Information
            </Title>
            <View style={styles.serviceListItem}>
                <Title style={{fontSize: wp('4%'), flex: 3, paddingRight: wp('2%')}}>
                    Name *
                </Title>
                <Title style={{fontSize: wp('4%'), flex: 3, paddingRight: wp('2%'), color: '#004389'}}>
                    {capitalizeFirstLetter(contact_info.first_name)} {capitalizeFirstLetter(contact_info.last_name)}
                </Title>
            </View>
            <View style={{borderBottomWidth: 1, borderBottomColor: '#aaa', marginHorizontal: wp('2%')}} />

            <View style={styles.serviceListItem}>
                <Title style={{fontSize: wp('4%'), flex: 3, paddingRight: wp('2%')}}>
                    Address *
                </Title>
                <Title style={{fontSize: wp('4%'), flex: 3, paddingRight: wp('2%'), color: '#004389'}}>
                    {capitalizeFirstLetter(contact_info.address)}
                </Title>
            </View>
            <View style={styles.serviceListItem}>
                <Title style={{fontSize: wp('4%'), flex: 3, paddingRight: wp('2%')}}>
                    City *
                </Title>
                <Title style={{fontSize: wp('4%'), flex: 3, paddingRight: wp('2%'), color: '#004389'}}>
                    {capitalizeFirstLetter(contact_info.city)}
                </Title>
            </View>
            <View style={styles.serviceListItem}>
                <Title style={{fontSize: wp('4%'), flex: 3, paddingRight: wp('2%')}}>
                    State *
                </Title>
                <Title style={{fontSize: wp('4%'), flex: 3, paddingRight: wp('2%'), color: '#004389'}}>
                    {capitalizeFirstLetter(contact_info.state)}
                </Title>
            </View>
            <View style={styles.serviceListItem}>
                <Title style={{fontSize: wp('4%'), flex: 3, paddingRight: wp('2%')}}>
                    Zip *
                </Title>
                <Title style={{fontSize: wp('4%'), flex: 3, paddingRight: wp('2%'), color: '#004389'}}>
                    {capitalizeFirstLetter(contact_info.zip)}
                </Title>
            </View>
            <View style={styles.serviceListItem}>
                <Title style={{fontSize: wp('4%'), flex: 3, paddingRight: wp('2%')}}>
                    County *
                </Title>
                <Title style={{fontSize: wp('4%'), flex: 3, paddingRight: wp('2%'), color: '#004389'}}>
                    {capitalizeFirstLetter(contact_info.county)}
                </Title>
            </View>
            <View style={styles.serviceListItem}>
                <Title style={{fontSize: wp('4%'), flex: 3, paddingRight: wp('2%')}}>
                    Country *
                </Title>
                <Title style={{fontSize: wp('4%'), flex: 3, paddingRight: wp('2%'), color: '#004389'}}>
                    {capitalizeFirstLetter(contact_info.country)}
                </Title>
            </View>
            <View style={{borderBottomWidth: 1, borderBottomColor: '#aaa', marginHorizontal: wp('2%')}} />

            <View style={styles.serviceListItem}>
                <Title style={{fontSize: wp('4%'), flex: 3, paddingRight: wp('2%')}}>
                    Phone *
                </Title>
                <Title style={{fontSize: wp('4%'), flex: 3, paddingRight: wp('2%'), color: '#004389'}}>
                    {capitalizeFirstLetter(contact_info.phone)}
                </Title>
            </View>
            <View style={styles.serviceListItem}>
                <Title style={{fontSize: wp('4%'), flex: 3, paddingRight: wp('2%')}}>
                    Fax
                </Title>
                <Title style={{fontSize: wp('4%'), flex: 3, paddingRight: wp('2%'), color: '#004389'}}>
                    {capitalizeFirstLetter(contact_info.fax)}
                </Title>
            </View>
            <View style={styles.serviceListItem}>
                <Title style={{fontSize: wp('4%'), flex: 3, paddingRight: wp('2%')}}>
                    Email *
                </Title>
                <Title style={{fontSize: wp('4%'), flex: 3, paddingRight: wp('2%'), color: '#004389'}}>
                    {capitalizeFirstLetter(contact_info.email)}
                </Title>
            </View>

            <Title style={styles.subTitle}>
                Company Information
            </Title>
            <Title style={{fontSize: wp('4.5%'), alignSelf: 'center'}}>
                Name Of Company
            </Title>
            <View style={styles.serviceListItem}>
                <Title style={{fontSize: wp('4%'), flex: 3, paddingRight: wp('2%')}}>
                    First Choice *
                </Title>
                <Title style={{fontSize: wp('4%'), flex: 3, paddingRight: wp('2%'), color: '#004389'}}>
                    {capitalizeFirstLetter(company_info.first_company_name)}
                </Title>
            </View>
            <View style={styles.serviceListItem}>
                <Title style={{fontSize: wp('4%'), flex: 3, paddingRight: wp('2%')}}>
                    Second Choice *
                </Title>
                <Title style={{fontSize: wp('4%'), flex: 3, paddingRight: wp('2%'), color: '#004389'}}>
                    {capitalizeFirstLetter(company_info.second_company_name)}
                </Title>
            </View>
            <View style={{borderBottomWidth: 1, borderBottomColor: '#aaa', marginHorizontal: wp('2%')}} />

            <Title style={{fontSize: wp('4.5%'), alignSelf: 'center'}}>
                Company Address
            </Title>
            <View style={styles.serviceListItem}>
                <Title style={{fontSize: wp('4%'), flex: 3, paddingRight: wp('2%')}}>
                    Address *
                </Title>
                <Title style={{fontSize: wp('4%'), flex: 3, paddingRight: wp('2%'), color: '#004389'}}>
                    {capitalizeFirstLetter(company_info.company_address)}
                </Title>
            </View>
            <View style={styles.serviceListItem}>
                <Title style={{fontSize: wp('4%'), flex: 3, paddingRight: wp('2%')}}>
                    City *
                </Title>
                <Title style={{fontSize: wp('4%'), flex: 3, paddingRight: wp('2%'), color: '#004389'}}>
                    {capitalizeFirstLetter(company_info.company_city)}
                </Title>
            </View>
            <View style={styles.serviceListItem}>
                <Title style={{fontSize: wp('4%'), flex: 3, paddingRight: wp('2%')}}>
                    State *
                </Title>
                <Title style={{fontSize: wp('4%'), flex: 3, paddingRight: wp('2%'), color: '#004389'}}>
                    {capitalizeFirstLetter(company_info.company_state)}
                </Title>
            </View>
            <View style={styles.serviceListItem}>
                <Title style={{fontSize: wp('4%'), flex: 3, paddingRight: wp('2%')}}>
                    Zip *
                </Title>
                <Title style={{fontSize: wp('4%'), flex: 3, paddingRight: wp('2%'), color: '#004389'}}>
                    {capitalizeFirstLetter(company_info.company_zip)}
                </Title>
            </View>
            <View style={styles.serviceListItem}>
                <Title style={{fontSize: wp('4%'), flex: 3, paddingRight: wp('2%')}}>
                    County *
                </Title>
                <Title style={{fontSize: wp('4%'), flex: 3, paddingRight: wp('2%'), color: '#004389'}}>
                    {capitalizeFirstLetter(company_info.company_county)}
                </Title>
            </View>
            <View style={styles.serviceListItem}>
                <Title style={{fontSize: wp('4%'), flex: 3, paddingRight: wp('2%')}}>
                    Country *
                </Title>
                <Title style={{fontSize: wp('4%'), flex: 3, paddingRight: wp('2%'), color: '#004389'}}>
                    {capitalizeFirstLetter(company_info.company_country)}
                </Title>
            </View>
            <View style={styles.serviceListItem}>
                <Title style={{fontSize: wp('4%'), flex: 3, paddingRight: wp('2%')}}>
                    Phone *
                </Title>
                <Title style={{fontSize: wp('4%'), flex: 3, paddingRight: wp('2%'), color: '#004389'}}>
                    {capitalizeFirstLetter(company_info.company_phone)}
                </Title>
            </View>
            <View style={styles.serviceListItem}>
                <Title style={{fontSize: wp('4%'), flex: 3, paddingRight: wp('2%')}}>
                    Fax
                </Title>
                <Title style={{fontSize: wp('4%'), flex: 3, paddingRight: wp('2%'), color: '#004389'}}>
                    {capitalizeFirstLetter(company_info.company_fax)}
                </Title>
            </View>
            <View style={{borderBottomWidth: 1, borderBottomColor: '#aaa', marginHorizontal: wp('2%')}} />

            <Title style={{fontSize: wp('4.5%'), alignSelf: 'center'}}>
                Registered Agent
            </Title>
            {(company_info.registered_agent) ? (
                <Title style={styles.smallText}>I designate USBizFilings&reg; service as a Registered Agent on behalf of the company for a fee of $85 per year.</Title>
            ) : (<Title style={styles.smallText}>I choose to use my own name as a Registered Agent.</Title>)}
            <View style={{borderBottomWidth: 1, borderBottomColor: '#aaa', marginHorizontal: wp('2%')}} />

            <Title style={{fontSize: wp('4.5%'), alignSelf: 'center'}}>
                Terms Of Use
            </Title>
            <View style={{flexDirection: 'row', marginVertical: 5, marginHorizontal: wp('5%'), justifyContent: 'center'}}>
                <Checkbox status={(agreeTos) ? 'checked' : 'unchecked'} color="#f70" style={{flex: 1}} onPress={() => setAgreeTos(!agreeTos)} />
                <Caption style={{fontSize: wp('4%'), flex: 5, textAlign: 'center'}} onPress={() => alert('clicked')}>
                    By checking here, I certify that I have read the <Text style={{color: '#00438b'}} onPress={() => navigation.navigate('TOS')}>Terms of Use</Text> and accepts it's contents.
                </Caption>
            </View>
            <View style={{borderBottomWidth: 1, borderBottomColor: '#aaa', marginHorizontal: wp('2%')}} />

            {/* button container */}
            <View style={styles.buttonContainer}>
                <Button icon="arrow-left" style={styles.prevButton} mode="contained" onPress={() => navigation.navigate('Step3')}>Step 3</Button>
                <Title style={{color: '#888', fontSize: wp('4%')}}>STEP 4</Title>
                <Button icon="arrow-right" style={styles.nextButton} mode="contained" onPress={handleSubmit}>Step 5</Button>
            </View>
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
    subTitle: {
        marginTop: 20,
        color: '#fff',
        fontSize: wp('5%'),
        lineHeight: wp('8%'),
        backgroundColor: '#00438b',
        padding: wp('4%')
    },
    smallText: {
        color: '#555',
        fontSize: wp('4%'),
        marginHorizontal: wp('4%'),
        textAlign: 'center',
        marginVertical: 5
    },
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 60,
        marginHorizontal: wp('4%'),
        marginBottom: 40
    },
    nextButton: {
        alignSelf: 'flex-end'
    },
    prevButton: {
        alignSelf: 'flex-start'
    }
})

export default Step4Screen