import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, StatusBar, FlatList, TouchableOpacity } from 'react-native';
import axios from 'axios';
import moment from 'moment';
import Ionicons from 'react-native-vector-icons/Ionicons';

class OrderScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: [],
        };
        this.getOrderList();
    }

    // 獲取訂單數據
    getOrderList() {
        const projectID = 'reactnative-4876e';
        const collectionName = 'orders'
        let url = `https://firestore.googleapis.com/v1/projects/${projectID}/databases/(default)/documents/${collectionName}`;

        axios.get(url).then(
            response => {
                let orders = response.data.documents

                // 排序
                orders.sort((a, b) => {
                    if (a.fields.ORDERNUM.stringValue > b.fields.ORDERNUM.stringValue)
                        return 1;
                    if (a.fields.ORDERNUM.stringValue < b.fields.ORDERNUM.stringValue)
                        return -1;
                    return 0;
                });

                this.setState({ orders: orders });
            }
        ).catch(
            err => {
                alert(err);
            }
        );
    }

    // 用來處理數據源中每個元素
    flatListRenderItem(thisObj, item //{item}
    ) {
        let noMoreDOM = item.index == this.state.orders.length - 1 ? (
            <View>
                {/* 繼續下單 */}
                <View style={styles.continueContainer}>
                    <View style={styles.continueBox}>
                        <Text style={styles.continueStr}>繼續下單</Text>
                    </View>
                </View>
                <Text style={styles.noMore}>沒有更多訂單了</Text>
            </View>
        ) : null;

        return (
            <View style={styles.itemContainer}>
                <View style={styles.titleContainer}>
                    <Ionicons name={'shirt'} style={styles.titleIcon} />
                    <Text style={styles.titleContent}>{item.item.fields.TITLE.stringValue}</Text>
                </View>
                <Text style={styles.orderNum}>訂單編號 : {item.item.fields.ORDERNUM.stringValue}</Text>
                <View style={styles.pickupContainer}>
                    <Text style={styles.pickupTime}>取件時間 : {moment(item.item.fields.TIME.timestampValue).format('YYYY/MM/DD HH:mm:ss')}</Text>
                    <Ionicons name={'create'} style={styles.pickupIcon} />
                    <Text style={styles.pickupEdit}>修改</Text>
                </View>
                {noMoreDOM}
            </View>
        )
    }

    orderOnPress(item) {
        console.log(this)
        console.log(item)
        console.log(this.props)
    }

    render() {
        return (
            <View style={styles.screen}>
                <View style={styles.header}>
                    <Text style={styles.headerStr}>明細列表</Text>
                </View>

                {/* 明細列表 */}
                <FlatList
                    data={this.state.orders} // 數據源
                    // renderItem={this.flatListRenderItem.bind(this)} // 渲染函數
                    renderItem={item => this.flatListRenderItem(this, item)}
                    numColumns={1}// 每行顯示個數
                    keyExtractor={(item, index) => item.fields.ORDERNUM.stringValue}// 指定每個子元素唯一的key
                />
            </View>
        );
    }
}

let screenWidth = Dimensions.get('window').width;// 取得螢幕寬度
let screenHeight = Dimensions.get('window').height;// 取得螢幕高度

const styles = StyleSheet.create({
    screen: {
        backgroundColor: 'white',
        height: screenHeight - 60 - StatusBar.currentHeight,
    },
    header: {
        height: screenHeight * 0.05,
        width: screenWidth,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'tomato',
    },
    headerStr: {
        fontSize: 18,
        color: 'white',
    },
    titleContainer: {
        width: screenWidth,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 15,
    },
    titleIcon: {
        fontSize: 22,
        marginLeft: 20,
        marginRight: 10,
        color: 'rgba(0,220,220,1)',
    },
    titleContent: {
        fontSize: 18,
        color: 'rgba(0,0,0,1)',
    },
    orderNum: {
        marginLeft: 20,
        marginRight: 10,
    },
    pickupContainer: {
        width: screenWidth,
        marginBottom: 35,
        flexDirection: 'row',
        alignItems: 'center',
    },
    pickupTime: {
        marginLeft: 20,
        marginRight: 10,
    },
    pickupIcon: {
        fontSize: 22,
        marginLeft: 15,
        color: 'tomato',
    },
    pickupEdit: {
        color: 'tomato',
    },
    noMore: {
        color: 'rgba(0,0,0,0.3)',
        fontSize: 15,
        textAlign: 'center',
    },
    continueContainer: {
        alignItems: 'space-around',
    },
    continueBox: {
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 20,
        // marginLeft: 20,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'tomato',
        lineHeight: 32,
        height: 32,
        width: 90,
    },
    continueStr: {
        color: 'tomato',
        fontSize: 16,
    }
});

export default OrderScreen;