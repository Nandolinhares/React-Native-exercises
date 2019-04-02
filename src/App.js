import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Simple from './components/Simple';

import ParImpar from './components/ParImpar';

import { Inverter, MegaSena } from './components/Multi';

export default class App extends Component{
    render(){
        return(
            <View style={ styles.container }>
                <Simple texto='Flexible' />
                <ParImpar numero={8} />
                <Inverter texto="React Nativee" />
                <MegaSena numeros={6} />
            </View>
        );
    }
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});