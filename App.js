import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class App extends Component{
    render(){
        return(
            <View style={ styles.container }>
                <Text style={ styles.f40 }>App</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#080904'
    },

    f40: {
        fontSize: 40,
        color: '#fff'
    }
})