import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { hp, COLOR, commonStyles, TEXT_STYLE } from '../../data/StyleGuides';
import { Label, Pressable } from '..';
import { SVG } from '../../assets/svg';
import { SCREEN, TAB } from '../../data/enums';

const LeavingView = ({ item }) => {
    const { text, icon, subText,route } = item
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <Pressable style={styles.mainView} onPress={()=>navigation.navigate(route, { from: text})}>
                <View style={styles.textContainer}>
                    <Label style={styles.textStyle}>{text}</Label>
                    <Label style={styles.subStyle}>Arrivals, {subText}</Label>
                </View>
                <SVG.ForwardIcon />
            </Pressable>
            <View style={styles.line}/>
        </View>
    )
}

export default LeavingView

const styles = StyleSheet.create({
    container: {
        height: hp(7),
        // backgroundColor: 'red',
        marginTop: hp(1)
    },
    mainView: {
        ...commonStyles.justifyView,
        paddingHorizontal:'5%',
    },
    textContainer:{
        marginTop:hp(1)
    },
    textStyle:{
        ...TEXT_STYLE.textBold
    },
    subStyle:{
        ...TEXT_STYLE.textMedium,
        color:COLOR.lightGrey
    },
    line: {
        width: '100%',
        borderWidth: 0.7,
        borderColor: COLOR.lightGrey,
        marginVertical: hp(1)
    },
})
