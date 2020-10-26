import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar
} from 'react-native';

const Header = (props) => {
    return (
        <View style = {styles.header}>
            <Text style = {styles.title}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header : {
        backgroundColor: '#e6ecff',
        height: 60,
        alignItems: "center",
        justifyContent: "center"
    },
    title: {
        color : '#668cff',
        fontSize: 28,
        fontWeight: '900',
        textTransform:"uppercase"
    }
}); 

export default Header;