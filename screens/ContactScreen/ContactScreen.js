import React, { useState } from 'react'
import { View, Text, ScrollView, StyleSheet, ImageBackground, StatusBar, ActivityIndicator, Alert, Image } from 'react-native'
import { Asset } from 'expo-asset'
import { createStackNavigator } from '@react-navigation/stack'
import Icon from '@expo/vector-icons/Ionicons'
import { Title, TextInput, Caption, Button, HelperText } from 'react-native-paper'
import { AppLoading } from 'expo'
import { useFonts, Comfortaa_700Bold } from '@expo-google-fonts/comfortaa';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const ContactStack = createStackNavigator()

const cacheImages = images => {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image)
    } else {
      return Asset.fromModule(image).downloadAsync()
    }
  })
}

const ContactScreen = ({ navigation }) => {
  const [isReady, setIsReady] = useState(false)
  let [fontsLoaded] = useFonts({
    Comfortaa_700Bold
  });

  const _loadAssetsAsync = async () => {
    const imageAssets = cacheImages([
      require('../../assets/images/bg/contact.jpg')
    ])

    await Promise.all([...imageAssets])
  }

  if (!fontsLoaded || !isReady) {
    return (
      <AppLoading
        startAsync={_loadAssetsAsync}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    )
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

const Screen = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [errText, setErrText] = useState('');
  const [showErr, setShowErr] = useState(false);
  const [isReady, setIsReady] = useState(true);

  const onSubmit = async () => {
    if (name === '' || message === '' || email === '') {
      setErrText('Enter all information correctly.');
      setShowErr(true)
    } else {
      await setIsReady(false);
      await fetch('https://usbizfilings.com/mobile/v1/contact', {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, message, email })
      }).then(res => res.json()).then(json => {
        if (json.status) {
          setIsReady(true);
          Alert.alert(
            "Success!",
            "Email is sent!",
          );
        } else {
          setIsReady(true);
          setErrText(json.status_message);
          setShowErr(true);
        }
      });
    }
  }

  return (
    <>
    {isReady ? (
      <ScrollView>
        <StatusBar barStyle="light-content" translucent backgroundColor="transparent"  />

        <ImageBackground source={require('../../assets/images/bg/contact.jpg')} style={styles.imageBg}>
          <View style={styles.titleContainer}>
            <Title style={styles.mainFont}>Need More Help, or Have a Specific Question?</Title>
          </View>
        </ImageBackground>

        <TextInput
          label="Enter Name"
          mode="outlined"
          style={styles.inputField}
          value={name}
          onChangeText={text => {
            setName(text)
            setShowErr(false)
          }}
        />
        <TextInput
          label="Enter Email"
          mode="outlined"
          autoCapitalize="none"
          style={styles.inputField}
          value={email}
          onChangeText={text => {
            setEmail(text)
            setShowErr(false)
          }}
        />
        <TextInput
          label="Messge"
          mode="outlined"
          multiline={true}
          numberOfLines={5}
          style={styles.inputField}
          value={message}
          onChangeText={text => {
            setMessage(text)
            setShowErr(false)
          }}
        />

        <HelperText type="error" visible={showErr} style={{marginTop: wp('1%')}}>
            {errText}
        </HelperText>

        <Button
          mode="contained"
          style={{marginTop: 10, marginHorizontal: wp('4%')}}
          onPress={onSubmit}
        >
          Send Message
        </Button>

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
      </ScrollView>) : (
      <ActivityIndicator color="#00438b" size="large" style={{flex: 1, alignItems: 'center', justifyContent: 'center'}} />
    )}
    </>
  );
}

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