import React, {
    Component
} from 'react';

import {    
    Text,
    StyleSheet,
    ScrollView,    
} from 'react-native';

class Menu extends Component {
    render() {
        return (
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={styles.outerContent}
                contentContainerStyle={styles.outer}
            >
                <Text style={styles.innerContent}>人氣</Text>
                <Text style={styles.innerContent}>影音</Text>
                <Text style={styles.innerContent}>看板</Text>
                <Text style={styles.innerContent}>自選</Text>
                <Text style={styles.innerContent}>報告</Text>
                <Text style={styles.innerContent}>問答</Text>
                <Text style={styles.innerContent}>追蹤</Text>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
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
    }
});

export default Menu;