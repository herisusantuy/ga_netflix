import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// Screen
import Login from './Login';
import Register from './Register';
import MainTab from './MainTab';

// Stack Navigation
const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
  <RootStack.Navigator headerMode="none" initialRouteName="Login">
    <RootStack.Screen name="Login" component={Login} />
    <RootStack.Screen name="Register" component={Register} />
    <RootStack.Screen name="MainTab" component={MainTab} />
  </RootStack.Navigator>
);

export default RootStackScreen;
