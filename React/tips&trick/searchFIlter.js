import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TextInput, Button } from 'react-native';

const TrySearch = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchBar, setSearchBar] = useState();


    useEffect(() => {
        getData();
    }, []);

    function getData() {
        fetch('https://randomuser.me/api/?results=50')
            .then(res => res.json())
            .then(result => {
                setFilteredData(result.results)
                setData(result.results);
                // console.log(JSON.stringify(result, null, 3))
            })
            .catch(err => console.log(err.message))
    }

    function searchFilter(text) {
        if (text) {
            const newData = data.filter(item => {
                const itemData = item.name.first ? item.name.first.toUpperCase() : "".toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            })
            setFilteredData(newData);
        } else {
            setFilteredData(data);
        }
    }

    return (
        <ScrollView>
            <Text style={styles.textFriends}>Firends</Text>
            <TextInput placeholder='friends' onChangeText={input => searchFilter(input)} />
            {
                filteredData.map((item, index) => {
                    return (
                        <View key={index} style={styles.itemContainer}>
                            <Image
                                source={{ uri: item.picture.large }}
                                style={styles.image}
                            />
                            <View>
                                <Text style={styles.textName}>{item.name.first} {item.name.last}</Text>
                                <Text style={styles.textEmail}>{item.login.username}</Text>
                            </View>
                        </View>
                    )
                })
            }
        </ScrollView>
    )
}

export default TrySearch;

const styles = StyleSheet.create({
    textFriends: {
        fontSize: 20,
        textAlign: 'left',
        marginLeft: 10,
        fontWeight: 'bold',
        marginTop: 10
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
        marginTop: 10
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    textName: {
        fontSize: 17,
        marginLeft: 10,
        fontWeight: '600'
    },
    textEmail: {
        fontSize: 15,
        marginLeft: 10,
        color: 'gray'
    }
})