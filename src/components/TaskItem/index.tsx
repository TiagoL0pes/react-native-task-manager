import { useState } from 'react';
import { Text, View } from "react-native";
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { RemoveButton } from '../RemoveButton';
import { Task } from './model/task.model';
import { styles } from './styles';

type Props = {
    task: Task,
    onUpdate: (task: Task, done: boolean) => void;
    onRemove: (text: string) => void;
}

export const TaskItem = ({ task, onUpdate, onRemove }: Props) => {
    const [done, setDone] = useState(false);

    return (
        <View style={[styles.container, done ? styles.containerDone : null]}>
            <BouncyCheckbox
                fillColor={done ? '#5E60CE' : '#4EA8DE'}
                onPress={(isChecked: boolean) => {
                    setDone(isChecked)
                    onUpdate(task, isChecked)
                }}
            />
            <Text style={[styles.description, done ? styles.done : null]}>
                {task.description}
            </Text>
            <RemoveButton text={task.description} onRemove={onRemove} />
        </View>
    )
}