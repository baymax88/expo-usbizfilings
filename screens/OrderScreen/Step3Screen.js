import React, { useState, useEffect, useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts, Comfortaa_700Bold } from '@expo-google-fonts/comfortaa';
import { AppLoading } from 'expo';
import { ScrollView, View, StyleSheet } from 'react-native'
import Icon from '@expo/vector-icons/Ionicons'
import { Title, Button, Checkbox, TextInput, Caption, HelperText } from 'react-native-paper'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { AppContext } from '../../contexts/AppContext';

const Step3Stack = createStackNavigator()

const Step3Screen = ({ navigation }) => {
    let [ fontsLoaded ] = useFonts({
        Comfortaa_700Bold
    })

    if (!fontsLoaded) {
        <AppLoading />
    }

    return (
        <Step3Stack.Navigator screenOptions={{
            headerStyle: {
              backgroundColor: '#00438b',
            },
            headerTintColor: '#fff'
        }}>
            <Step3Stack.Screen name="Step3" component={Screen} options={{
                title: 'Order Process',
                headerLeft: () => (
                    <Icon.Button name="ios-menu" size={25} backgroundColor="#00438b" onPress={() => navigation.openDrawer()}></Icon.Button>
                )
            }} />
        </Step3Stack.Navigator>
    );
}

const Screen = ({ navigation }) => {
    const { orderData, setStep3 } = useContext(AppContext)
    const [contactInfo, setContactInfo] = useState(orderData.contact_info)
    const [companyInfo, setCompanyInfo] = useState(orderData.company_info)

    const [errFirstName, setErrFirstName] = useState(false)
    const [errLastName, setErrLastName] = useState(false)
    const [errAddress, setErrAddress] = useState(false)
    const [errCity, setErrCity] = useState(false)
    const [errState, setErrState] = useState(false)
    const [errZip, setErrZip] = useState(false)
    const [errCounty, setErrCounty] = useState(false)
    const [errCountry, setErrCountry] = useState(false)
    const [errPhone, setErrPhone] = useState(false)
    const [errEmail, setErrEmail] = useState(false)

    const [errFirstCompanyName, setErrFirstCompanyName] = useState(false)
    const [errSecondCompanyName, setErrSecondCompanyName] = useState(false)
    const [errCompanyAddress, setErrCompanyAddress] = useState(false)
    const [errCompanyCity, setErrCompanyCity] = useState(false)
    const [errCompanyState, setErrCompanyState] = useState(false)
    const [errCompanyZip, setErrCompanyZip] = useState(false)
    const [errCompanyCounty, setErrCompanyCounty] = useState(false)
    const [errCompanyCountry, setErrCompanyCountry] = useState(false)
    const [errCompanyPhone, setErrCompanyPhone] = useState(false)

    const handleSameInfoBtn = () => {
        setCompanyInfo({
            ...companyInfo,
            company_address: contactInfo.address,
            company_city: contactInfo.city,
            company_state: contactInfo.state,
            company_zip: contactInfo.zip,
            company_county: contactInfo.county,
            company_country: contactInfo.country,
            company_phone: contactInfo.phone,
            company_fax: contactInfo.fax
        })
        if (errAddress)
            setErrCompanyAddress(true)
        if (errCity)
            setErrCompanyCity(true)
        if (errState)
            setErrCompanyState(true)
        if (errZip)
            setErrCompanyZip(true)
        if (errCounty)
            setErrCompanyCounty(true)
        if (errCountry)
            setErrCompanyCountry(true)
        if (errPhone)
            setErrCompanyPhone(true)
    }

    const checkValidation = () => {
        if (contactInfo.first_name === '')
            setErrFirstName(true)
        if (contactInfo.last_name === '')
            setErrLastName(true)
        if (contactInfo.address === '')
            setErrAddress(true)
        if (contactInfo.city === '')
            setErrCity(true)
        if (contactInfo.state === '')
            setErrState(true)
        if (contactInfo.zip === '')
            setErrZip(true)
        if (contactInfo.county === '')
            setErrCounty(true)
        if (contactInfo.country === '')
            setErrCountry(true)
        if (contactInfo.phone === '')
            setErrPhone(true)
        if (contactInfo.email === '')
            setErrEmail(true)
        if (companyInfo.first_company_name === '')
            setErrFirstCompanyName(true)
        if (companyInfo.second_company_name === '')
            setErrSecondCompanyName(true)
        if (companyInfo.company_address === '')
            setErrCompanyAddress(true)
        if (companyInfo.company_city === '')
            setErrCompanyCity(true)
        if (companyInfo.company_state === '')
            setErrCompanyState(true)
        if (companyInfo.company_zip === '')
            setErrCompanyZip(true)
        if (companyInfo.company_county === '')
            setErrCompanyCounty(true)
        if (companyInfo.company_country === '')
            setErrCompanyCountry(true)
        if (companyInfo.company_phone === '')
            setErrCompanyPhone(true)
    }

    const handleSubmit = () => {
        if (contactInfo.first_name === '' || contactInfo.last_name === '' || contactInfo.address === '' || contactInfo.city === '' || contactInfo.state === '' || contactInfo.zip === '' || contactInfo.county === '' || contactInfo.country === '' || contactInfo.phone === '' || contactInfo.email === '' || companyInfo.first_company_name === '' || companyInfo.second_company_name === '' || companyInfo.company_address === '' || companyInfo.company_city === '' || companyInfo.company_state === '' || companyInfo.company_zip === '' || companyInfo.company_county === '' || companyInfo.company_country === '' || companyInfo.company_phone === '') {
            checkValidation()
        } else {
            setStep3({contact_info: contactInfo, company_info: companyInfo})
            navigation.push('Step4')
        }
    }

    return (
        <ScrollView>
            <View style={styles.stepTitleContainer}>
                <Title style={styles.stepTitle}>
                    Step 3
                </Title>
            </View>

            {/* contact information */}
            <View style={{alignItems: 'center', marginVertical: 10}}>
                <Title style={{color: '#17a2b8'}}>Contact Information</Title>
                <TextInput
                    label="First Name *"
                    mode="outlined"
                    style={{width: wp('92%'), marginHorizontal: wp('4%'), marginVertical: 5}}
                    value={contactInfo.first_name}
                    onChangeText={text => {
                        if (text === '') {
                            setErrFirstName(true)
                        } else {
                            setErrFirstName(false)
                        }
                        setContactInfo({...contactInfo, first_name: text})
                    }}
                />
                <HelperText type="error" visible={errFirstName}>You must enter First Name.</HelperText>
                <TextInput
                    label="Last Name *"
                    mode="outlined"
                    style={{width: wp('92%'), marginHorizontal: wp('4%'), marginVertical: 5}}
                    value={contactInfo.last_name}
                    onChangeText={text => {
                        if (text === '') {
                            setErrLastName(true)
                        } else {
                            setErrLastName(false)
                        }
                        setContactInfo({...contactInfo, last_name: text})
                    }}
                />
                <HelperText type="error" visible={errLastName}>You must enter Last Name.</HelperText>
                <TextInput
                    label="Address *"
                    mode="outlined"
                    style={{width: wp('92%'), marginHorizontal: wp('4%'), marginVertical: 5}}
                    value={contactInfo.address}
                    onChangeText={text => {
                        if (text === '') {
                            setErrAddress(true)
                        } else {
                            setErrAddress(false)
                        }
                        setContactInfo({...contactInfo, address: text})
                    }}
                />
                <HelperText type="error" visible={errAddress}>You must enter Address.</HelperText>
                <TextInput
                    label="City *"
                    mode="outlined"
                    style={{width: wp('92%'), marginHorizontal: wp('4%'), marginVertical: 5}}
                    value={contactInfo.city}
                    onChangeText={text => {
                        if (text === '') {
                            setErrCity(true)
                        } else {
                            setErrCity(false)
                        }
                        setContactInfo({...contactInfo, city: text})
                    }}
                />
                <HelperText type="error" visible={errCity}>You must enter City.</HelperText>
                <TextInput
                    label="State *"
                    mode="outlined"
                    style={{width: wp('92%'), marginHorizontal: wp('4%'), marginVertical: 5}}
                    value={contactInfo.state}
                    onChangeText={text => {
                        if (text === '') {
                            setErrState(true)
                        } else {
                            setErrState(false)
                        }
                        setContactInfo({...contactInfo, state: text})
                    }}
                />
                <HelperText type="error" visible={errState}>You must enter State.</HelperText>
                <TextInput
                    label="Zip *"
                    mode="outlined"
                    keyboardType="numeric"
                    style={{width: wp('92%'), marginHorizontal: wp('4%'), marginVertical: 5}}
                    value={contactInfo.zip}
                    onChangeText={text => {
                        if (text === '') {
                            setErrZip(true)
                        } else {
                            setErrZip(false)
                        }
                        setContactInfo({...contactInfo, zip: text})
                    }}
                />
                <HelperText type="error" visible={errZip}>You must enter Zip.</HelperText>
                <TextInput
                    label="County *"
                    mode="outlined"
                    style={{width: wp('92%'), marginHorizontal: wp('4%'), marginVertical: 5}}
                    value={contactInfo.county}
                    onChangeText={text => {
                        if (text === '') {
                            setErrCounty(true)
                        } else {
                            setErrCounty(false)
                        }
                        setContactInfo({...contactInfo, county: text})
                    }}
                />
                <HelperText type="error" visible={errCounty}>You must enter County.</HelperText>
                <TextInput
                    label="Country *"
                    mode="outlined"
                    style={{width: wp('92%'), marginHorizontal: wp('4%'), marginVertical: 5}}
                    value={contactInfo.country}
                    onChangeText={text => {
                        if (text === '') {
                            setErrCountry(true)
                        } else {
                            setErrCountry(false)
                        }
                        setContactInfo({...contactInfo, country: text})
                    }}
                />
                <HelperText type="error" visible={errCountry}>You must enter Country.</HelperText>
                <TextInput
                    label="Phone *"
                    mode="outlined"
                    keyboardType="numeric"
                    style={{width: wp('92%'), marginHorizontal: wp('4%'), marginVertical: 5}}
                    value={contactInfo.phone}
                    onChangeText={text => {
                        if (text === '') {
                            setErrPhone(true)
                        } else {
                            setErrPhone(false)
                        }
                        setContactInfo({...contactInfo, phone: text})
                    }}
                />
                <HelperText type="error" visible={errPhone}>You must enter Phone.</HelperText>
                <TextInput
                    label="Fax"
                    mode="outlined"
                    keyboardType="numeric"
                    style={{width: wp('92%'), marginHorizontal: wp('4%'), marginVertical: 5}}
                    value={contactInfo.fax}
                    onChangeText={text => {
                        setContactInfo({...contactInfo, fax: text})
                    }}
                />
                <TextInput
                    label="Email *"
                    mode="outlined"
                    style={{width: wp('92%'), marginHorizontal: wp('4%'), marginVertical: 5}}
                    autoCapitalize="none"
                    value={contactInfo.email}
                    onChangeText={text => {
                        if (text === '' || !text.includes('@')) {
                            setErrEmail(true)
                        } else {
                            setErrEmail(false)
                        }
                        setContactInfo({...contactInfo, email: text})
                    }}
                />
                <HelperText type="error" visible={errEmail}>You must enter valid Email.</HelperText>
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <View style={{flexDirection: 'row', marginVertical: 5, justifyContent: 'center', marginHorizontal: wp('5%')}}>
                        <Checkbox status={contactInfo.email_primary_communication ? 'checked' : 'unchecked'} color="#f70" onPress={() => setContactInfo({
                            ...contactInfo,
                            email_primary_communication: !contactInfo.email_primary_communication
                            })} style={{flex: 1}} />
                        <Caption style={{fontSize: wp('4%'), flex: 5, textAlign: 'center'}}>Use email as primary means of communication.</Caption>
                    </View>
                </View>
            </View>

            {/* company information */}
            <View style={{alignItems: 'center', marginVertical: 10, marginHorizontal: wp('4%')}}>
                <Title style={{color: '#17a2b8'}}>Company Information</Title>
                <View style={{alignItems: 'center'}}>
                    <Title>Name of Company</Title>
                    <TextInput
                        label="First Choice *"
                        mode="outlined"
                        style={{width: wp('92%'), marginHorizontal: wp('4%'), marginVertical: 5}}
                        value={companyInfo.first_company_name}
                        onChangeText={text => {
                            if (text === '') {
                                setErrFirstCompanyName(true)
                            } else {
                                setErrFirstCompanyName(false)
                            }
                            setCompanyInfo({...companyInfo, first_company_name: text})
                        }}
                    />
                    <HelperText type="error" visible={errFirstCompanyName}>You must enter First Choice.</HelperText>
                    <TextInput
                        label="Second Choice *"
                        mode="outlined"
                        style={{width: wp('92%'), marginHorizontal: wp('4%'), marginVertical: 5}}
                        value={companyInfo.second_company_name}
                        onChangeText={text => {
                            if (text === '') {
                                setErrSecondCompanyName(true)
                            } else {
                                setErrSecondCompanyName(false)
                            }
                            setCompanyInfo({...companyInfo, second_company_name: text})
                        }}
                    />
                    <HelperText type="error" visible={errSecondCompanyName}>You must enter Second Choice.</HelperText>
                </View>
                <View style={{alignItems: 'center'}}>
                    <Title>Business Purpose</Title>
                    <TextInput
                        label="Description"
                        mode="outlined"
                        multiline={true}
                        style={{width: wp('92%'), marginHorizontal: wp('4%'), marginVertical: 5}}
                        value={companyInfo.description}
                        onChangeText={text => setCompanyInfo({
                            ...companyInfo,
                            description: text
                        })}
                    />
                </View>
                <View style={{alignItems: 'center'}}>
                    <Title>Company Address</Title>
                    <View style={{flexDirection: 'row', marginVertical: 5, justifyContent: 'center', width: wp('90%')}}>
                        <Button mode="contained" onPress={handleSameInfoBtn} color="#f70" labelStyle={{color: '#fff'}}>same as personal address above</Button>
                    </View>
                    <TextInput
                        label="Address *"
                        mode="outlined"
                        style={{width: wp('92%'), marginHorizontal: wp('4%'), marginVertical: 5}}
                        value={companyInfo.company_address}
                        onChangeText={text => {
                            if (text === '') {
                                setErrCompanyAddress(true)
                            } else {
                                setErrCompanyAddress(false)
                            }
                            setCompanyInfo({...companyInfo, company_address: text})
                        }}
                    />
                    <HelperText type="error" visible={errCompanyAddress}>You must enter Address.</HelperText>
                    <TextInput
                        label="City *"
                        mode="outlined"
                        style={{width: wp('92%'), marginHorizontal: wp('4%'), marginVertical: 5}}
                        value={companyInfo.company_city}
                        onChangeText={text => {
                            if (text === '') {
                                setErrCompanyCity(true)
                            } else {
                                setErrCompanyCity(false)
                            }
                            setCompanyInfo({...companyInfo, company_city: text})
                        }}
                    />
                    <HelperText type="error" visible={errCompanyCity}>You must enter City.</HelperText>
                    <TextInput
                        label="State *"
                        mode="outlined"
                        style={{width: wp('92%'), marginHorizontal: wp('4%'), marginVertical: 5}}
                        value={companyInfo.company_state}
                        onChangeText={text => {
                            if (text === '') {
                                setErrCompanyState(true)
                            } else {
                                setErrCompanyState(false)
                            }
                            setCompanyInfo({...companyInfo, company_state: text})
                        }}
                    />
                    <HelperText type="error" visible={errCompanyState}>You must enter State.</HelperText>
                    <TextInput
                        label="Zip *"
                        mode="outlined"
                        keyboardType="numeric"
                        style={{width: wp('92%'), marginHorizontal: wp('4%'), marginVertical: 5}}
                        value={companyInfo.company_zip}
                        onChangeText={text => {
                            if (text === '') {
                                setErrCompanyZip(true)
                            } else {
                                setErrCompanyZip(false)
                            }
                            setCompanyInfo({...companyInfo, company_zip: text})
                        }}
                    />
                    <HelperText type="error" visible={errCompanyZip}>You must enter Zip.</HelperText>
                    <TextInput
                        label="County *"
                        mode="outlined"
                        style={{width: wp('92%'), marginHorizontal: wp('4%'), marginVertical: 5}}
                        value={companyInfo.company_county}
                        onChangeText={text => {
                            if (text === '') {
                                setErrCompanyCounty(true)
                            } else {
                                setErrCompanyCounty(false)
                            }
                            setCompanyInfo({...companyInfo, company_county: text})
                        }}
                    />
                    <HelperText type="error" visible={errCompanyCounty}>You must enter County.</HelperText>
                    <TextInput
                        label="Country *"
                        mode="outlined"
                        style={{width: wp('92%'), marginHorizontal: wp('4%'), marginVertical: 5}}
                        value={companyInfo.company_country}
                        onChangeText={text => {
                            if (text === '') {
                                setErrCompanyCountry(true)
                            } else {
                                setErrCompanyCountry(false)
                            }
                            setCompanyInfo({...companyInfo, company_country: text})
                        }}
                    />
                    <HelperText type="error" visible={errCompanyCountry}>You must enter Country.</HelperText>
                    <TextInput
                        label="Phone *"
                        mode="outlined"
                        keyboardType="numeric"
                        style={{width: wp('92%'), marginHorizontal: wp('4%'), marginVertical: 5}}
                        value={companyInfo.company_phone}
                        onChangeText={text => {
                            if (text === '') {
                                setErrCompanyPhone(true)
                            } else {
                                setErrCompanyPhone(false)
                            }
                            setCompanyInfo({...companyInfo, company_phone: text})
                        }}
                    />
                    <HelperText type="error" visible={errCompanyPhone}>You must enter Phone.</HelperText>
                    <TextInput
                        label="Fax"
                        mode="outlined"
                        keyboardType="numeric"
                        style={{width: wp('92%'), marginHorizontal: wp('4%'), marginVertical: 5}}
                        value={companyInfo.company_fax}
                        onChangeText={text => setCompanyInfo({
                            ...companyInfo,
                            company_fax: text
                        })}
                    />
                </View>
                <View style={{alignItems: 'center'}}>
                    <Title>Registered Agent</Title>
                    <View style={{flexDirection: 'row', marginVertical: 5, marginHorizontal: wp('5%'), justifyContent: 'center'}}>
                        <Checkbox status={companyInfo.registered_agent ? 'unchecked' : 'checked'} color="#f70" onPress={() => setCompanyInfo({
                            ...companyInfo,
                            registered_agent: false
                        })} style={{flex: 1}} />
                        <Caption style={{fontSize: wp('4%'), flex: 5, textAlign: 'center'}}>I choose to use my own name as a Registered Agent.</Caption>
                    </View>
                    <View style={{flexDirection: 'row', marginVertical: 5, marginHorizontal: wp('5%'), justifyContent: 'center'}}>
                        <Checkbox status={companyInfo.registered_agent ? 'checked' : 'unchecked'} color="#f70" onPress={() => setCompanyInfo({
                            ...companyInfo,
                            registered_agent: true
                        })} style={{flex: 1}} />
                        <Caption style={{fontSize: wp('4%'), flex: 5, textAlign: 'center'}}>I designate USBizFilings&reg; service as a Registered Agent on behalf of the company fa a fee of $85 per year.</Caption>
                    </View>
                </View>
            </View>

            {/* button container */}
            <View style={styles.buttonContainer}>
                <Button icon="arrow-left" style={styles.prevButton} mode="contained" onPress={() => navigation.push('Step2')}>Step 2</Button>
                <Title style={{color: '#888', fontSize: wp('4%')}}>STEP 3</Title>
                <Button icon="arrow-right" style={styles.nextButton} mode="contained" onPress={handleSubmit}>Step 4</Button>
            </View>
        </ScrollView>
    );
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

export default Step3Screen;