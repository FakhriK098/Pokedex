import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Router from './src/router';
import 'react-native-gesture-handler';
import {RecoilRoot} from 'recoil';

const App = () => {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </RecoilRoot>
  );
};

export default App;
