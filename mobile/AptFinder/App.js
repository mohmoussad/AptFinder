import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ApartmentList from './screens/ApartmentList';
import ApartmentDetails from './screens/ApartmentDetails';
import CreateApartment from './screens/CreateApartment';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Apartments" component={ApartmentList} />
      <Stack.Screen name="Details" component={ApartmentDetails} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Create" component={CreateApartment} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
