import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Icon from '@expo/vector-icons/Ionicons'
import { ScrollView, StyleSheet } from 'react-native'
import { Title } from 'react-native-paper'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'

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
    return (
        <ScrollView style={{paddingHorizontal: wp('5%'), marginVertical: 10}}>
            <Title style={styles.title}>Your transaction is canceled.</Title>
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