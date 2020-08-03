import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'

import HomeScreen from './screens/HomeScreen/HomeScreen';
import Step1Screen from './screens/OrderScreen/Step1Screen'
import Step2Screen from './screens/OrderScreen/Step2Screen'
import Step3Screen from './screens/OrderScreen/Step3Screen'
import ContactScreen from './screens/ContactScreen/ContactScreen'
import SubscriptionScreen from './screens/SubscriptionScreen/SubscriptionScreen'
import DrawerContent from './components/DrawerContent';
import AppContextProvider from './contexts/AppContext';

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
          <Drawer.Navigator initialRouteName="Home" drawerContent={props => <DrawerContent {...props} />}>
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Step1" component={Step1Screen} />
            <Drawer.Screen name="Step2" component={Step2Screen} />
            <Drawer.Screen name="Step3" component={Step3Screen} />
            <Drawer.Screen name="Contact" component={ContactScreen} />
            <Drawer.Screen name="Subscription" component={SubscriptionScreen} />
          </Drawer.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </AppContextProvider>
  );
};

export default App;