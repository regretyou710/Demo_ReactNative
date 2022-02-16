// You can import Ionicons from @expo/vector-icons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.
import * as React from 'react';
import { Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
      <Text>Home!</Text>
    </View>
  );
}

function OrderScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Order!</Text>
    </View>
  );
}

function MyCenterScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>MyCenter!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Order') {
            iconName = focused ? 'newspaper' : 'newspaper-outline';
          } else if (route.name === 'MyCenter') {
            iconName = focused ? 'person' : 'person-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        // tabBarIconStyle: { display: "none" }
        tabBarStyle: { height: 60, backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#B4B4B4' },
        tabBarLabelStyle: { fontSize: 12, marginTop: -10, marginBottom: 5 },
      })}

    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarLabel: '首頁', headerShown: false }} />
      <Tab.Screen name="Order" component={OrderScreen} options={{ tabBarLabel: '訂單', headerShown: false }} />
      <Tab.Screen name="MyCenter" component={MyCenterScreen} options={{ tabBarLabel: '我的', headerShown: false }} />
    </Tab.Navigator>
  );
}
