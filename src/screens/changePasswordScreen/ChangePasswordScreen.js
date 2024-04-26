import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppHeader, Input, Label, Pressable, Scrollable } from '../../components'
import { COLOR, hp, TEXT_STYLE } from '../../data/StyleGuides'
import { SVG } from '../../assets/svg'
import En from '../../data/locals/En'

const ChangePasswordScreen = ({ navigation }) => {
    return (
        <Scrollable hasInput containerStyle={styles.container}>
            <AppHeader
                leftComp={<Pressable onPress={() => navigation.goBack()}>
                    <SVG.BackArrow />
                </Pressable>}
            />
            <View style={styles.mainScreen}>

            <Label style={styles.passwordText}>{En.changePassword}</Label>
            <Label style={styles.atleastText}>{En.atleastCharacter}</Label>
            <Label style={styles.currentPasswordText}>{En.currentPassword}</Label>
            <Input
            iconName={SVG.Seen}
             isPassword
             placeholder={En.enterCurrentPassword}
            />
            <Label style={styles.currentPasswordText}>{En.newPassword}</Label>
            <Input
            iconName={SVG.Seen}
             isPassword
             placeholder={En.enterNewPassword}
            />
            <Label style={styles.currentPasswordText}>{En.confirmPassword}</Label>
            <Input
            iconName={SVG.Seen}
             isPassword
             placeholder={En.confirmPassword}
            />
            </View>
        </Scrollable>
    )
}

export default ChangePasswordScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLOR.purple,
        height: hp(100)
    },
    mainScreen:{
        paddingHorizontal:'5%'
    },
    passwordText:{
...TEXT_STYLE.title
    },
    atleastText:{
        textAlign:'center',
        paddingHorizontal:'5%',
        paddingVertical:'2%',
        color:COLOR.lightGrey,
        ...TEXT_STYLE.textBold
    },
    currentPasswordText:{
        ...TEXT_STYLE.bigTextBold,
        marginVertical:hp(1)
    }
})