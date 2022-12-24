
import { FlatList, View } from "react-native"
import { EmptyList } from "../EmptyList"
import { TaskItem } from "../TaskItem"
import { Task } from "../TaskItem/model/task.model"
import { styles } from "./styles"

type Props = {
    tasks: Task[],
    onUpdate: (task: Task, done: boolean) => void;
    onRemove: (text: string) => void;
}

export const TaskList = ({ tasks, onUpdate, onRemove }: Props) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={tasks}
                keyExtractor={item => item.description}
                renderItem={render => (
                    <TaskItem
                        task={render.item}
                        onUpdate={onUpdate}
                        onRemove={onRemove} />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (<EmptyList />)}
            />

        </View>
    )
}
