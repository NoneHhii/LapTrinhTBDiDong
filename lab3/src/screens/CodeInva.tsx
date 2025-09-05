import { LinearGradient } from "expo-linear-gradient";
import React from "react"
import { View, Image, StyleSheet, TextInput } from "react-native";
import { ButtonComponent } from "../components/ButtonComponent";
import { TextComponent } from "../components/TextComponent";
import { colors } from "../constants/colors";
import Icon from "react-native-vector-icons/Feather"; 
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../navigation/RootNavigation";
import { useNavigation } from "@react-navigation/native";

type StackProps = StackNavigationProp<RootStackParamList, "CodeInva">;
export const CodeInva: React.FC = () => {
    const navigation = useNavigation<StackProps>();

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
                styles={{
                    marginTop: 30,
                    marginBottom: 55,
                }}
            />
            <TextComponent
                text={"VERIFICATION"}
                styles={{
                    marginBottom: 55,
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
                    textAlign: "center",
                    marginBottom: 10
                }}
            />
            <View style={styles.inputArea}>
                <TextInput
                    style={styles.inputCode}
                    textAlign="center"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.inputCode}
                    textAlign="center"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.inputCode}
                    textAlign="center"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.inputCode}
                    textAlign="center"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.inputCode}
                    textAlign="center"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.inputCode}
                    textAlign="center"
                    autoCapitalize="none"
                />
            </View>
            <View style={{width: "80%"}}>
                <ButtonComponent
                    type="button"
                    text="VERIFY CODE"
                    styles={{
                        width: "100%",
                        backgroundColor: colors.yellowButton
                    }}
                    textColor={colors.black}
                    onPress={() => navigation.replace("Login")}
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
        width: "80%",
        height: 45,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: 5,
        marginTop: 35,
        marginBottom: 30,
    },
    inputCode: {
        width: 50,
        height: 50,
        borderWidth: 1,
        borderColor: colors.black,
        backgroundColor: 'transparent',
    }
})