import { Alert, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { passwordData, payoutData, rateData, ratingData } from '../../data/dummyData'
import { AccountDataScreen, Label, Pressable } from '..'
import { COLOR, hp, TEXT_STYLE } from '../../data/StyleGuides'
import En from '../../data/locals/En'
import { deleteAccount, signOut } from '../../services/AuthServices'
import auth from '@react-native-firebase/auth';

const AccountProfile = () => {
    const user = auth().currentUser;
    const userEmail = user ? user.email : '';

    const handleCloseAccount = () => {
        deleteAccount(userEmail)
            .then(() => {
                Alert.alert("Account deleted successfully")
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <View style={styles.mainScreen}>
            {ratingData?.map((item, index) => (
                <AccountDataScreen item={item} key={index} />
            ))}
            <View style={styles.line} />
            {passwordData?.map((item, index) => (
                <AccountDataScreen item={item} key={index} />
            ))}
            <View style={styles.line} />
            {payoutData?.map((item, index) => (
                <AccountDataScreen item={item} key={index} />
            ))}
            <View style={styles.line} />
            {rateData?.map((item, index) => (
                <AccountDataScreen item={item} key={index} />
            ))}
            <View style={styles.line} />
            <Pressable onPress={()=>signOut()}>
                <Label style={styles.logoutText}>{En.logOut}</Label>
            </Pressable>
            <Pressable style={{ paddingTop: hp(1) }} onPress={()=>handleCloseAccount()}>
                <Label style={styles.logoutText}>{En.closeAccount}</Label>
            </Pressable>

        </View>
    )
}

export default AccountProfile

const styles = StyleSheet.create({
    mainScreen: {
        paddingHorizontal: '5%',
        paddingVertical: hp(1)
    },
    line: {
        width: '100%',
        borderWidth: 1,
        borderColor: COLOR.lightGrey,
        marginVertical: hp(2)
    },
    logoutText: {
        ...TEXT_STYLE.bigTextBold,
        color: COLOR.blue
    }
})