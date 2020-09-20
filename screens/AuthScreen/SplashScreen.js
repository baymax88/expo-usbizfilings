import React, { useContext } from 'react';
import { StyleSheet, View, Text, StatusBar, ScrollView } from 'react-native'
import { Title, Button } from 'react-native-paper'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import * as Animatable from 'react-native-animatable'
import { AppContext } from '../../contexts/AppContext'

const SplashScreen = ({ navigation }) => {
    const { setCustomer, setLoginStatus, authData } = useContext(AppContext);

    const handleGuestStart = () => {
        setCustomer({first_name: 'Guest', last_name: '', email: 'Guest'});
        setLoginStatus(true);
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <StatusBar barStyle="light-content" backgroundColor="#00438b" />
                <View style={styles.header}>
                    <Animatable.View animation="bounceIn" duraton="1500"><Title style={styles.logo}>USBizFilings&reg;</Title></Animatable.View>
                </View>
                <Animatable.View style={styles.footer} animation="fadeInUpBig">
                    <View>
                        <Text style={styles.title}>Form your LLC, Incorporation, or Not-for-Profit in Minutes!</Text>
                        <Text style={styles.text}>Sign in with account</Text>
                    </View>
                    <View style={styles.button}>
                        <Button icon="arrow-right" mode="flex" uppercase={false} style={styles.start} onPress={() => navigation.navigate('Signin')}>Get Started</Button>
                        <Button icon="arrow-right" mode="flex" uppercase={false} style={styles.startGuest} onPress={handleGuestStart}>Get Started As a Gutest</Button>
                        <View style={{marginVertical: wp('2%'), justifyContent: 'center', alignItems: 'center', alignSelf: 'center'}}>
                            <Text style={{fontSize: 10, color: 'grey'}}>Copyrights &copy; 2020. All rights reserved by USBizFilings&reg;</Text>
                        </View>
                    </View>
                </Animatable.View>
            </View>
        </ScrollView>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#00438b',
      height: hp('100%')
    },
    header: {
        flex: 1.5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: wp('8%'),
        paddingHorizontal: wp('6%'),
        justifyContent: 'space-between'
    },
    logo: {
        fontSize: 30,
        color: '#fff',
        fontWeight: 'bold'
    },
    title: {
        color: '#05375a',
        fontSize: 20,
        fontWeight: 'bold',
        lineHeight: 30
    },
    text: {
        color: 'grey',
        marginTop:5
    },
    button: {
        alignItems: 'flex-end',
        marginTop: wp('3%')
    },
    start: {
        marginTop: wp('1%'),
        color: '#05375a'
    },
    startGuest: {
        marginTop: wp('1%'),
    }
});