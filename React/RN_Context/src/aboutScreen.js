import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { GlobalContext } from './context';

export default ({ navigation }) => {
    const { value, setValue } = useContext(GlobalContext);

    return (
        <View>
            <Text>About Screen</Text>
            <Text>{value}</Text>
            <Text>{counter}</Text>
            <Button title='Change Value' onPress={() => { setValue('About Screen') }} />
            <Button onPress={() => navigation.goBack()} title="Go Back" />
        </View>
    )
}