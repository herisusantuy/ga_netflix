import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

// Screen
import Login from './Login';
import Register from './Register';
import MainTab from './MainTab';
import DrawerContent from './DrawerContent';
import Detail from './Detail';

// Stack Navigation
// const RootStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const RootStackScreen = ({navigation}) => (
  <Drawer.Navigator
    headerMode="none"
    initialRouteName="Login"
    drawerContent={props => <DrawerContent {...props} />}>
    <Drawer.Screen name="Login" component={Login} />
    <Drawer.Screen name="Register" component={Register} />
    <Drawer.Screen name="MainTab" component={MainTab} />
    <Drawer.Screen name="Detail" component={Detail} />
  </Drawer.Navigator>
);

export default RootStackScreen;
