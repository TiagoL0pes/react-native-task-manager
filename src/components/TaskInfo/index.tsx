import { Text, View } from "react-native";
import { styles } from "./styles";

type Props = {
    items: number;
    title: string,
    color: string
}

export const TaskInfo = ({ items = 0, title, color }: Props) => {
    return (
        <View style={styles.container}>
            <Text style={[styles.title, { color }]}>{title}</Text>
            <View style={styles.chip}>
                <Text style={styles.chipText}>{items}</Text>
            </View>
        </View>
    );
}