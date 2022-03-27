import { NavigationActions } from '@react-navigation/native';

let navigator;

//ref傳值
const setTopLevelNavigator = navigatorRef => {
    // console.log(`navigatorRef:${navigatorRef}`);
    navigator = navigatorRef;
};

//頁面跳轉方法
const navigate = (routeName, params = {}) => {
    navigator.dispatch(
        NavigationActions.navigate({
            routeName,
            params,
        }),
    );
};

//頁面goBack方法
const goBack = () => {
    navigator.dispatch(NavigationActions.back());
};

//獲取當前路由
const getCurrentRoute = () => {
    return navigator.getCurrentRoute();
};

//獲取當前路由名稱
const getCurrentRouteName = () => {
    return getCurrentRoute().name;
};

export default {
    navigate,
    setTopLevelNavigator,
    getCurrentRoute,
    getCurrentRouteName,
    goBack,
};