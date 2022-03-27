import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, StatusBar, FlatList, TouchableOpacity } from 'react-native';
import axios from 'axios';

class OrderScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listInfo: [
                {
                    id: 'Order_001',
                    content: 'T-Shirt',
                },
                {
                    id: 'Order_002',
                    content: '長褲',
                },
            ]
        };
        this.getOrderList();
    }

    // 獲取訂單數據
    getOrderList() {
        console.log(this.props)
    }

    // 用來處理數據源中每個元素
    flatListRenderItem({ item }// item表示數組中每一項對象
    ) {
        return (
            <TouchableOpacity style={styles.itemContainer} onPress={this.orderOnPress.bind(this, item)}>
                <Text>{item.id}</Text>
                <Text>{item.content}</Text>
            </TouchableOpacity>
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
                    <Text style={styles.titleWord}>明細列表</Text>
                </View>

                {/* 明細列表 */}
                <FlatList
                    data={this.state.listInfo} // 數據源
                    renderItem={this.flatListRenderItem.bind(this)} // 渲染函數
                    // renderItem={(item, index) => this._renderItem(item)}
                    numColumns={1}// 每行顯示個數
                    keyExtractor={(item, index) => item.id}// 指定每個子元素唯一的key
                />

                {/* 繼續下單 */}
                <View >
                    <View>
                        <Text>繼續下單</Text>
                    </View>
                </View>
            </View>
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
    header: {

    },
    titleWord: {

    },
});

export default OrderScreen;