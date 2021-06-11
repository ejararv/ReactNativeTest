import React from 'react'
import {View, StyleSheet,TextInput, Button, TextInputComponent}  from 'react-native'

export const AddItem = props => {
    return(
        <View style={styles.block}>
            <TextInput style={styles.input}></TextInput>
            <Button title='Add'></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    input:{
        width: '80%',
        padding: 10,
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: 'blue'
    }
})