import { useState } from "react"
import { Image, Keyboard, View } from "react-native"
import { Form } from "../../components/Form"
import { TaskInfo } from "../../components/TaskInfo"
import { Task } from "../../components/TaskItem/model/task.model"
import { TaskList } from "../../components/TaskList"
import { showToast } from "../../utils/toast"
import { styles } from "./styles"

export const Home = () => {
    const [tasks, setTasks] = useState<Task[]>([]);

    const isTaskNotRecordedYet = (text: string) =>
        tasks.filter(task => task.description === text).length === 0;

    const handleAddTask = (text: string) => {
        let result = false;
        if (text.length > 0 && isTaskNotRecordedYet(text)) {
            setTasks(prev => [...prev, { description: text, done: false }])
            Keyboard.dismiss()
            result = true;
        } else {
            showToast("Tarefa já cadastrada")
        }

        return result;
    }

    const taskComparator = (t1: Task, t2: Task) =>
        t1.description > t2.description ? 1
            : t1.description < t2.description ? -1 : 0

    const handleUpdate = (task: Task, done: boolean) => {
        setTasks(prev => {
            const newList = prev.filter(t => t.description !== task.description)
            return [...newList, { ...task, done }].sort(taskComparator)
        })
    }

    const handleRemove = (text: string) => {
        setTasks(prev => prev.filter(task => task.description !== text))
    }

    const countTasks = (isDone: boolean) =>
        tasks.filter(task => task.done === isDone).length

    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../../../assets/imgs/logo.png')} />

            <View style={styles.content}>
                <Form handleAddTask={handleAddTask} />

                <View style={styles.progress}>
                    <TaskInfo
                        items={countTasks(false)}
                        title="Criadas"
                        color="#4EA8DE" />

                    <TaskInfo
                        items={countTasks(true)}
                        title="Concluídas"
                        color="#8284FA" />
                </View>

                <TaskList
                    tasks={tasks}
                    onUpdate={handleUpdate}
                    onRemove={handleRemove} />
            </View>
        </View>
    )
}