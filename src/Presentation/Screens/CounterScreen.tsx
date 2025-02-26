import { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import PrimaryButton from "../Components/Shared/PrimaryButton";


export default function CounterScreen() {

    const [count, setCount] = useState(10);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{ count }</Text>

            <PrimaryButton
            label="Increment"
            onPress={() => setCount(count + 1)}
            onLongPress={() => setCount(0)}
            />

           
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 80,
        color: 'black',
        fontWeight: 'bold',
    },
})