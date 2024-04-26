import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Checkbox, Image, Input, Label, Pressable, Scrollable } from '../../../components'
import { COLOR, hp, TEXT_STYLE, commonStyles } from '../../../data/StyleGuides'
import { IMAGES } from '../../../assets/images'
import En from '../../../data/locals/En'
import { KEYBOARD_TYPE, SCREEN, TAB } from '../../../data/enums'

const LoginScreen = ({ navigation }) => {
    return (
        <Scrollable containerStyle={{ height: hp(100) }}>
            <View style={styles.container}>
                <View>

                    <Image src={IMAGES.SmallLogo} style={styles.logoView} />
                    <Label style={styles.emailText}>{En.email}</Label>
                    <Input
                        placeholder={En.enterEmail}
                        keyboard={KEYBOARD_TYPE.EMAIL}
                    />
                    <Label style={styles.passwordText}>{En.password}</Label>
                    <Input
                        isPassword
                        placeholder={En.enterPassword}
                    />
                    <View style={styles.checkView}>
                        <Checkbox
                            text={En.rememberDays}
                            checkStyle={{ marginVertical: hp(1) }}
                        />
                        <Pressable>
                            <Label style={{ ...TEXT_STYLE.smallText }}>{En.forgotPassword}</Label>
                        </Pressable>
                    </View>
                    <View style={styles.footer}>
                        <Button
                        onPress={()=>navigation.navigate(TAB.BOTTOM)}
                            text={En.signIn}
                        />
                        <View style={{ ...commonStyles.horizontalView, alignSelf: 'center' }}>
                            <Label>{En.donotAccount}</Label>
                            <Pressable onPress={()=>navigation.navigate(SCREEN.SIGN_UP)}>
                                <Label style={styles.signUpText}> {En.signUp}</Label>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </View>
        </Scrollable>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        paddingHorizontal: '5%',
        backgroundColor: COLOR.purple,
    },
    logoView: {
        alignSelf: 'center',
        height: hp(16),
        width: hp(16),
    },
    emailText: {
        ...TEXT_STYLE.textBold,
        marginTop: hp(3),
        marginBottom: hp(1)
    },
    passwordText: {
        ...TEXT_STYLE.textBold,
        marginVertical: hp(1),
    },
    checkView: {
        ...commonStyles.justifyView
    },
    footer: {
        position: 'relative',
        top: hp(40),
    },
    signUpText: {
        color: COLOR.blue
    }
})