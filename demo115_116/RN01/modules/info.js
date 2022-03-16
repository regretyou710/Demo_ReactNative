import React, { Component } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';
class Info extends Component {
    constructor() {
        super();
        this.state = {
            Id: '',
            Description: ''
        }
    }

    componentDidMount() {
        // 請求數據
        // alert("componentDidMount");

        const url = 'https://gis.taiwan.net.tw/XMLReleaseALL_public/restaurant_C_f.json';
        const Id = this.props.route.params.Id;

        // fetch請求api數據轉json如果報錯改用axios
        // 在項目開啟終端執行npm install axios --save，然後引入import axios from 'axios'
        axios.get(url).then(response => {
            let findInfo = response.data.XML_Head.Infos.Info.filter(info =>
                info.Id == Id
            );

            this.setState({
                Id: findInfo[0].Id,
                Description: findInfo[0].Description
            })
        }
            // console.log(response.data.XML_Head.Infos)
        );
    }

    render() {
        return (
            <View>
                <Text style={{ fontSize: 20 }}>
                    {this.state.Id}
                </Text>
                <Text>
                    {'\n'}
                </Text>
                <Text style={{ fontSize: 20 }}>
                    {this.state.Description}
                </Text>
            </View>
        );
    }
}

export default Info;