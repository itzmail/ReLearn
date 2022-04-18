import React, { useContext, useReducer, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { GlobalContext } from './context'


export default () => {
    const { count, dispatch } = useContext(GlobalContext)
    return (
        <View>
            <Button title='Increment' onPress={() => dispatch({ type: 'INCREMENT' })} />
            <Text style={{ fontSize: 20, marginVertical: 10 }}>{count}</Text>
            <Button title='Increment' onPress={() => dispatch({ type: 'DECREMENT' })} />
        </View>
    )
}