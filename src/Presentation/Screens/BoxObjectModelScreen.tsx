import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
        {/* <Text style={styles.title}>Box Object Screen</Text>  */}
        <View style={styles.purpleBox}></View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'navy',
        height: '100%',
    },
    title: {
        fontSize: 40,
        color: 'white',
        borderWidth: 10,
        paddingHorizontal: 30,
        padding: 12,
    },
    purpleBox: {
        height: 30,
        backgroundColor: 'purple',
        //margin: 20,
        marginHorizontal: 20,
        marginVertical: 50,
        },
})