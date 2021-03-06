import React, {
    Component
} from 'react';

import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Image,
    Dimensions
} from 'react-native';

import axios from 'axios';

class ItemList extends Component {
    constructor() {
        super();
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
        return (
            <View style={styles.itemContainer}>
                <Image source={
                    item.itemImage ? item.itemImage :
                        { uri: item.Picture1 ? item.Picture1 : null }
                } style={styles.itemImage}
                ></Image>
                <Text style={styles.itemText}>{item.Name}</Text>
            </View>
        )
    };

    /*
      getDefaultProps:組件實例創建前調用，多個實例間共享引用。
      注意:如果父組件傳遞過來的Props和你在該函數中定義的Props的key一樣，將會被覆蓋
      
      getInitalState:組件實例創建的時候調用的第一個函數。主要用於初始化state。
      注意:為了在使用中不出現空值，建議初始化state的時候盡可能給每一個可能用到的值
      都賦一個初始值
      
      componentWillMount:在render(渲染)前，getInitalState之後調用。僅調用一次，可以
      用於改變state操作(舊版支持)。新版使用componentDidMount
    */

    componentDidMount() {
        // 請求數據
        // alert("componentDidMount");

        //https://data.gov.tw/dataset/7779
        const url = 'https://gis.taiwan.net.tw/XMLReleaseALL_public/restaurant_C_f.json';

        // fetch請求api數據轉json如果報錯改用axios
        // 在項目開啟終端執行npm install axios，然後引入import axios from 'axios'
        axios.get(url).then(response =>
            this.setState({
                listInfo: response.data.XML_Head.Infos.Info
            })
            // console.log(response.data.XML_Head.Infos)
        );
    }

    render() {
        return (
            <FlatList
                data={this.state.listInfo} // 數據源
                renderItem={this._renderItem} // 渲染函數
                numColumns={2}// 每行顯示個數
                keyExtractor={(item, index) => item.Id}// 指定每個子元素唯一的key
            />
        );
    }
}

const styles = StyleSheet.create({
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

export default ItemList;