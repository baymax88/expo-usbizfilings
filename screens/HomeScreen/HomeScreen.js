import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, ImageBackground, StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { AppLoading } from 'expo';
import { useFonts, Comfortaa_700Bold } from '@expo-google-fonts/comfortaa';
import { Icon as AntIcon, Button as AntButton } from '@ant-design/react-native';

const HomeStack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    Comfortaa_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <HomeStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#00438b',
      },
      headerTintColor: '#fff'
    }}>
      <HomeStack.Screen name="Home" component={Screen} options={{
        title: 'Introduction',
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25} backgroundColor="#00438b" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
      }}>
      </HomeStack.Screen>
    </HomeStack.Navigator>
  );
}

const Screen = () => (
  <ScrollView>
    <StatusBar barStyle="light-content" translucent backgroundColor="transparent"  />

    <ImageBackground source={require('../../assets/images/bg/bg-2-2.jpg')} style={styles.imageBg}>
      <View style={styles.bg}>
        <Text style={styles.title}>
          Welcome to USBizFilings&reg;, a leading Business Filing and Registration Service
        </Text>
        <AntButton style={{marginTop: 12, backgroundColor: '#f70', borderColor: '#f70', alignItems: 'center', height: 30}} type="warning">
          <Text style={{fontFamily: 'Comfortaa_700Bold', fontSize: 12}}>Order Now</Text>
        </AntButton>
      </View>
    </ImageBackground>

    <View style={{marginTop: 10, marginBottom: 10}}>
      <View style={{paddingLeft: wp('5%'), paddingRight: wp('5%')}}>

        <Text textBreakStrategy={'simple'} style={{fontSize: 12, lineHeight: 20, textAlign: 'left', color: '#707070', fontWeight: '500', }}>
          &nbsp;USBizFillings&reg; professionally forms corporations, LLCs, and Not-for-Profits faster than anyone else. Our company offers a free Guide to Incorporating Your Business, illustrating the options available to new business owners as they decide the appropriate structure for their business; the advantages and disadvantages of forming a corporation or an LLC; the formation process; and the requirements imposed on business owners after forming a corporation or an LLC.
        </Text>

        <Text textBreakStrategy={'simple'} style={{marginTop: 10, fontSize: 12, lineHeight: 20, textAlign: 'left', color: '#707070', fontWeight: '500', }}>
          &nbsp;Our company has grown rapidly in the past few years, helping many domestic business owners with their corporation, limited liability company, and nonprofit formatin needs.
          The company is headquartered in Detroit, Michigan.
        </Text>

        <View style={{marginTop: 20, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-around'}}>

          <View style={{alignItems: 'center'}}>
            <AntIcon name="like" style={{color: '#b17cc6'}}></AntIcon>
            <Text style={{fontSize: 16, color: '#b17cc6'}}>6150 Global Clients</Text>
          </View>

          <View style={{alignItems: 'center'}}>
            <AntIcon name="fire" style={{color: '#f70'}}></AntIcon>
            <Text style={{fontSize: 16, color: '#f70'}}>2150 Active Users</Text>
          </View>

        </View>

      </View>
    </View>

    <ImageBackground source={require('../../assets/images/bg/bg-4-2.jpg')} style={styles.imageBg}>
        <View style={styles.bg}>
          <Text style={styles.title}>
            Increase Your Business Presence and Credibility
          </Text>
          <AntButton style={{marginTop: 12, backgroundColor: '#f70', borderColor: '#f70', alignItems: 'center', height: 30}} type="warning">
            <Text style={{fontFamily: 'Comfortaa_700Bold', fontSize: 12}}>Start Now</Text>
          </AntButton>
        </View>
      </ImageBackground>

    <View style={{marginTop: 10, marginBottom: 10, paddingLeft: wp('5%'), paddingRight: wp('5%')}}>
      <Text style={{textAlign: 'center', fontSize: 20, fontFamily: 'Comfortaa_700Bold', marginTop: 10, marginBottom: 10}}>We Provide Best Services For You</Text>
      <Text style={{textAlign: 'center', fontSize: 12, color: '#707070'}}>You may check a variety of services that we may help you with in order to meet your business needs</Text>

      <View style={{marginTop: 20, marginBottom: 20, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-around'}}>
        <View style={{alignItems: 'center', width: wp('50%')}}>
          <AntIcon name="edit" style={{color: '#00438b'}}></AntIcon>
          <Text style={{fontFamily: 'Comfortaa_700Bold', fontSize: 12}}>New Business Filings</Text>
        </View>

        <View style={{alignItems: 'center', width: wp('50%')}}>
          <AntIcon name="rise" style={{color: '#00438b'}}></AntIcon>
          <Text style={{fontFamily: 'Comfortaa_700Bold', fontSize: 12}}>Nonprofit Startup</Text>
        </View>
      </View>

      <View style={{marginTop: 20, marginBottom: 20, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-around'}}>
        <View style={{alignItems: 'center', width: wp('50%')}}>
          <AntIcon name="solution" style={{color: '#00438b'}}></AntIcon>
          <Text style={{fontFamily: 'Comfortaa_700Bold', fontSize: 12}}>DBA registration</Text>
        </View>

        <View style={{alignItems: 'center', width: wp('50%')}}>
          <AntIcon name="trophy" style={{color: '#00438b'}}></AntIcon>
          <Text style={{fontFamily: 'Comfortaa_700Bold', fontSize: 12}}>Trademarks & Patents</Text>
        </View>
      </View>

      <View style={{marginTop: 20, marginBottom: 20, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-around'}}>
        <View style={{alignItems: 'center', width: wp('50%')}}>
          <AntIcon name="file-text" style={{color: '#00438b'}}></AntIcon>
          <Text style={{fontFamily: 'Comfortaa_700Bold', fontSize: 12}}>Tax Return Filing</Text>
        </View>

        <View style={{alignItems: 'center', width: wp('50%')}}>
          <AntIcon name="file" style={{color: '#00438b'}}></AntIcon>
          <Text style={{fontFamily: 'Comfortaa_700Bold', fontSize: 12}}>Nonprofit Tax Filings</Text>
        </View>
      </View>
    </View>

    <View style={{backgroundColor: '#f5f5f5', marginLeft: wp('5%'), marginRight: wp('5%')}}>
      <AntButton type="primary" style={{backgroundColor: '#00438b', borderColor: '#00438b', borderRadius: 10}}>
        <Text style={{fontFamily: 'Comfortaa_700Bold'}}>Get Started</Text>
      </AntButton>
    </View>

    <View style={{marginTop: 20, marginBottom: 20, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 10}}>Copyrights &copy; 2020. All rights reserved by USBizFilings&reg;</Text>
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageBg: {
    flex: 1,
    resizeMode: 'cover',
    height: 200,
  },
  bg: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Comfortaa_700Bold',
  }
});

export default HomeScreen;