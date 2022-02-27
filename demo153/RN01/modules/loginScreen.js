import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, StatusBar, Dimensions, Image, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import { CommonActions } from '@react-navigation/native';

class LoginScreen extends Component {
    constructor() {
        super();
        this.state = {
            tel: '',
            verifyCod: '發送驗證碼',
            verifyCodeDisabled: false,
        };
    }

    phoneInput(phoneNum) {
        this.setState({ tel: phoneNum });
    };

    sendVerifyCodeBtn() {
        if (this.state.verifyCodeDisabled)
            return;

        this.setState({ verifyCodeDisabled: true });

        const url = '';
        let time = 3;

        // axios.post(url, {
        //     tel: this.state.tel
        // }).then(
        //     response => console.log(response)
        // ).catch(
        //     error => console.log(error)
        // )

        let timer = setInterval(() => {
            this.setState({ verifyCod: time + '秒' });

            if (time == 0) {
                clearInterval(timer);
                this.setState({ verifyCod: '發送驗證碼', verifyCodeDisabled: false });
            }

            time--;
            // console.log(timer)
        }, 1000);
    }

    loginBtn() {
        // this.props.navigation.navigate('Tab');

        // 登入後返回上一頁就離開APP
        // 使用說明C:\Demo_ReactNative\demo153\React Navigation 5.x（一）常用知识点梳理 - 简书.html
        this.props.navigation.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [
                    {
                        name: 'Tab',
                        params: { tel: this.state.tel }
                    }
                ],
            })
        );
    }

    render() {
        return (
            <View style={styles.screen}>
                <View style={styles.body}>
                    {/* 背景圖片Start */}
                    <Image
                        source={require('../img/loginback.jpg')}
                        style={styles.backgroundImg}></Image>
                    {/* 背景圖片End */}

                    {/* 表單登入Start */}
                    <View style={styles.form}>
                        <View style={styles.input}>
                            <Ionicons name={'call'} style={styles.inputIcon} />
                            <View style={styles.inputRight}>
                                <TextInput
                                    placeholder={'請輸入手機號碼'}
                                    placeholderTextColor={'rgba(0,0,0,0.5)'}
                                    underlineColorAndroid={'transparent'}
                                    style={styles.inputText}
                                    onChangeText={this.phoneInput.bind(this)}
                                >
                                </TextInput>
                                <View style={[styles.sendVerifyCode, {
                                    borderColor: this.state.verifyCodeDisabled ? 'rgba(0,0,0,0.5)' : 'tomato'
                                }]}>
                                    <Text style={[styles.sendVerifyCodeBtn, {
                                        color: this.state.verifyCodeDisabled ? 'rgba(0,0,0,0.5)' : 'tomato'

                                    }]}
                                        onPress={this.sendVerifyCodeBtn.bind(this)}
                                        disabled={this.state.verifyCodeDisabled}
                                    >{this.state.verifyCod}</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.input}>
                            <Ionicons name={'lock-closed'} style={styles.inputIcon} />
                            <View style={styles.inputRight}>
                                <TextInput
                                    placeholder={'請輸入驗證號碼'}
                                    placeholderTextColor={'rgba(0,0,0,0.5)'}
                                    underlineColorAndroid={'transparent'}
                                    style={styles.inputText}
                                >
                                </TextInput>
                            </View>
                        </View>

                        {/* 登入按鈕Start */}
                        <View style={styles.loginBtn}>
                            <Button
                                title={'登入'}
                                onPress={this.loginBtn.bind(this)}
                            ></Button>
                        </View>
                        {/* 登入按鈕End */}

                        {/* 協議Start */}
                        <View style={styles.contract}>
                            <Text style={{ color: 'black' }}>點擊登入，即表示您同意</Text>
                            <Text style={{ color: 'blue', borderBottomColor: 'blue', borderBottomWidth: 1 }}>用戶協議</Text>
                        </View>
                        {/* 協議End */}
                    </View>
                    {/* 表單登入End */}
                </View>
            </View>
        );
    }
}

let screenWidth = Dimensions.get('window').width;// 取得螢幕寬度
let screenHeight = Dimensions.get('window').height;// 取得螢幕高度

const styles = StyleSheet.create({
    screen: {
        backgroundColor: 'white',
        height: screenHeight - StatusBar.currentHeight,
    },
    body: {
        position: 'relative',
        width: '100%',
        height: '100%',
    },
    backgroundImg: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    form: {
        top: (screenHeight - screenHeight / 4) / 2 - StatusBar.currentHeight,
        left: 0,
        width: '100%',
        height: screenHeight / 4,
        // backgroundColor: 'white',
        // opacity: 0.7,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: screenWidth * 0.9,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 6,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.1)',
        marginBottom: 5,
        backgroundColor: 'rgba(255,255,255,0.8)',
        opacity: 0.7,
    },
    inputIcon: {
        fontSize: 18,
        marginLeft: 20,
        marginRight: 10,
    },
    inputRight: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: screenWidth * 0.9 - 18 - 20 - 10,
    },
    inputText: {
        width: screenWidth * 0.9 - 18 - 20 - 10 - 90 - 20 - 20,
        // backgroundColor: 'red',
        color: 'rgba(0,0,0,1)',
    },
    sendVerifyCode: {
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 20,
        marginLeft: 20,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'tomato',
        lineHeight: 32,
        height: 32,
        width: 90,
    },
    sendVerifyCodeBtn: {
        color: 'tomato',
    },
    loginBtn: {
        width: '80%',
        marginBottom: 15,
        marginTop: 10,
    },
    contract: {
        flexDirection: 'row',
    },
});

export default LoginScreen;