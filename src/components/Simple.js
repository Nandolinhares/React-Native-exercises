import React from 'react';
import { Text } from 'react-native';

//export default function(props){
//    return <Text>{props.texto}</Text>
//}

export default (props) => ( [
    <Text key={1}>Arrow 1{props.texto}</Text>,
    <Text key={2}>Arrow 2 Yeah</Text>
]
);