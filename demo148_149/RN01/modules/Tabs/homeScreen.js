import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import TopFlash from '../HomeScreen/topFlash';
import Service from '../HomeScreen/service';
import Icons from '../HomeScreen/icons';
import BottomFlash from '../HomeScreen/bottomFlash';

class HomeScreen extends Component {
    render() {
        return (
            <View style={{ backgroundColor: 'white' }}>
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

const styles = StyleSheet.create({
    clean: {
        fontSize: 16,
        color: 'rgba(0,0,0,0.3)',
        textAlign: 'center',
        marginTop: 15,
    },
});

export default HomeScreen;