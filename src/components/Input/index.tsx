import { useState } from "react";
import { TextInput } from "react-native";
import { styles } from "./styles";

type Props = {
    text: string,
    setText: (value: string) => void;
}

export const Input = ({ text, setText }: Props) => {
    const [focus, setFocus] = useState(false)

    return (
        <TextInput
            style={[styles.input, focus ? styles.active : null]}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#808080"
            onChangeText={value => setText(value.trim())}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            value={text}
        />
    )
}