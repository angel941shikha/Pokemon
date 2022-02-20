import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Form from './src/Form';
import List from './src/List';
import Edit from './src/Edit';

import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default AppStack = (navigation) =>
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Form" component={Form} options={{ title: 'POKEDEX',headerTintColor: 'orange', headerStyle: { backgroundColor: 'black'}}}/>
      <Stack.Screen name="List" component={List} options={{ headerTintColor: 'orange', headerStyle: { backgroundColor: 'black'}}}/>
      <Stack.Screen name="Edit" component={Edit} options={{ headerTintColor: 'orange', headerStyle: { backgroundColor: 'black'}}}/>
    </Stack.Navigator>
  </NavigationContainer>