import { LinearGradient } from "expo-linear-gradient";
import React from "react"
import { View, Image, StyleSheet } from "react-native";
import { ButtonComponent } from "../components/ButtonComponent";
import { TextComponent } from "../components/TextComponent";
import { colors } from "../constants/colors";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../navigation/RootNavigation";
import { useNavigation } from "@react-navigation/native";

type stackProp = StackNavigationProp<RootStackParamList, "Home">;

export const HomeScreen: React.FC = () => {
    const navigation = useNavigation<stackProp>();

    return (
        <LinearGradient 
            style={styles.container}
            colors={[colors.white, "#37D6F8", colors.themeBackground]}
            start={{x: 0.5, y: 0}}
            end={{x: 0.5, y: 1}}
            locations={[0, 0.8, 0.95]}
        >
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
            <ButtonComponent
                type="text"
                text="HOW WE WORK?"
                styles={{fontSize: 18, fontWeight: "700"}}
                onPress={() => navigation.replace("ForgetPass")}
            />
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

    btnGroup: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 100,
        marginBottom: 30,
    }
})