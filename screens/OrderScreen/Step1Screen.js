import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import Icon from '@expo/vector-icons/Ionicons'
import { useFonts, Comfortaa_700Bold } from '@expo-google-fonts/comfortaa';
import { AppLoading } from 'expo'

const Step1Stack = createStackNavigator()

const Step1Screen = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    Comfortaa_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <Step1Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#00438b',
      },
      headerTintColor: '#fff'
    }}>
      <Step1Stack.Screen name="Contact" component={Screen} options={{
        title: 'Order Process',
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25} backgroundColor="#00438b" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
      }}>
      </Step1Stack.Screen>
    </Step1Stack.Navigator>
  )
}

const Screen = () => (
  <View>
    <Text>123</Text>
  </View>
)

export default Step1Screen