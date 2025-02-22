import { View, Text, StyleSheet } from 'react-native';

interface Props {
    name?: string;
}



export const HelloScreen = ({name = 'World'}) => {
    return (
        <View style={styles.container}>
            <Text numberOfLines={2} ellipsizeMode='head' style={styles.title}>Hello, {name}. Are you a Semi-God ?</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        color: 'black', // Añadir color de texto para que sea visible
        fontSize: 45,
        padding: 20,
        textAlign: 'center',
    }
})
