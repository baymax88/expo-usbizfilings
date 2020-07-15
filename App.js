import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

import HomeScreen from './screens/HomeScreen/HomeScreen';

const Drawer = createDrawerNavigator();

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
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;