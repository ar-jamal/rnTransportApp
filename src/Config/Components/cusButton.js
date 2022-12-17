import { StyleSheet } from "react-native"
import { TouchableOpacity, Text } from "react-native"
import cusColors from "../../Utils/colors"

export default function CusButton({
    title, onPress, style, styleChild,
}) {
    return (
        <TouchableOpacity
            style={[styles.button, style]}
            onPress={onPress}
        >
            <Text style={[styles.buttonText, styleChild]}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        // width: '40%',
        height: 40,
        marginTop: 50,
        marginBottom: 35,
        fontSize: 18,
        alignItems: 'center',
        justifyContent: 'center',
        // borderBottomLeftRadius: 20,
        // borderBottomWidth: 2,
        // backgroundColor: cusColors.melaWhiteGreen,
    },
    buttonText: {
        // color: cusColors.greenShadeDark,
        fontSize: 14,
        fontWeight: 'bold',
        // margin: 15,
    },
})