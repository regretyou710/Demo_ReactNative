// You can import Ionicons from @expo/vector-icons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.
import React, { Component } from 'react';
import { Text, View, DeviceEventEmitter } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Tabs/homeScreen';
import OrderScreen from './Tabs/orderScreen';
import MyCenterScreen from './Tabs/myCenterScreen';

const Tab = createBottomTabNavigator();

class TabScreen extends Component {
  tabNavigatorOnPress(navigation, route, e) {
    // Prevent default action(取消默認行為)
    e.preventDefault();

    // Do something with the `navigation` object
    navigation.navigate(route.name, { userID: this.props.route.params.userID, tel: this.props.route.params.tel })
  }

  // 組件掛載完畢
  componentDidMount() {
    // console.log('TabScreen componentDidMount');
    // 發佈者發佈訊息(觸發訂閱)
    DeviceEventEmitter.emit('loginData', { userID: this.props.route.params.userID, tel: this.props.route.params.tel });
  }

  render() {
    // console.log('TabScreen>>>', this.props.route);

    return (
      <Tab.Navigator
        backBehavior={'none'}// 設置為none可使導航器不處理返回事件
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
          // tabBarIconStyle: { display: "none" },
          tabBarStyle: { height: 60, backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#B4B4B4' },
          tabBarLabelStyle: { fontSize: 12, marginTop: -10, marginBottom: 5 },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarLabel: '首頁', headerShown: false }}
        // listeners={({ navigation, route }) => ({
        //   tabPress: e => this.tabNavigatorOnPress(navigation, route, e),
        // })}
        />
        <Tab.Screen name="Order" component={OrderScreen} options={{ tabBarLabel: '訂單', headerShown: false }} />
        <Tab.Screen name="MyCenter" component={MyCenterScreen} options={{ tabBarLabel: '我的', headerShown: false }} />
      </Tab.Navigator>
    );
  }
}

export default TabScreen;
