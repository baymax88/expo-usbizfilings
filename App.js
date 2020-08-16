import 'react-native-gesture-handler';
import React, { useState, useEffect, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import DrawerContent from './components/DrawerContent';
import { AppContext } from './contexts/AppContext';
import AppContextProvider from './contexts/AppContext';

import RootStackScreen from './screens/RootStackScreen';
import MainStackScreen from './screens/MainStackScreen';


const Drawer = createDrawerNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#00438b'
  }
}

const App = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const setFonts = async () => {
      await Font.loadAsync('antoutline', require('@ant-design/icons-react-native/fonts/antoutline.ttf'));
      await Font.loadAsync('antfill', require('@ant-design/icons-react-native/fonts/antfill.ttf'));
      setIsReady(true);
    }
    setFonts();
  });

  if (!isReady) {
    return <AppLoading />;
  }

  return (
    <AppContextProvider>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <Nav />
        </NavigationContainer>
      </PaperProvider>
    </AppContextProvider>
  );
};

const Nav = () => {
  const { authData, setLoginStatus } = useContext(AppContext)
  const { login_status } = authData

  const authHandler = (data) => {
    setLoginStatus(data)
  }

  return (
    <>
      { login_status ? (
        <Drawer.Navigator initialRouteName="Home" drawerContent={props => <DrawerContent data={authData} {...props} authHandler={authHandler} />}>
          <Drawer.Screen name="Screens" component={MainStackScreen} />
        </Drawer.Navigator>) : (
        <RootStackScreen />
      )}
    </>
  )
}

export default App;