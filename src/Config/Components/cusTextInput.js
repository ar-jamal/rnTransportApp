import { StyleSheet, View } from "react-native"
import { TouchableOpacity, Text, TextInput } from "react-native"
import cusColors from "../../Utils/colors"

export default function CusTextInput({
    label, labelColor, marginLeft, fontSize, onChangeText, value, onDelete
}) {
    return (
        <>
            <Text style={{
                color: labelColor ?? "powderblue",
                marginLeft: marginLeft ?? 22,
                marginTop: 4,
                fontSize: fontSize ?? 12,
            }}>{label}</Text>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={value}
                />
                <TouchableOpacity onPress={onDelete}>
                    <Text style={styles.delText}>x</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    inputView: {
        flexDirection: "row",
        width: "100%",
        height: 45,
        padding: 4,
        justifyContent: "space-evenly",
        alignItems: "center",
        margin: 6,
        borderTopLeftRadius: 20,
        backgroundColor: "lightgreen",
    },
    input: {
        width: "87%",
        padding: 5,
        // backgroundColor: "yellow"
    },
    delText: {
        fontSize: 16,
        borderWidth: 1,
        borderRadius: 30,
        /* padding: 12, */
        height: 22,
        paddingHorizontal: 6,
    }
})
