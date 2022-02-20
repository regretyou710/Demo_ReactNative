import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

class Icons extends Component {
    render() {
        return (
            <View style={styles.icons}>
                <View style={styles.iconItem}>
                    <View style={styles.icon}>
                        <Ionicons name={'grid'} size={35} />
                    </View>
                    <Text style={styles.iconTitle}>服務介紹</Text>
                </View>
                <View style={styles.iconItem}>
                    <View style={styles.icon}>
                        <Ionicons name={'earth'} size={35} />
                    </View>
                    <Text style={styles.iconTitle}>服務範圍</Text>
                </View>
                <View style={styles.iconItem}>
                    <View style={styles.icon}>
                        <Ionicons name={'logo-yen'} size={35} />
                    </View>
                    <Text style={styles.iconTitle}>價目中心</Text>
                </View>
                <View style={styles.iconItem}>
                    <View style={styles.icon}>
                        <Ionicons name={'chatbubble-ellipses'} size={35} />
                    </View>
                    <Text style={styles.iconTitle}>意見回饋</Text>
                </View>
                <View style={styles.iconItem}>
                    <View style={styles.icon}>
                        <Ionicons name={'shirt'} size={35} />
                    </View>
                    <Text style={styles.iconTitle}>團體洗衣</Text>
                </View>
            </View>
        );
    }
}

// 取得螢幕寬度
let screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    icons: {
        flexDirection: 'row',
        // backgroundColor: 'blue',
        // paddingTop: 7,
        paddingBottom: 10,
    },
    iconItem: {
        width: '20%',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'red',
    },
    icon: {
        width: '60%',
        height: screenWidth / 5 * 0.6,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.6)',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconTitle: {
        fontSize: 16,
        // textAlign: 'center',
        marginTop: 5,
    },
});

export default Icons;