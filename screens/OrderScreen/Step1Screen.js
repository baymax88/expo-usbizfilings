import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import Icon from '@expo/vector-icons/Ionicons'

const Step1Screen = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>This is Order Screen</Text>
    </View>
  )
}

export default Step1Screen