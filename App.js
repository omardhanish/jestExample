/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LogBox } from 'react-native';
import './src/constants/Global'
import NativeUtils from './src/utils/NativeUtils';
import { Provider } from 'react-redux';
import StoreUtils from './src/store';


import CounterScreen, { CounterScreenName } from './src/screens/CounterScreen';
import CounterScreenTwo, { CounterScreenTwoName } from './src/screens/CounterScreenTwo';


const ParentStack = createStackNavigator()

const App = () => {

  NativeUtils.print('ignoreAllLogs------------------------------------------------------------------------------------')
  LogBox.ignoreAllLogs()

  return (

    <Provider store={StoreUtils.getStore()}>
      <NavigationContainer>

        <ParentStack.Navigator>
          <ParentStack.Screen name={CounterScreenName} component={CounterScreen} options={{ headerShown: false }} />
          <ParentStack.Screen name={CounterScreenTwoName} component={CounterScreenTwo} options={{ headerShown: false }} />
        </ParentStack.Navigator>

      </NavigationContainer>
    </Provider>

  )

}

export default App
