import React from 'react';
import Login from './Screens/Login';
import Navigation from './Screens/Navigation';
import {NavigationContainer} from '@react-navigation/native';
const App = () => {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
};
export default App;
