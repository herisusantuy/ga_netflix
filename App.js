import React, {useEffect} from 'react';

// Navigation
import {NavigationContainer} from '@react-navigation/native';

// Screen
import RootStackScreen from './js/components/RootStack';

// Store
import {Provider, useDispatch} from 'react-redux';
import store from './js/store';

// Action
// import {getPopularAction} from './js/actions/movieAction';

const App = () => {
  // const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(getPopularAction());
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStackScreen />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
