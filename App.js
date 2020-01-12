import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { useScreens } from 'react-native-screens';

import CategoryScreen from './Screens/CategoryScreen';
import MealsNavigation from './Navigation/MealNavigation';

useScreens();

const fetchFonts = () => {
  Font.loadAsync({
    'open-sans': require('./assets/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/OpenSans-Bold.ttf'),
  })
};

export default function App() {

  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
        <AppLoading
            startAsync={fetchFonts}
            onFinish={() => setFontLoaded(true)}
        />
    );
  }

  return <MealsNavigation />
}
