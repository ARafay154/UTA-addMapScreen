import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { COLOR, TEXT_STYLE, commonStyles, hp, wp } from '../../data/StyleGuides'
import { DatePicker } from '../reusables'
import { SVG } from '../../assets/svg'

const TimePicker = () => {
    return (
        <LinearGradient
            colors={[COLOR.blue, COLOR.pink]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.container}>

            <DatePicker mode={"time"} />

            <SVG.DownArrow />



        </LinearGradient>
    )
}

export default TimePicker

const styles = StyleSheet.create({
    container: {
        height: hp(8),
        marginHorizontal: wp(7),
        borderRadius: wp(10),
        flexDirection: 'row',
        ...commonStyles.center,
        marginVertical: hp(3)
    },
    heading: {
        ...TEXT_STYLE.text,
        textAlign: 'center',
        width: "90%",
        fontSize: hp(8),
        lineHeight: hp(10)
    },
})