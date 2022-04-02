import React, { Component } from 'react';
import { View, StyleSheet, Image, Dimensions, Text, SafeAreaView } from 'react-native';
import Carousel from 'react-native-snap-carousel';

class BottomFlash extends Component {
    constructor() {
        super();
        this.state = {
            activeIndex: 1,
            carouselItems: [
                {
                    userName: 'Tom',
                    content: 'Good!真心推薦'
                },
                {
                    userName: 'Mary',
                    content: '真乾淨!'
                },
                {
                    userName: 'Tony',
                    content: '五顆星!'
                },
                {
                    userName: 'Rose',
                    content: '很棒的商家!'
                },
            ]
        }
    }

    _renderItem({ item, index }) {
        return (
            <View style={styles.bottomContent}>
                <Text style={{ fontSize: 24, color: 'rgba(0,0,0,0.5)', }}>{item.userName}</Text>
                <Text style={{ fontSize: 14, color: 'rgba(0,0,0,0.5)', }}>{item.content}</Text>
            </View>
        )
    }

    render() {
        return (
            <SafeAreaView style={styles.bottomFlash}>
                <Image source={require('../../img/bottomFlashImg.jpg')}
                    style={styles.bottomFlashImg} ></Image>
                <View style={styles.bottomContentOuter}>
                    <Carousel
                        layout={"default"}
                        ref={ref => this.carousel = ref}
                        data={this.state.carouselItems}
                        sliderWidth={screenWidth}
                        itemWidth={300}
                        renderItem={this._renderItem}
                        onSnapToItem={index => this.setState({ activeIndex: index })} />
                </View>
            </SafeAreaView>
        );
    }
}

// sliderWidth、onSnapToItem 使用說明
// C:\Demo_ReactNative\demo153\備忘錄\react-native-snap-carousel 轮播_renchaoqiong-程序员宝宝 - 程序员宝宝_files

// 取得螢幕寬度
let screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    bottomFlash: {
        width: '100%',
        height: screenWidth / 3 * 1.3,
    },
    bottomFlashImg: {
        width: '100%',
        height: screenWidth / 3 * 1.3,
        resizeMode: 'stretch',
        opacity: 0.5,
        position: 'relative',
    },
    bottomContentOuter: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'absolute',
        top: (screenWidth / 3 * 1.3 - 180) / 2
    },
    bottomContent: {
        backgroundColor: 'rgba(255,255,255,1)',
        borderRadius: 5,
        height: 180,
        padding: 20,
        marginLeft: 25,
        marginRight: 25,
        alignItems: 'center',
        opacity: 0.8,
        color: 'red',
    }
});

export default BottomFlash;