import React, { useState, useEffect, useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts, Comfortaa_700Bold } from '@expo-google-fonts/comfortaa';
import { AppLoading } from 'expo';
import { ScrollView, View, StyleSheet } from 'react-native'
import Icon from '@expo/vector-icons/Ionicons'
import { Title, Button, Checkbox } from 'react-native-paper'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import SelectPicker from 'react-native-form-select-picker'

import { AppContext } from '../../contexts/AppContext';
import { ADD_ON_SERVICES } from '../../config/consts'

const Step2Stack = createStackNavigator()

const Step2Screen = ({ navigation }) => {
    let [ fontsLoaded ] = useFonts({
        Comfortaa_700Bold
    })

    if (!fontsLoaded) {
        <AppLoading />
    }

    return (
        <Step2Stack.Navigator screenOptions={{
            headerStyle: {
              backgroundColor: '#00438b',
            },
            headerTintColor: '#fff'
        }}>
            <Step2Stack.Screen name="Step2" component={Screen} options={{
                title: 'Order Process',
                headerLeft: () => (
                    <Icon.Button name="ios-menu" size={25} backgroundColor="#00438b" onPress={() => navigation.openDrawer()}></Icon.Button>
                )
            }} />
        </Step2Stack.Navigator>
    );
}

const Screen = ({ navigation }) => {
    const { orderData, setStep2 } = useContext(AppContext)
    const services = ADD_ON_SERVICES.filter(item => item.entity === orderData.entity_type)[0]
    const [pkg, setPkg] = useState('standard')
    const [pkgPrice, setPkgPrice] = useState(services.package_price[pkg])
    const [enabledServices, setEnabledServices] = useState([])

    useEffect(() => {
        setPkgPrice(services.package_price[pkg])
    }, [pkg])

    const handleServices = (value) => {
        if (enabledServices.includes(value)) {
            setEnabledServices(enabledServices.filter(item => item !== value))
        } else {
            setEnabledServices([...enabledServices, value])
        }
    }

    const handleSubmit = () => {
        setStep2({enabled_services: enabledServices, package_price: pkgPrice, package_name: pkg})
        navigation.push('Step3')
    }

    return (
        <ScrollView>
            <View style={styles.stepTitleContainer}>
                <Title style={styles.stepTitle}>
                    Step 2
                </Title>
            </View>

            <Title style={styles.description}>
                Please select the Formation Package that best fits your business needs.
                {/* An automatic calculation of the total price, including state fees and selected add-on services, appears at the bottom of the chart. */}
            </Title>

            {/* part for selection entity type */}
            <Title style={styles.title}>
                Package
            </Title>
            <SelectPicker
                style={styles.selectBox}
                doneButtonText="Done"
                onSelectedStyle={styles.placeholder}
                selected={pkg}
                onValueChange={(value) => {
                    setPkg(value)
                }}
            >
                <SelectPicker.Item label="Basic" value="basic" />
                <SelectPicker.Item label="Standard" value="standard" />
                <SelectPicker.Item label="Complete" value="complete" />
            </SelectPicker>

            {/* package service list */}
            <View style={styles.serviceListItem}>
                <Title style={{fontSize: wp('4%'), flex: 3, color: '#00438b', paddingRight: wp('2%')}}>
                    Package Description
                </Title>
                <Title style={{fontSize: wp('4%'), flex: 1, color: '#00438b', paddingLeft: wp('2%')}}>
                    ${pkgPrice.toLocaleString()}
                </Title>
            </View>
            {services.services.map(item => {
                return (
                    <View style={styles.serviceListItem} key={item.no}>
                        <Title style={{fontSize: wp('4%'), flex: 3, paddingRight: wp('2%')}}>
                            {item.description}
                        </Title>
                        <View style={{flex: 1, paddingLeft: wp('2%'), alignItems: 'flex-start'}}>
                            {(item[pkg] === 'unchecked') ? (
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    {!enabledServices.includes(item.no) ? (
                                        <Icon name="ios-square-outline" color="#707070" size={wp('7%')} onPress={() => handleServices(item.no)} />
                                    ) : (
                                        <Icon name="md-checkbox-outline" color="#28a745" size={wp('6%')} onPress={() => handleServices(item.no)} />
                                    )}
                                    <Title style={{marginLeft: wp('2%'), fontSize: wp('4%')}}>${item.price.toLocaleString()}</Title>
                                </View>
                            ) : (
                                <Icon name="md-checkbox-outline" color="#28a745" size={wp('6%')} />
                            )}
                        </View>
                    </View>
                )
            })}

            {/* button container */}
            <View style={styles.buttonContainer}>
                <Button icon="arrow-left" style={styles.prevButton} mode="contained" onPress={() => navigation.push('Step1')}>Step 1</Button>
                <Title style={{color: '#888', fontSize: wp('4%')}}>STEP 2</Title>
                <Button icon="arrow-right" style={styles.nextButton} mode="contained" onPress={handleSubmit}>Step 3</Button>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    selectBox: {
        marginVertical: 10,
        marginHorizontal:  wp('4%'),
        borderColor: '#00438b',
        borderWidth: 1,
        borderRadius: 5,
    },
    placeholder: {
        fontFamily: 'Comfortaa_700Bold',
        fontSize: wp('4%'),
    },
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
    title: {
        marginTop: 20,
        color: '#00438b',
        fontSize: wp('4%'),
        marginHorizontal: wp('4%'),
    },
    serviceListItem: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginVertical: 5,
        marginHorizontal: wp('4%'),
    },
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 60,
        marginHorizontal: wp('4%'),
        marginBottom: 20
    },
    nextButton: {
        alignSelf: 'flex-end'
    },
    prevButton: {
        alignSelf: 'flex-start'
    }
})

export default Step2Screen;