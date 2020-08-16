import React from 'react'
import { View, Text, ScrollView, StyleSheet, ImageBackground, StatusBar } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import Icon from '@expo/vector-icons/Ionicons'
import { Title, TextInput, Caption, Button } from 'react-native-paper'
import { AppLoading } from 'expo'
import { useFonts, Comfortaa_700Bold } from '@expo-google-fonts/comfortaa';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const ContactStack = createStackNavigator()

const ContactScreen = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    Comfortaa_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ContactStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#00438b',
      },
      headerTintColor: '#fff'
    }}>
      <ContactStack.Screen name="Contact" component={Screen} options={{
        title: 'Contact',
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25} backgroundColor="#00438b" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
      }}>
      </ContactStack.Screen>
    </ContactStack.Navigator>
  )
}

const Screen = () => (
  <ScrollView>
    <StatusBar barStyle="light-content" translucent backgroundColor="transparent"  />

    <ImageBackground source={require('../../assets/images/bg/contact.jpg')} style={styles.imageBg}>
      <View style={styles.titleContainer}>
        <Title style={styles.mainFont}>Need More Help, or Have a Specific Question?</Title>
      </View>
    </ImageBackground>

    <TextInput label="Enter Name" mode="outlined" style={styles.inputField} />
    <TextInput label="Enter Email" mode="outlined" autoCapitalize="none" style={styles.inputField} />
    <TextInput label="Messge" mode="outlined" multiline={true} numberOfLines={5} style={styles.inputField} />
    <Button mode="contained" style={{marginTop: 10, marginHorizontal: wp('4%')}}>Send Message</Button>

    <View style={{borderBottomWidth: 1, borderBottomColor: '#aaa', marginHorizontal: wp('2%'), marginVertical: 20}} />
    <View style={styles.titleContainer}>
      <Title style={styles.blackTitle}>
        Looking for More Business or Nonprofit Consultation?
      </Title>
      <Caption style={styles.caption}>
        Don't hesitate. Contact us today and take advantage of our FREE initial consultation to answer specific questions that you may have about your business filing or nonprofit needs.
        Our team is always available and will contact you back within 24 - 48 hours.
      </Caption>
    </View>

    <View style={{borderBottomWidth: 1, borderBottomColor: '#aaa', marginHorizontal: wp('2%'), marginVertical: 20}} />
    <Title style={styles.blackTitleSm}>
      Our Headquarters
    </Title>
    <View style={{marginHorizontal: wp('4%'), marginVertical: wp('4%')}}>
      <Caption style={styles.caption}>1001 Woodward Ave.</Caption>
      <Caption style={styles.caption}>Detroit, Michigan 48226</Caption>
      <Caption style={styles.caption}>USA</Caption>
      <Caption style={styles.caption}>Note: We do not provide a walk-in service</Caption>
    </View>

    <View style={{borderBottomWidth: 1, borderBottomColor: '#aaa', marginHorizontal: wp('2%')}} />
    <View style={{marginTop: 20, marginBottom: 20, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 12}}>Copyrights &copy; 2020. All rights reserved by USBizFilings&reg;</Text>
    </View>
  </ScrollView>
)

const styles = StyleSheet.create({
  mainFont: {
    fontFamily: 'Comfortaa_700Bold',
    textAlign: 'center',
    color: '#fff',
  },
  blackTitle: {
    fontFamily: 'Comfortaa_700Bold',
    textAlign: 'center',
    color: '#000',
  },
  blackTitleSm: {
    fontFamily: 'Comfortaa_700Bold',
    textAlign: 'center',
    color: '#000',
    fontSize: 20,
  },
  caption: {
    marginHorizontal: wp('4%'),
    fontSize: 16,
    lineHeight: 24
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20
  },
  inputField: {
    marginLeft: wp('4%'),
    marginRight: wp('4%'),
    marginTop: 10,
  },
  imageBg: {
    flex: 1,
    resizeMode: 'cover',
    height: 150,
  },
})

export default ContactScreen