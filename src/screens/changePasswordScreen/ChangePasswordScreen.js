import { StyleSheet, Text, View, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { AppHeader, Button, Input, Label, Pressable, Scrollable } from '../../components'
import { COLOR, hp, TEXT_STYLE } from '../../data/StyleGuides'
import { SVG } from '../../assets/svg'
import En from '../../data/locals/En'
import { useIsFocused } from '@react-navigation/native';
import { changePassword } from '../../services/AuthServices'


const ChangePasswordScreen = ({ navigation }) => {
    const isFocused = useIsFocused();
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");
    const [loading, setLoading] = useState(false);

    // useEffect to clear fields when screen is focused
    useEffect(() => {
        if (!isFocused) {
            setCurrentPassword('');
            setNewPassword('');
            setConfirmPassword('');
        }
    }, [isFocused]);

    const handleChangePassword = async () => {
        setLoading(true);
        await changePassword(currentPassword, newPassword, confirmNewPassword)
            .then(() => {
                setLoading(false);
                Alert.alert("Password changed successfully");
                navigation.goBack();
            })
            .catch((error) => {
                setLoading(false);
                Alert.alert("Error changing password", error);
            });
    };

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
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e)}
                />
                <Label style={styles.currentPasswordText}>{En.newPassword}</Label>
                <Input
                    iconName={SVG.Seen}
                    isPassword
                    value={newPassword}
                    onChange={(e) => setNewPassword(e)}
                />
                <Label style={styles.currentPasswordText}>{En.confirmPassword}</Label>
                <Input
                    iconName={SVG.Seen}
                    isPassword
                    value={confirmNewPassword}
                    onChange={(e) => setConfirmNewPassword(e)}
                />

                <Button
                    text={"Change Password"}
                    onPress={()=>handleChangePassword()}
                    isLoading={loading}
                    style={styles.button}
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
    mainScreen: {
        paddingHorizontal: '5%'
    },
    passwordText: {
        ...TEXT_STYLE.title
    },
    atleastText: {
        textAlign: 'center',
        paddingHorizontal: '5%',
        paddingVertical: '2%',
        color: COLOR.lightGrey,
        ...TEXT_STYLE.textBold
    },
    currentPasswordText: {
        ...TEXT_STYLE.bigTextBold,
        marginVertical: hp(1)
    },
    button: {
        marginTop:hp(10)
    },
    buttonText: {
        color: COLOR.white,
        ...TEXT_STYLE.mediumTextBold,
    }
})
