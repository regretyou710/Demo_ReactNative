import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, Image } from 'react-native';

class MyCenterScreen extends Component {
    render() {
        return (
            <View style={{ backgroundColor: 'white' }}>
                {/* 頂部Start */}
                <View style={styles.centerTop}>
                    <Image
                        source={require('../../img/mycenterbanner.jpg')}
                        style={styles.centerTopImg}></Image>
                    <View style={styles.centerTopContainer}>
                        <View style={styles.centerTopContainerLeft}></View>
                        <View style={styles.centerTopContainerRight}></View>
                    </View>
                </View>
                {/* 頂部End */}

            </View>
        );
    }
}
// 取得螢幕寬度
let screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    centerTop: {
        width: '100%',
        height: screenWidth / 3,
        borderWidth: 1,
        position: 'relative',
    },
    centerTopImg: {
        width: '100%',
        height: screenWidth / 3,
        resizeMode: 'cover',
        opacity: 0.2,
    },
    centerTopContainer: {
        width: '100%',
        height: screenWidth / 3,
        backgroundColor: 'yellow',
        position: 'absolute',
        left: 0,
        top: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    centerTopContainerLeft: {
        width: '30%',
        height: screenWidth / 3 * 0.5,
        backgroundColor: 'red',
        marginLeft: 10,
    },
    centerTopContainerRight: {
        width: '30%',
        height: screenWidth / 3 * 0.33,
        backgroundColor: 'blue',
        marginRight: 10,
    },
});

export default MyCenterScreen;