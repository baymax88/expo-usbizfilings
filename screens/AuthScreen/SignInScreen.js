import React, { useState, useContext } from 'react';
import { StyleSheet, View, Text, StatusBar, ScrollView } from 'react-native'
import { Title, Button, TextInput } from 'react-native-paper'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import * as Animatable from 'react-native-animatable'
import Icon from '@expo/vector-icons/MaterialCommunityIcons'

const SignInScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [hidePassword, setHidePassword] = useState(true);

    const onSubmit = () => {
        console.log("email", email, "password", password)
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <StatusBar barStyle="light-content" />
                <View style={styles.header}>
                    <Text style={styles.text_header}>Welcome!</Text>
                </View>
                <Animatable.View style={styles.footer}>
                    <Animatable.View animation="bounceIn">
                        <View style={styles.inputContainer}>
                            <Icon name="email-outline" size={wp('6%')} color="#00438b" style={styles.inputIcon} />
                            <TextInput
                                label="Email"
                                style={styles.input}
                                value={email}
                                autoCapitalize="none"
                                onChangeText={text => setEmail(text)}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <Icon name="shield-key-outline" size={wp('6%')} color="#00438b" style={styles.inputIcon} />
                            <TextInput
                                label="Password"
                                style={styles.input}
                                secureTextEntry={hidePassword}
                                value={password}
                                autoCapitalize="none"
                                onChangeText={text => setPassword(text)}
                            />
                            <Icon name={hidePassword ? 'eye-outline' : 'eye-off-outline'} size={wp('6%')} color="#00438b" style={{backgroundColor: '#fff', paddingTop: wp('3%')}} onPress={() => setHidePassword(!hidePassword)} />
                        </View>
                    </Animatable.View>
                    <View style={styles.button}>
                        <Button mode="contained" uppercase={false} style={styles.signIn} onPress={onSubmit}>Sign In</Button>
                        <Button mode="outlined" uppercase={false} style={[styles.signIn, {borderColor: '#00438b', borderWidth: 2}]} onPress={() => {navigation.push('Signup')}}>Sign Up</Button>
                        <View style={{marginVertical: wp('2%'), justifyContent: 'center', alignItems: 'center', alignSelf: 'center'}}>
                            <Text style={{fontSize: 10, color: 'grey'}}>Copyrights &copy; 2020. All rights reserved by USBizFilings&reg;</Text>
                        </View>
                    </View>
                </Animatable.View>
            </View>
        </ScrollView>
    )
}

export default SignInScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#00438b',
      height: hp('100%')
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: wp('5%'),
        paddingBottom: wp('10%')
    },
    footer: {
        flex: 2,
        backgroundColor: '#fff',
        borderTopLeftRadius: wp('6%'),
        borderTopRightRadius: wp('6%'),
        paddingHorizontal: wp('5%'),
        paddingTop: wp('7%'),
        paddingBottom: wp('10%'),
        justifyContent: 'center'
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
        flex: 11,
        marginLeft: wp('4%'),
        backgroundColor: '#fff',
        padding: 0
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 30
    },
    signIn: {
        marginVertical: wp('2%'),
        width: wp('40%')
    },
});