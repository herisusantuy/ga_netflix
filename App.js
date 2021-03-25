/*
Navigation React Native
1. Run npm install @react-navigation/native
2. Run npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
3. Run npm install @react-navigation/stack
4. create RootStack.js file 
5. Import RootStack.js to as RootStackSreen to App.js
6. Import NavigationContainer from @react-navigation/native to App.js
7. Set NavigationContainer as wrapper in return and put RootStackSreen inside it.

Home Tab Navigation
8. Create MainTab.js
9. Run npm install @react-navigation/material-bottom-tabs react-native-paper
10. Create component for each tab navigation
11. Import React, createStackNavigator, createMaterialBottomTabNavigator
12. Create Tab navigator  function using createMaterialBottomTabNavigator
13. Create Stack navigation function for each tab screen
14. Create Stack screen for each tab navigation
15. Create MainTab screen and call each StackScrean into it then export
16. Call Maintab in RootStack screen


*/

import React, {useEffect} from 'react';

// Navigation
import {NavigationContainer} from '@react-navigation/native';

// Screen
import RootStackScreen from './js/components/RootStack';

const App = () => {
  useEffect(() => {}, []);

  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  );
};

export default App;
