import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native"
import { Input } from "../Input"
import { styles } from './styles';

type Props = { handleAddTask: (text: string) => boolean }

export const Form = ({ handleAddTask }: Props) => {
    const [text, setText] = useState('');
    const [active, setActive] = useState(false);

    return (
        <View style={styles.container}>
            <Input text={text} setText={setText} />
            <TouchableOpacity
                style={[styles.addButton, active ? styles.addButtonActive : null]}
                onPress={() => {
                    const result = handleAddTask(text);
                    result && setText('');
                }}
                onPressIn={() => setActive(true)}
                onPressOut={() => setActive(false)}>
                <Text style={styles.addButtonText}>+</Text>
            </TouchableOpacity>
        </View>
    )
}