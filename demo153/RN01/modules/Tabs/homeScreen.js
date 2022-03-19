import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, StatusBar } from 'react-native';
import TopFlash from '../HomeScreen/topFlash';
import Service from '../HomeScreen/service';
import Icons from '../HomeScreen/icons';
import BottomFlash from '../HomeScreen/bottomFlash';
import AsyncStorage from '@react-native-community/async-storage';
import { CommonActions } from '@react-navigation/native';
import DefaultPage from '../defaultPage';

class HomeScreen extends Component {
    constructor() {
        super();
        this.state = {
            userID: '',
            tel: '',
            dom: (<DefaultPage />),
        };
        this.setDOM();// 組件渲染前獲取本地端資料
    }

    setDOM = () => {
        let userIDPromise = new Promise((resolve, reject) =>
            AsyncStorage.getItem('userID', (err, result) => {
                // console.log(`userID:${result}`);
                if (result) {
                    this.setState({ userID: result });
                    resolve();
                }
                else
                    reject(err);
            }
            )
        );

        let telPromise = new Promise((resolve, reject) =>
            AsyncStorage.getItem('tel', (err, result) => {
                // console.log(`tel:${result}`)
                if (result) {
                    this.setState({ tel: result });
                    resolve();
                }
                else
                    reject(err);
            }
            )
        );

        let promise = Promise.all([userIDPromise, telPromise]);

        promise.then(
            () => this.setState({ dom: (<HomeScreenPage />) })
        ).catch(
            err => {
                this.setState({ flag: false })
                if (this.state.userID == '' || this.state.tel == '') {
                    this.props.navigation.dispatch(
                        CommonActions.reset({
                            index: 1,
                            routes: [
                                {
                                    name: 'Login'
                                },
                                {
                                    name: 'Page'
                                }
                            ],
                        })
                    )
                    alert('非法登入');
                }
                else
                    alert(err);
            }
        );

    }

    // 組件即將卸載
    componentWillUnmount() {
        // console.log('componentWillUnmount')
        this.setState = (state, callback) => {
            return
        }
        // 使用說明C:\Demo_ReactNative\demo153\備忘錄\react 在componentWillUnmount中卸載異步操作設置狀態 - 台部落.html
    }

    render() {
        return this.state.dom;
    }
}


class HomeScreenPage extends Component {
    render() {
        return (
            <View style={styles.screen}>
                {/* 輪播圖區塊Start */}
                <TopFlash />
                {/*  輪播圖區塊End */}

                <Text style={styles.clean}>- 專業清洗 -</Text>

                {/* 橫排四個分類Start */}
                <Service />
                {/* 橫排四個分類End */}

                {/* 五個小圖標Start */}
                <Icons />
                {/* 五個小圖標End */}


                {/* 底部輪播圖Start */}
                <BottomFlash />
                {/* 底部輪播圖End */}
            </View >
        );
    }
}

// let screenWidth = Dimensions.get('window').width;// 取得螢幕寬度
let screenHeight = Dimensions.get('window').height;// 取得螢幕高度

const styles = StyleSheet.create({
    screen: {
        backgroundColor: 'white',
        height: screenHeight - 60 - StatusBar.currentHeight,
    },
    clean: {
        fontSize: 16,
        color: 'rgba(0,0,0,0.3)',
        textAlign: 'center',
        marginTop: 15,
    },
});

export default HomeScreen;