import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Label, Pressable, SvgItem } from '..'
import { hp, commonStyles, TEXT_STYLE, COLOR } from '../../data/StyleGuides'
import { useNavigation } from '@react-navigation/native';

const AccountDataScreen = ({ item }) => {
    const { text, icon, route } = item
    const navigation = useNavigation()
    return (
            <Pressable style={styles.container} onPress={()=>navigation.navigate(route)}>
                <Label style={styles.textView}>{text}</Label>
                {icon}
            </Pressable>
    )
}

export default AccountDataScreen

const styles = StyleSheet.create({
    container: {
        marginTop: hp(1.5),
        ...commonStyles.justifyView
    },
    textView: {
        paddingHorizontal: '2%',
        ...TEXT_STYLE.bigTextMedium,
        color: COLOR.white
    }
})