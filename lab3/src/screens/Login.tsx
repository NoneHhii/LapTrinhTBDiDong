import React from "react";
import { TextComponent } from "../components/TextComponent";
import { StyleSheet, TextInput, View, Image } from "react-native";
import { colors } from "../constants/colors";
import Icon from "react-native-vector-icons/Feather"; 
import { ButtonComponent } from "../components/ButtonComponent";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../navigation/RootNavigation";
import { useNavigation } from "@react-navigation/native";

type StackProps = StackNavigationProp<RootStackParamList, "Login">;

export const Login : React.FC = () => {
    const navigation = useNavigation<StackProps>();

    return (
        <View style={styles.container}>
            <Image 
                source={require("../../assets/eyeball.png")}
                style={{
                    width: 140,
                    height: 140,
                }}
            />
            <View style={styles.form}>

                <View style={styles.inputArea}>

                    <Icon name="user" size={30}/>

                    <TextInput
                        placeholder="Please input user name"
                        autoCapitalize="none"
                        style={{
                            // width:"auto",
                            fontSize: 18,
                            fontWeight: "400",
                            flex: 1,
                        }}
                        
                    />
                </View>

                <View style={styles.inputArea}>
                    <Icon name="lock" size={30}/>

                    <TextInput
                        placeholder="Please input password"
                        // textAlign="center"
                        autoCapitalize="none"
                        style={{
                            // width:"auto",
                            fontSize: 18,
                            fontWeight: "400",
                            flex: 1,
                        }}
                        
                    />
                    <Icon name="eye" size={35}/>
                </View>
            </View>

            <View style={{width: "90%", marginTop: 50}}>
                <ButtonComponent
                    text="LOGIN"
                    type="button"
                    backgroundColor={colors.blueButton}
                    styles={{
                        width: "100%"
                    }}
                />
            </View>

            <View style={{
                width: "80%",
                flexDirection: "row",
                alignItems: "center", 
                marginTop: 10, 
                marginBottom: 25,
                justifyContent: "space-between"
            }}>
                <ButtonComponent
                    text="Register"
                    textColor={colors.blueText}
                    type="link"
                    styles={styles.textSty}
                    onPress={() => navigation.replace("Register")}
                />
                <ButtonComponent
                    text="Forgot password?"
                    textColor={colors.blueText}
                    type="link"
                    styles={styles.textSty}
                    onPress={() => navigation.replace("ForgetPass")}
                />
            </View>

            <View style={styles.divider}>
                <View style={styles.line}/>
                <TextComponent
                    text="Other login methods"
                    styles={{
                        marginHorizontal: 10,
                    }}
                />
                <View style={styles.line}/>
            </View>

            <View style={styles.btnGroup}>
                <ButtonComponent
                    text=""
                    type="button"
                    backgroundColor={colors.fbTheme}
                    icon={
                        <Image
                            source={require("../../assets/facebook.png")}
                            style={styles.img}
                        />
                    }
                    iconFlex= "left"
                    styles={styles.btn}
                    
                />
                <ButtonComponent
                    text=""
                    type="button"
                    backgroundColor= {colors.zaloTheme}
                    icon={
                        <Image
                            source={require("../../assets/zalo.png")}
                            style={{width: 25, height: 25}}
                        />
                    }
                    iconFlex= "left"
                    styles={styles.btn}
                    
                />
                <ButtonComponent
                    text=""
                    type="button"
                    backgroundColor="transparent"
                    icon={
                        <Image
                            source={require("../../assets/google.png")}
                            style={{width: 20, height: 20}}
                        />
                    }
                    iconFlex= "left"
                    styles={[{borderWidth: 1, borderColor: colors.gray}, styles.btn]}
                    
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
        backgroundColor: colors.white,
        paddingTop: 100,
    },
    form: {
        width: "90%",
        marginTop: 80,
    },
    inputArea: {
        // backgroundColor: colors.gray,
        width: "100%",
        height: 45,
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
        marginBottom: 20,
        justifyContent: "space-between",
        borderBottomWidth: 1,
    },

    inputText: {
        backgroundColor: colors.gray,
    },

    textSty: {
        fontWeight: "400",
        marginBottom: 10,
    },

    btnGroup: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },

    btn: {
        width: 80,
        height: 50,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },

    img: {
        width: 10,
        height: 20,
    },

    divider: {
        flexDirection: "row",
        justifyContent: "center",
        width: "90%",
        alignItems: "center",
        marginBottom: 20,
    },

    line: {
        borderWidth: 1,
        flex: 1,
        height: 1,
        borderColor: colors.gray
    }
})