import React, {ReactNode} from "react";
import {StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, View } from "react-native";
import { colors } from "../constants/colors";
import { fontFamilies } from "../types/fontFamilies";
import { TextComponent } from "./TextComponent";

interface ButtonProps {
    text: string,
    backgroundColor?: string,
    textColor?: string,
    borderRadius?: number,
    onPress?: () => void,
    disable?: boolean,
    iconFlex?: 'left' | 'right',
    type: 'button' | 'link' | 'text',
    icon?: ReactNode,
    textFont?: string,
    styles?: StyleProp<TextStyle>,
}

export const ButtonComponent : React.FC<ButtonProps> = ({
    text,
    backgroundColor = "#2196F3",
    textColor = colors.white,
    borderRadius,
    onPress,
    disable = false,
    iconFlex,
    type,
    icon,
    textFont,
    styles,
}) => {
    return type === 'button' ? (
        <View style={{alignItems: 'center'}}>
            <TouchableOpacity 
                style={[
                    styless.button,
                    {backgroundColor},
                    disable && styless.disable,
                    styles,
                ]}
                onPress = {onPress}
                disabled = {disable}
            >
                {icon && iconFlex === 'left' && icon}
                <TextComponent
                    text={text}
                    color={textColor}
                    styles={[styless.text]}
                    flex={icon && iconFlex === 'right' ? 1 : 0}
                    font = {textFont ?? fontFamilies.medium}
                />
            </TouchableOpacity>
        </View>
    ) : (
        <TouchableOpacity onPress={onPress}>
            <TextComponent
                text={text}
                flex={0}
                color={type === 'link' ? colors.gray : colors.black}
                styles={styles}
            />
        </TouchableOpacity>
    )
}

const styless = StyleSheet.create({
    button: {
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 8,
    },
    text: {
        fontSize: 16,
        fontWeight: "bold",
    },
    disable: {
        opacity: 0.5,
    }
})