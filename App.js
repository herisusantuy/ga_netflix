import React, {useEffect} from 'react';

// Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

// Screen
import RootStackScreen from './js/components/RootStack';

const Drawer = createDrawerNavigator();

const App = () => {
  useEffect(() => {}, []);

  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  );
};

export default App;
