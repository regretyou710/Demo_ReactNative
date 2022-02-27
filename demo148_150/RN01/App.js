import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabScreen from './modules/tabScreen';
import PageScreen from './modules/pageScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tab">
        <Stack.Screen name="Tab" component={TabScreen} options={{ title: 'Overview', headerShown: false }} />
        <Stack.Screen name="Page" component={PageScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

export default App;
