import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Button, Checkbox, Image, Input, Label, Pressable, Scrollable } from '../../../components'
import { COLOR, hp, TEXT_STYLE, commonStyles } from '../../../data/StyleGuides'
import { IMAGES } from '../../../assets/images'
import En from '../../../data/locals/En'
import { KEYBOARD_TYPE, SCREEN, TAB } from '../../../data/enums'
import auth from '@react-native-firebase/auth';
import { useIsFocused } from '@react-navigation/native'; 
import { login } from '../../../services/AuthServices'


const LoginScreen = ({ navigation }) => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const isFocused = useIsFocused();

    // useEffect to clear fields when screen is focused
    useEffect(() => {
        if (!isFocused) {
            setEmail('');
            setPassword('');
        }
    }, [isFocused]); 

    const handleLogin = () => {
        setLoading(true);
        login(email, password)
            .then(() => {
                navigation.navigate(TAB.BOTTOM);
            })
            .catch((error) => {
                Alert.alert(error);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <Scrollable containerStyle={{ height: hp(100) }}>
            <View style={styles.container}>
                <View>
                    <Image src={IMAGES.SmallLogo} style={styles.logoView} />
                    <Label style={styles.emailText}>{En.email}</Label>
                    <Input
                        placeholder={En.enterEmail}
                        keyboard={KEYBOARD_TYPE.EMAIL}
                        value={email}
                        onChange={(e) => setEmail(e)}
                    />
                    <Label style={styles.passwordText}>{En.password}</Label>
                    <Input
                        isPassword
                        placeholder={En.enterPassword}
                        value={password}
                        onChange={(e) => setPassword(e)}
                    />
                    <View style={styles.checkView}>
                        <Checkbox
                            text={En.rememberDays}
                            checkStyle={{ marginVertical: hp(1) }}
                        />
                        <Pressable onPress={()=>navigation.navigate(SCREEN.FORGOT)}>
                            <Label style={{ ...TEXT_STYLE.smallText }}>{En.forgotPassword}</Label>
                        </Pressable>
                    </View>
                    <View style={styles.footer}>
                        <Button
                            onPress={() => handleLogin()}
                            text={En.signIn}
                            isLoading={loading}
                        />
                        <View style={{ ...commonStyles.horizontalView, alignSelf: 'center' }}>
                            <Label>{En.donotAccount}</Label>
                            <Pressable onPress={() => navigation.navigate(SCREEN.SIGN_UP)}>
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
