import React, { useState, useEffect, useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts, Comfortaa_700Bold } from '@expo-google-fonts/comfortaa';
import { AppLoading } from 'expo';
import { ScrollView, View, StyleSheet } from 'react-native'
import Icon from '@expo/vector-icons/Ionicons'
import { Title, Button, Checkbox } from 'react-native-paper'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

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

    const handleSubmit = () => {
    }

    return (
        <ScrollView>
            <View style={styles.stepTitleContainer}>
                <Title style={styles.stepTitle}>
                    Step 3
                </Title>
            </View>

            {/* button container */}
            <View style={styles.buttonContainer}>
                <Button icon="arrow-left" style={styles.prevButton} mode="contained" onPress={() => navigation.goBack()}>Step 2</Button>
                <Title style={{color: '#888', fontSize: wp('4%')}}>STEP 3</Title>
                <Button icon="arrow-right" style={styles.nextButton} mode="contained" onPress={handleSubmit}>Step 4</Button>
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
 
export default Step3Screen;