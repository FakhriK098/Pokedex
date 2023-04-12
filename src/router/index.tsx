import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Constant from '../assets/Contants';
import {Detail, Home} from '../pages';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Constant.Router.Home}
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Constant.Router.Detail}
        component={Detail}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
