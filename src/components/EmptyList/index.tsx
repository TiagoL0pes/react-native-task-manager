import { Image, Text, View } from "react-native"
import { styles } from "./styles"

export const EmptyList = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.empty} source={require('../../../assets/imgs/empty.png')} />
            <Text style={styles.title}>
                Você ainda não tem tarefas cadastradas
            </Text>
            <Text style={styles.description}>
                Crie tarefas e organize seus itens a fazer
            </Text>
        </View>
    )
}