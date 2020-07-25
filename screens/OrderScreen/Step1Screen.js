import React, { useState, useContext, useEffect } from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import Icon from '@expo/vector-icons/Ionicons'
import { useFonts, Comfortaa_700Bold } from '@expo-google-fonts/comfortaa';
import { AppLoading } from 'expo'
import SelectPicker from 'react-native-form-select-picker'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Title, Button, HelperText } from 'react-native-paper'

import { STATES } from '../../config/consts'
import { AppContext } from '../../contexts/AppContext'

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
      <Step1Stack.Screen name="Step1" component={Screen} options={{
        title: 'Order Process',
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25} backgroundColor="#00438b" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
      }}>
      </Step1Stack.Screen>
    </Step1Stack.Navigator>
  )
}

const Screen = ({ navigation }) => {
  const { setStep1 } = useContext(AppContext)
  const [state, setState] = useState(null)
  const [entity, setEntity] = useState(null)
  const [valid, setValid] = useState(true)
  const [stateFee, setStateFee] = useState(0)

  useEffect(() => {
    if (state !== null && entity !== null) {
      setStateFee(STATES.filter(item => item.no === state)[0][entity])
    }
  }, [state, entity])

  const handleSubmit = () => {
    if (state === null || entity === null) {
      setValid(false)
    } else {
      setStep1({ state_number: state, entity_type: entity, state_fee: stateFee })
      navigation.navigate('Step2')
    }
  }

  return (
    <ScrollView style={{paddingHorizontal: wp('4%')}}>
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
        onValueChange={(value) => {
          setState(value)
          setValid(true)
        }}
      >
        {STATES.map(item => (
          <SelectPicker.Item label={item.state} value={item.no} key={item.no} />
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
        onValueChange={(value) => {
          setEntity(value)
          setValid(true)
        }}
      >
        <SelectPicker.Item label="INC" value="inc" />
        <SelectPicker.Item label="LLC" value="llc" />
        <SelectPicker.Item label="Not-for-Profit" value="non_profit" />
      </SelectPicker>

      {/* valid checking message */}
      <HelperText type="error" visible={!valid} style={{marginTop: 20}}>
        You must select a state and an entity.
      </HelperText>

      {/* part for submitting first step */}
      <View style={styles.buttonContainer}>
        <Button icon="arrow-right" style={styles.nextButton} mode="contained" onPress={handleSubmit}>Step 2</Button>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  selectBox: {
    marginTop: 20,
    borderColor: '#00438b',
    borderWidth: 1,
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