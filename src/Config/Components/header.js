import React from "react"
import { View, ImageBackground, StyleSheet } from "react-native"

export default function CusHeader() {
    return (
        <View style={styles.headerView}>
            <ImageBackground resizeMode="stretch"
                source={require("../../Utils/Images/background02.png")}>
                <View style={styles.bgColorOverlap}>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    headerView: {
        width: "100%",
        maxHeight: "25%",
        minHeight: "5%"
    },
    bgColorOverlap: {
        width: "100%",
        height: "100%",
        backgroundColor: "#9ACD3230"
    },
})