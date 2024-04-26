import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Label, Pressable, SvgItem } from '..'
import { hp, commonStyles, TEXT_STYLE, COLOR } from '../../data/StyleGuides'

const VerifyProfileData = ({ item }) => {
    const { text, icon } = item
    return (
        <View style={styles.mainView}>
            <Pressable style={styles.container}>
                {icon}
                <Label style={styles.textView}>{text}</Label>
            </Pressable>
        </View>
    )
}

export default VerifyProfileData

const styles = StyleSheet.create({
    mainView: {

    },
    container: {
        marginTop: hp(1.5),
        ...commonStyles.horizontalView
    },
    textView: {
        paddingHorizontal: '2%',
        ...TEXT_STYLE.bigTextMedium,
        color: COLOR.blue
    }
})