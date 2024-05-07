import { StyleSheet, TextInput, View } from 'react-native';
import React, { memo,useState } from 'react';
import If from '../if';
import { hp, commonStyles, TEXT_STYLE, COLOR } from '../../../data/StyleGuides';
import LinearGradient from 'react-native-linear-gradient';
import SvgItem from '../svgItem';
import Pressable from '../pressable';

const Input = (props) => {
    const { placeholder, iconName, value, onChange, style, keyboard, isPassword, multiline, inputStyle, placeholderTextColor, iconSize, styleContainer } = props;
    const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    
    return (
        <LinearGradient colors={[COLOR.blue, COLOR.pink]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={[styles.container, style]}>
            <View style={[styles.innerContainer, styleContainer]}>
                <TextInput
                    placeholder={placeholder}
                    placeholderTextColor={placeholderTextColor ? placeholderTextColor : COLOR.white}
                    value={value}
                    onChangeText={x => onChange && onChange(x)}
                    style={[styles.input, iconName && { borderRightWidth: 0.2, marginRight: hp(1.4) }, multiline && { textAlignVertical: 'top' }, inputStyle]}
                    keyboardType={keyboard}
                    multiline={multiline}
                    secureTextEntry={isPassword && !showPassword}
                    cursorColor={COLOR.white}
                    textAlign="left" // Set the text alignment to left
                />
                <If condition={iconName}>
                    <Pressable onPress={toggleShowPassword}>
                        <SvgItem name={iconName} size={iconSize} />
                    </Pressable>
                </If>
            </View>
        </LinearGradient>
    );
};

export default memo(Input);

const styles = StyleSheet.create({
    container: {
        height: hp(5.5),
        width: '100%',
        borderRadius: hp(3),
        ...commonStyles.center,
    },
    innerContainer: {
        flex: 1,
        paddingHorizontal: '5%',
        ...commonStyles.horizontalView,
        borderRadius: hp(0.8),
        overflow: 'hidden',
    },
    input: {
        flex: 1,
        ...TEXT_STYLE.textMedium,
        color: COLOR.white,
        borderRightColor: 'grey',
        textAlign: 'left', // Ensure text starts from the left side
    },
});
