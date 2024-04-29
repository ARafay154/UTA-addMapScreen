import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppHeader, Image, Input, Label, Pressable, Scrollable } from '../../components'
import { COLOR, hp, TEXT_STYLE, commonStyles } from '../../data/StyleGuides'
import { SVG } from '../../assets/svg'
import En from '../../data/locals/En'
import { IMAGES } from '../../assets/images'

const PayoutMethodScreen = ({ navigation }) => {
    return (
        <Scrollable hasInput containerStyle={styles.container}>
            <AppHeader
                leftComp={<Pressable onPress={() => navigation.goBack()}>
                    <SVG.BackArrow />
                </Pressable>}
            />
            <View style={styles.mainScreen}>

                <Label style={styles.passwordText}>{En.getPassengers}</Label>
                <Pressable style={styles.accountStyle}>
                    <Label style={styles.bankText}>{En.bankAccount}</Label>
                    <SVG.ForwardActive />
                </Pressable>
                <View style={styles.line} />
                <Pressable style={styles.palStyle}>
                    <Image src={IMAGES.PayPal} style={styles.payPalStyle} contain />
                    <SVG.ForwardActive />
                </Pressable>
            </View>
            <Label style={styles.bottomText}>{En.bottomText1}
            <Label style={styles.utaText}>{En.utaHighlighted}</Label>
            <Label style={styles.bottomText}>{En.bottomText2}</Label>
            <Label style={styles.termsText}>{En.termsAndHighlighted}</Label>
            <Label style={styles.conditionText}>{En.conditionHighlighted}</Label>
            </Label>
        </Scrollable>
    )
}

export default PayoutMethodScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLOR.purple,
        height: hp(100)
    },
    mainScreen: {
        paddingHorizontal: '5%'
    },
    passwordText: {
        ...TEXT_STYLE.title,
    },
    accountStyle: {
        ...commonStyles.justifyView,
        paddingTop: hp(2)
    },
    bankText: {
        ...TEXT_STYLE.bigTextBold
    },
    line: {
        width: '100%',
        borderWidth: 1,
        borderColor: COLOR.lightGrey,
        marginVertical: hp(2)
    },
    payPalStyle: {
        height: hp(7),
        width: hp(7)
    },
    palStyle: {
        ...commonStyles.justifyView,
    },
    bottomText:{
        paddingHorizontal: '5%',
        ...TEXT_STYLE.smallText,
        marginTop:'auto',
        marginBottom:hp(5)
    },
    utaText:{
        ...TEXT_STYLE.smallTextBold,
        color:COLOR.pink
    },
    termsText:{
        ...TEXT_STYLE.smallTextBold,
        color:COLOR.pink,
    },
    conditionText:{
        ...TEXT_STYLE.smallTextBold,
        color:COLOR.blue
    }

   
})