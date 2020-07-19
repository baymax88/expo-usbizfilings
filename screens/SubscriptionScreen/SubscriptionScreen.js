import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import Icon from '@expo/vector-icons/Ionicons'

const SubscriptionStack = createStackNavigator()

const SubscriptionScreen = ({ navigation }) => {
  return (
    <SubscriptionStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#00438b',
      },
      headerTintColor: '#fff'
    }}>
      <SubscriptionStack.Screen name="Subscription" component={Screen} options={{
        title: 'Subscription',
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25} backgroundColor="#00438b" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
      }} />
    </SubscriptionStack.Navigator>
  )
}

const Screen = () => (
  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <Text>This is Subscription Screen</Text>
  </View>
)

export default SubscriptionScreen