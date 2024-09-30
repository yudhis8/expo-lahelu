import React from 'react';
import TabNavigation from './Tab.navigation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const HomeNavigation: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={TabNavigation} />
    </Stack.Navigator>
  );
};

export default HomeNavigation;
