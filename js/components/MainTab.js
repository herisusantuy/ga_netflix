import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {color} from '../styles/default';

// Navigation Setting
const Tab = createMaterialBottomTabNavigator();

const HomeStack = createStackNavigator();
const ComingSoonStack = createStackNavigator();
const DownloadStack = createStackNavigator();

// Screen
import Home from './Home';
import ComingSoon from './ComingSoon';
import Download from './Download';

// Setting Each Stack Scrren
const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: color.black,
      },
      headerTintColor: color.red,
      fontWeight: 'bold',
    }}>
    <HomeStack.Screen
      name="Home"
      component={Home}
      options={{
        title: 'Netflix',
        headerLeft: () => (
          <Ionicons.Button
            name="ios-menu"
            size={25}
            backgroundColor={color.black}
            color={color.white}
            onPress={() => navigation.openDrawer()}
          />
        ),
        headerRight: () => (
          <Ionicons.Button
            name="notifications-outline"
            size={25}
            backgroundColor={color.black}
            color={color.white}
          />
        ),
      }}
    />
  </HomeStack.Navigator>
);

const ComingSoonStackScreen = ({navigation}) => (
  <ComingSoonStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: color.black,
      },
      headerTintColor: color.white,
      fontWeight: 'bold',
    }}>
    <ComingSoonStack.Screen name="Coming Soon" component={ComingSoon} />
  </ComingSoonStack.Navigator>
);

const DownloadStackScreen = ({navigation}) => (
  <DownloadStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: color.black,
      },
      headerTintColor: color.white,
      fontWeight: 'bold',
    }}>
    <DownloadStack.Screen name="Download" component={Download} />
  </DownloadStack.Navigator>
);

const MainTab = () => (
  <Tab.Navigator
    initialRouteName="Home"
    activeColor={color.white}
    inactiveColor="grey"
    barStyle={{
      backgroundColor: color.darkGrey,
      paddingVertical: 5,
    }}>
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarColor: color.black,
        tabBarIcon: ({color}) => (
          <MaterialIcons name="home-filled" color={color} size={25} />
        ),
      }}
    />
    <Tab.Screen
      name="Coming Soon"
      component={ComingSoonStackScreen}
      options={{
        tabBarLabel: 'Coming Soon',
        tabBarColor: '#fff',
        tabBarIcon: ({color}) => (
          <MaterialIcons name="video-collection" color={color} size={25} />
        ),
      }}
    />

    <Tab.Screen
      name="Download"
      component={DownloadStackScreen}
      options={{
        tabBarLabel: 'Download',
        tabBarColor: '#fff',
        tabBarIcon: ({color}) => (
          <MaterialCommunityIcons
            name="download-circle"
            color={color}
            size={25}
          />
        ),
      }}
    />
  </Tab.Navigator>
);

export default MainTab;
