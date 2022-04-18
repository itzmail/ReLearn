import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { GlobalContext } from './context';

export default ({ navigation }) => {
    const { value, setValue, count } = useContext(GlobalContext);

    return (
        <View>
            <Text>Home</Text>
            <Text>{value}</Text>
            <Text>counter : {count}</Text>
            <Button title='Change Value' onPress={() => { setValue('Home Screen') }} />
            <Button title='About' onPress={() => { navigation.navigate('ABOUT') }} />
            <Button title='Counter' onPress={() => { navigation.navigate('COUNTER') }} />
        </View>
    )
}