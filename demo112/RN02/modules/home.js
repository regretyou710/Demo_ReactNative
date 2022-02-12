import React, { Component } from 'react';
import { Text, View, FlatList, Image, StyleSheet, Dimensions } from 'react-native';
import axios from 'axios';

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listInfo: [{
                Id: 'A01',
                Name: '圖片一',
                itemImage: require('../img/RNICON.png'),
            },
            {
                Id: 'A02',
                Name: '圖片二',
                itemImage: require('../img/RNICON.png')
            }, {
                Id: 'A03',
                Name: '圖片三',
                itemImage: require('../img/RNICON.png')
            }, {
                Id: 'A04',
                Name: '圖片四',
                itemImage: require('../img/RNICON.png')
            }]
        }
    }

    // 用來處理數據源中每個元素
    _renderItem({ item }// item表示數組中每一項對象
    ) {
        const { navigation } = this.props;//解構賦值

        return (
            <View style={styles.itemContainer}>
                <Image source={
                    item.itemImage ? item.itemImage :
                        { uri: item.Picture1 ? item.Picture1 : null }
                } style={styles.itemImage}></Image>
                <Text style={styles.itemText}
                    onPress={() => navigation.navigate('內容', { descr: item.Description})}>{item.Name}</Text>
            </View>
        )
    }

    componentDidMount() {
        // 請求數據
        // alert("componentDidMount");

        //https://data.gov.tw/dataset/7779
        const url = 'https://gis.taiwan.net.tw/XMLReleaseALL_public/restaurant_C_f.json';

        // fetch請求api數據轉json如果報錯改用axios
        // 在項目開啟終端執行npm install axios --save，然後引入import axios from 'axios'
        axios.get(url).then(response =>
            this.setState({
                listInfo: response.data.XML_Head.Infos.Info
            })
            // console.log(response.data.XML_Head.Infos)
        );
    }

    render() {
        return (
            <View>
                <Text>首頁</Text>
                {/* 列表 */}
                <FlatList
                    data={this.state.listInfo} // 數據源
                    renderItem={this._renderItem.bind(this)} // 渲染函數
                    numColumns={2}// 每行顯示個數
                    keyExtractor={(item, index) => item.Id}// 指定每個子元素唯一的key
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    outer: {
        // justifyContent: 'center',
        alignItems: 'center',
    },
    outerContent: {
        // borderColor: 'red',
        // borderWidth: 1,
        // borderStyle: 'solid',
        height: 70,
    },
    innerContent: {
        fontSize: 20,
        color: 'rgba(0,0,0,0.5)',
        paddingLeft: 20,
        paddingRight: 20,
    },
    itemContainer: {
        borderWidth: 1,
        backgroundColor: 'rgba(175,205,165,0.2)',
        width: '50%',
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        flex: 1,
    },
    itemText: {
        fontSize: 20,
        color: 'black',
        marginTop: 15,
    },
    itemImage: {
        // Dimensions獲得屏幕相關訊息組件
        width: Dimensions.get('window').width / 2 * 0.7,

        // 假設螢幕比為16:9，已知寬度求高
        height: Dimensions.get('window').width / 2 * 0.7 * 9 / 16,
    },
});

export default HomeScreen;