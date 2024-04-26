import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { passwordData, payoutData, rateData, ratingData } from '../../data/dummyData'
import { AccountDataScreen, Label, Pressable } from '..'
import { COLOR, hp, TEXT_STYLE } from '../../data/StyleGuides'
import En from '../../data/locals/En'

const AccountProfile = () => {
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
            <Pressable>
                <Label style={styles.logoutText}>{En.logOut}</Label>
            </Pressable>
            <Pressable style={{ paddingTop: hp(1) }}>
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