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

type StackProp = StackNavigationProp<RootStackParamList, "ForgetPass">;

export const ForgetPassword: React.FC = () => {
    const navigation = useNavigation<StackProp>();

    return (
        <LinearGradient
            style={styles.container}
            colors={[colors.white, "#37D6F8", colors.themeBackground]}
            start={{x: 0.5, y: 0}}
            end={{x: 0.5, y: 1}}
            locations={[0, 0.8, 0.95]}
        >
            <Image source={require("../../assets/lock.png")} style={{marginBottom: 45}}/>
            <TextComponent
                text={"FORGET\nPASSWORD"}
                styles={{
                    marginBottom: 45,
                    textAlign: "center"
                }}
                fontWeight = "bold"
                size={24}
            />
            <TextComponent
                text={"Provide your account’s email for which you\n want to reset your password"}
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
                    onPress={() => navigation.replace("CodeInva")}  
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