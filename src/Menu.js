import React from 'react';
import { createDrawerNavigator } from 'react-navigation';

import Simple from './components/Simple';
import ParImpar from './components/ParImpar';
import { Inverter, MegaSena } from './components/Multi';

export default createDrawerNavigator({
    MegaSena: {
        screen: () => <MegaSena numeros={6} />,
        navigationOptions: { title: 'Mega Sena' }
    },

    Inverter: {
        screen: () => <Inverter texto='React Nativee' />
    },

    ParImpar: {
        screen: () => <ParImpar numeros={30} />,
        navigationOptions: { title: 'Par & Ímpar' }
    },

    Simples: {
        screen: () => <Simple texto='Flexible' />
    }
}, { drawerWidth: 300 });