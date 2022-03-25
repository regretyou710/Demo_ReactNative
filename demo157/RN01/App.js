import React, { Component } from 'react';
import { BackHandler, ToastAndroid } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './modules/loginScreen';
import TabScreen from './modules/tabScreen';
import PageScreen from './modules/pageScreen';
import NavigationService from './modules/Util/navigationService';

const Stack = createNativeStackNavigator();

export default class App extends Component {
  backHandler;

  // 組件掛載完畢
  componentDidMount() {
    this.backHandler = BackHandler.addEventListener('hardwareBackPress',
      this.onBackButtonPressAndroid, //處理返回事件函數
    );
  }

  // 組件即將卸載
  componentWillUnmount() {
    this.backHandler && this.backHandler.remove('hardwareBackPress');
  }

  onBackButtonPressAndroid = () => {
    const routeName = NavigationService.getCurrentRouteName();

    if (
      //處理Login和tabs
      routeName === 'Login' ||
      routeName === 'Home' ||
      routeName === 'Order' ||
      routeName === 'MyCenter'
    ) {
      if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now())
        return false;

      this.lastBackPressed = Date.now();
      ToastAndroid.show('再按一次離開', ToastAndroid.SHORT);
      return true; //true阻止返回鍵向下傳遞
    } else {
      return false; //不做任何事情，返回鍵向下傳遞，系統默認處理
    }
  };

  render() {
    return (
      <NavigationContainer
        ref={navigatorRef => NavigationService.setTopLevelNavigator(navigatorRef)}
      >
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Overview', headerShown: false }} />
          <Stack.Screen name="Tab" component={TabScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Page" component={PageScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
