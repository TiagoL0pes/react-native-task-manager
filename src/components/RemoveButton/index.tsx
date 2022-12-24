import { useState } from "react";
import { Alert, Image, TouchableWithoutFeedback } from "react-native";
import { showToast } from "../../utils/toast";
import { styles } from './styles';

type Props = {
    text: string,
    onRemove: (text: string) => void;
}

export const RemoveButton = ({ text, onRemove }: Props) => {
    const [active, setActive] = useState(false);

    const handleRemove = () => {
        return Alert.alert('Remover tarefa', 'Tem certeza que deseja remover a tarefa ?',
            [
                {
                    text: 'Sim',
                    onPress: () => {
                        onRemove(text)
                        showToast("A tarefa foi removida com sucesso!")
                    }
                },
                { text: 'Não', style: 'cancel' }
            ]
        )
    }

    const source = active ?
        require('../../../assets/imgs/trash-active.png') :
        require('../../../assets/imgs/trash.png');

    return (
        <TouchableWithoutFeedback
            onPress={handleRemove}
            onPressIn={() => setActive(true)}
            onPressOut={() => setActive(false)}>
            <Image
                style={styles.button}
                source={source} />
        </TouchableWithoutFeedback>
    )
}