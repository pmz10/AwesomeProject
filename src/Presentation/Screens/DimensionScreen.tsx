import { View, Text, StyleSheet, useWindowDimensions } from "react-native"
import { Dimensions } from "react-native"

//const { width, height } = Dimensions.get('window')

export const DimensionScreen = () => {

    const { width, height } = useWindowDimensions()

    return (
        <View>
            <View style={styles.container}>
                <View style={{ ...styles.purpleBox, width: width * 0.8 }}></View>
            </View>

            <Text style={styles.title}>Width: {width} Height: {height}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 300,
        backgroundColor: 'red',
    },
    purpleBox: {
        backgroundColor: '#5856D6',
        height: '50%',
        width: '50%'
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
        color: 'black'
    }
})