import { Pressable, StyleSheet, Text } from "react-native";

interface Props {
    label: string;
    onPress: () => void;
    onLongPress?: () => void;
}

export default function PrimaryButton({label, onPress, onLongPress}: Props) {
  return (
     <Pressable 
                onPress={() => onPress && onPress()}
                onLongPress={() => onLongPress && onLongPress()}
                style={({pressed}) => [
                    styles.button,
                    pressed && styles.buttoPressed
                ]}
                >
                    <Text style={{color:'white'}}>{label}</Text>
                </Pressable>
  )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#5846D6',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
    },
    buttoPressed: {
        backgroundColor: '#4746AB',
    }
})