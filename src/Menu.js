import React from 'react';
import { createDrawerNavigator } from 'react-navigation';

import Simple from './components/Simple';
import ParImpar from './components/ParImpar';
import { Inverter, MegaSena } from './components/Multi';
import Contador from './components/Contador';
import Plataformas from './components/Plataformas';
import ValidarProps from './components/ValidarProps';
import Evento from './components/Evento';
import { Avo } from './components/ComunicacaoDireta';

export default createDrawerNavigator({
    Avo: {
        screen: () => <Avo nome='João' sobrenome='Silva' />
    },

    Evento: {
        screen: Evento
    },

    ValidarProps: {
        screen: () => <ValidarProps ano={18} />
    },

    Plataformas: {
        screen: Plataformas
    },

    Contador: {
        screen: () => <Contador numeroInicial={10} />
    },

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