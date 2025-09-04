import { LinearGradient } from "expo-linear-gradient";
import React from "react"
import { View, Image, StyleSheet, TextInput } from "react-native";
import { ButtonComponent } from "../components/ButtonComponent";
import { TextComponent } from "../components/TextComponent";
import { colors } from "../constants/colors";
import Icon from "react-native-vector-icons/Feather"; 

export const CodeInva: React.FC = () => {
    return (
        <LinearGradient
            style={styles.container}
            colors={[colors.white, "#37D6F8", colors.themeBackground]}
            start={{x: 0.5, y: 0}}
            end={{x: 0.5, y: 1}}
            locations={[0, 0.8, 0.95]}
        >
            <TextComponent
                text="CODE"
                size={60}
                fontWeight="700"
            />
            <TextComponent
                text={"VERIFICATION"}
                styles={{
                    marginBottom: 45,
                    textAlign: "center"
                }}
                fontWeight = "700"
                size={20}
            />
            <TextComponent
                text={"Enter ontime password sent on\n++849092605798"}
                fontWeight={"bold"}
                size={15}
                styles={{
                    textAlign: "center"
                }}
            />
            <View style={styles.inputArea}>
                <Icon name="mail" size={30}/>

                <TextInput
                    placeholder="Email"
                    textAlign="center"
                    autoCapitalize="none"
                />
            </View>
            <View style={{width: "80%"}}>
                <ButtonComponent
                    type="button"
                    text="NEXT"
                    styles={{
                        width: "100%",
                        backgroundColor: colors.yellowButton
                    }}
                    textColor={colors.black}
                />
            </View>
        </LinearGradient>
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

    inputArea: {
        backgroundColor: colors.gray,
        width: "80%",
        height: 45,
        flexDirection: "row",
        alignItems: "center",
        padding: 5,
        marginTop: 30,
        marginBottom: 40,
    }
})