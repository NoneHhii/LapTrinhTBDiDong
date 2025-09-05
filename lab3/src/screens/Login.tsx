import React from "react";
import { TextComponent } from "../components/TextComponent";
import { StyleSheet, TextInput, View } from "react-native";
import { colors } from "../constants/colors";
import Icon from "react-native-vector-icons/Feather"; 
import { ButtonComponent } from "../components/ButtonComponent";

export const Login : React.FC = () => {
    return (
        <View style={styles.container}>
            <TextComponent
                text="LOGIN"
                size={25}
                fontWeight={700}
            />
            <View style={styles.form}>

                <View style={styles.inputArea}>
                    <TextInput
                        placeholder="Email"
                        textAlign="center"
                        autoCapitalize="none"
                        style={{width:"auto"}}
                    />
                </View>

                <View style={styles.inputArea}>
                    <TextInput
                        placeholder="Password"
                        textAlign="center"
                        autoCapitalize="none"
                        style={{width: "auto"}}
                    />
                    <Icon name="eye" size={35}/>
                </View>
            </View>

            <View style={{width: "90%"}}>
                <ButtonComponent
                    text="LOGIN"
                    type="button"
                    backgroundColor={colors.redButton}
                    styles={{
                        width: "100%"
                    }}
                />
            </View>

            <View >
                <TextComponent
                    text="When you agree to terms and conditions"
                />
                <TextComponent
                    text="For got your password?"
                />
                <TextComponent
                    text="Or login with"
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
        backgroundColor: colors.themeLogin,
        paddingTop: 100,
    },
    form: {
        width: "90%",
        marginTop: 80,
    },
    inputArea: {
        backgroundColor: colors.gray,
        width: "100%",
        height: 45,
        flexDirection: "row",
        alignItems: "center",
        padding: 5,
        marginTop: 10,
        marginBottom: 10,
        justifyContent: "space-between",
    },

    inputText: {
        backgroundColor: colors.gray,
    }
})