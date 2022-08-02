import React from 'react';
import {SafeAreaView} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Content from './Content';
import Login from './Login';

const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Content" component={Content} />
    </Stack.Navigator>
  );
};

export default Navigation;
