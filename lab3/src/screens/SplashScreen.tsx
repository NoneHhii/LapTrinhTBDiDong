import {useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { View, Image, StyleSheet } from "react-native";
import { ButtonComponent } from "../components/ButtonComponent";
import { TextComponent } from "../components/TextComponent";
import { colors } from "../constants/colors";
import { RootStackParamList } from "../navigation/RootNavigation";
import { StackNavigationProp } from "@react-navigation/stack";

type Props = StackNavigationProp<RootStackParamList, "Splash">;

export const SplashScreen : React.FC = () => {

    const navigation = useNavigation<Props>();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace("Home");
        }, 2000)
    })

    return (
        <View style={styles.container}>
            <Image source={require("../../assets/Ellipse.png")} style={{marginBottom: 100}}/>
            <TextComponent
                text={"GROW\n YOUR BUSINESS"}
                styles={{
                    marginBottom: 80,
                    textAlign: "center"
                }}
                fontWeight = "bold"
                size={24}
            />
            <TextComponent
                text={"We will help you to grow your business using\nonline server"}
                fontWeight={"bold"}
                size={15}
                styles={{
                    textAlign: "center"
                }}
            />
            <View style={styles.btnGroup}>
                <ButtonComponent
                    text="LOGIN"
                    type="button"
                    textColor={colors.black}
                    onPress={() => console.log("login")}
                    styles={styles.btn}
                />
                <ButtonComponent
                    text="SIGNUP"
                    type="button"
                    textColor={colors.black}
                    onPress={() => console.log("signup")}
                    styles={styles.btn}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        alignItems: "center",
        // justifyContent: "center",
        backgroundColor: colors.themeBackground,
        paddingTop: 100,
    },

    btn: {
        backgroundColor: colors.yellowButton,
        width: 120
    },

    btnGroup: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 150
    }
})