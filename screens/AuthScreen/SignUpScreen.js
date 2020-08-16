import React, { useState, useContext } from 'react';
import { StyleSheet, View, Text, StatusBar, ScrollView } from 'react-native'
import { Title, Button, TextInput } from 'react-native-paper'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import * as Animatable from 'react-native-animatable'
import Icon from '@expo/vector-icons/MaterialCommunityIcons'

const SignUpScreen = ({ navigation }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [hidePassword, setHidePassword] = useState(true);

    return (
        <ScrollView nestedScrollEnabled={true}>
            <View style={styles.container}>
                <StatusBar barStyle="light-content" />
                <View style={styles.header}>
                    <Text style={styles.text_header}>Register Now!</Text>
                </View>
                <ScrollView nestedScrollEnabled={true}>
                    <View style={styles.footer}>
                        <Animatable.View animation="bounceIn">
                            <View style={styles.inputContainer}>
                                <Icon name="account-outline" size={wp('6%')} color="#00438b" style={styles.inputIcon} />
                                <TextInput
                                    label="First Name"
                                    style={styles.input}
                                    autoCapitalize="none"
                                    onChangeText={text => setFirstName(text)}
                                    value={firstName}
                                />
                            </View>
                            <View style={styles.inputContainer}>
                                <Icon name="account-outline" size={wp('6%')} color="#00438b" style={styles.inputIcon} />
                                <TextInput
                                    label="Last Name"
                                    style={styles.input}
                                    autoCapitalize="none"
                                    onChangeText={text => setLastName(text)}
                                    value={lastName}
                                />
                            </View>
                            <View style={styles.inputContainer}>
                                <Icon name="email-outline" size={wp('6%')} color="#00438b" style={styles.inputIcon} />
                                <TextInput
                                    label="Email"
                                    style={styles.input}
                                    autoCapitalize="none"
                                    onChangeText={text => setEmail(text)}
                                    value={email}
                                />
                            </View>
                            <View style={styles.inputContainer}>
                                <Icon name="shield-key-outline" size={wp('6%')} color="#00438b" style={styles.inputIcon} />
                                <TextInput
                                    label="Password"
                                    style={styles.input}
                                    secureTextEntry={hidePassword}
                                    autoCapitalize="none"
                                    onChangeText={text => setPassword(text)}
                                    value={password}
                                />
                                <Icon name={hidePassword ? 'eye-outline' : 'eye-off-outline'} size={wp('6%')} color="#00438b" style={{backgroundColor: '#fff', paddingTop: wp('3%')}} onPress={() => setHidePassword(!hidePassword)} />
                            </View>
                        </Animatable.View>
                        <View style={styles.button}>
                            <Button mode="contained" uppercase={false} style={styles.signIn} onPress={() => navigation.push('Signin')}>Sign In</Button>
                            <Button mode="outlined" uppercase={false} style={[styles.signIn, {borderColor: '#00438b', borderWidth: 2}]} onPress={() => {}}>Sign Up</Button>
                            <View style={{marginVertical: wp('2%'), justifyContent: 'center', alignItems: 'center', alignSelf: 'center'}}>
                                <Text style={{fontSize: 10, color: 'grey'}}>Copyrights &copy; 2020. All rights reserved by USBizFilings&reg;</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </ScrollView>
    )
}

export default SignUpScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#00438b',
      height: hp('100%')
    },
    header: {
        height: hp('20%'),
        justifyContent: 'flex-end',
        paddingHorizontal: wp('5%'),
        paddingBottom: wp('10%')
    },
    footer: {
        height: hp('80%'),
        backgroundColor: '#fff',
        borderTopLeftRadius: wp('6%'),
        borderTopRightRadius: wp('6%'),
        paddingHorizontal: wp('5%'),
        paddingTop: wp('7%'),
        paddingBottom: wp('10%'),
        justifyContent: 'space-around'
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    inputIcon: {
        flex: 1,
        paddingTop: wp('3%'),
        alignSelf: 'center'
    },
    input: {
        flex: 12,
        marginLeft: wp('4%'),
        backgroundColor: '#fff',
        padding: 0
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 30,
    },
    signIn: {
        marginVertical: wp('2%'),
        width: wp('40%')
    },
});