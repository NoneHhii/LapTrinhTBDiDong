import React from "react"
import { StyleSheet, TextInput, View, Image } from "react-native";
import { TextComponent } from "../components/TextComponent";
import { colors } from "../constants/colors";
import Icon from "react-native-vector-icons/Feather"
import { RadioBtnComponent } from "../components/RadioBtnComponent";
import { ButtonComponent } from "../components/ButtonComponent";

export const Register : React.FC = () => {
    return (
        <View style={styles.container}>
            <TextComponent
                text="REGISTER"
                size={25}
                fontWeight="700"
            />

            <View style={styles.form}>
                <TextInput
                    placeholder="Name"
                    autoCapitalize="none"
                    style={styles.input}
                />

                <TextInput
                    placeholder="Phone"
                    autoCapitalize="none"
                    style={styles.input}
                />

                <TextInput
                    placeholder="Email"
                    autoCapitalize="none"
                    style={styles.input}
                />

                <View style={styles.pwInput}>
                    <TextInput
                        placeholder="Password"
                        autoCapitalize="none"
                        style={{
                            fontWeight: "400",
                            flex: 1,
                        }}
                    />

                    <Icon name="eye" size={30} />
                </View>

                <TextInput
                    placeholder="Birthday"
                    autoCapitalize="none"
                    style={styles.input}
                />

                <View style={{
                    
                }}>
                    <RadioBtnComponent
                        options={["Male", "Female"]}
                        onSelect={() => {}}
                    />
                </View>
            </View>

            <View style={{width: "100%", marginTop: 30}}>
                <ButtonComponent
                    text="REGISTER"
                    type="button"
                    backgroundColor={colors.redButton}
                    styles={{
                        width: "90%"
                    }}
                />
            </View>

            <TextComponent
                text="When you agree to terms and conditions"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        alignItems: "center",
        // justifyContent: "center",
        backgroundColor: colors.white,
        paddingTop: 100,
    },

    form: {
        width: "90%",
        marginTop: 50,
    },

    input: {
        height: 45,
        fontWeight: "400",
        // flex: 1,
        backgroundColor: colors.themeLogin,
        marginBottom: 20,
    },

    pwInput: {
        flexDirection: "row",
        backgroundColor: colors.themeLogin,
        marginBottom: 20,
        justifyContent: "space-evenly",
        alignItems: "center",
        height: 45,
        paddingRight: 10,
    }
})