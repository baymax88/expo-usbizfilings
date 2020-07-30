import React, { useState } from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import Icon from '@expo/vector-icons/Ionicons'
import { useFonts, Comfortaa_700Bold } from '@expo-google-fonts/comfortaa';
import { AppLoading } from 'expo'
import SelectPicker from 'react-native-form-select-picker'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Title, Button } from 'react-native-paper'

import { States } from '../../assets/Consts'

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

const Screen = () => {
  const [state, setState] = useState(null)
  const [entity, setEntity] = useState(null)

  return (
    <ScrollView style={{marginHorizontal: wp('4%')}}>
      <View style={styles.stepTitleContainer}>
        <Title style={styles.stepTitle}>
          Step 1
        </Title>
      </View>

      {/* part for selection state */}
      <Title style={styles.title}>
        Please select the State where your business will be registered
      </Title>
      <SelectPicker
        style={styles.selectBox}
        doneButtonText="Done"
        onSelectedStyle={styles.placeholder}
        selected={state}
        onValueChange={(value) => setState(value)}
      >
        {States.map((item, i) => (
          <SelectPicker.Item label={item} value={item} key={item} />
        ))}
      </SelectPicker>
      
      {/* part for selection entity type */}
      <Title style={styles.title}>
        Please select the Entity Type here.
      </Title>
      <SelectPicker
        style={styles.selectBox}
        doneButtonText="Done"
        onSelectedStyle={styles.placeholder}
        selected={entity}
        onValueChange={(value) => setEntity(value)}
      >
        <SelectPicker.Item label="INC" value="INC" />
        <SelectPicker.Item label="LLC" value="LLC" />
        <SelectPicker.Item label="Not-for-Profit" value="Not-for-Profit" />
      </SelectPicker>

      {/* part for submitting first step */}
      <View style={styles.buttonContainer}>
        <Button icon="arrow-right" style={styles.nextButton} mode="contained">Next Step</Button>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  selectBox: {
    marginTop: 20,
    borderColor: '#bbb',
    borderWidth: 2,
    borderRadius: 5,
  },
  placeholder: {
    fontFamily: 'Comfortaa_700Bold',
    fontSize: 16,
  },
  stepTitleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  stepTitle: {
    color: '#00438b'
  },
  title: {
    marginTop: 40,
    color: '#00438b',
    fontSize: wp('5%')
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60
  },
  nextButton: {
    alignSelf: 'flex-end'
  }
})

export default Step1Screen