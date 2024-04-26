import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { hp, COLOR, commonStyles, TEXT_STYLE } from '../../data/StyleGuides';
import { Label } from '..';
import { SVG } from '../../assets/svg';

const LeavingView = ({ item }) => {
    const { text, icon, subText } = item
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <View style={styles.mainView}>
                <View style={styles.textContainer}>
                    <Label style={styles.textStyle}>{text}</Label>
                    <Label style={styles.subStyle}>{subText}</Label>
                </View>
                <SVG.ForwardIcon />
            </View>
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
        ...TEXT_STYLE.textMedium
    },
     line: {
            width: '100%',
            borderWidth: 0.7,
            borderColor: COLOR.lightGrey,
            marginVertical: hp(1)
        },
})