import { StyleSheet, Text, View } from 'react-native'
import React, { memo, useState } from 'react'
import { COLOR, TEXT_STYLE, commonStyles, hp, wp } from '../../../data/StyleGuides'
import Pressable from '../pressable'
import { SVG } from '../../../assets/svg'
import Label from '../label'

const Counter = ({ number, setNumber, style,icon }) => {

    return (
        <View style={[styles.mainView, style]}>
            <Pressable onPress={() => setNumber(prevSeats => prevSeats > 0 ? prevSeats - 1 : 0)}>
                <SVG.CounterMinus width={40} height={40} />
            </Pressable>

            
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                {icon ? (<Label style={styles.dollarSign}>$</Label>):null}
                <Label style={styles.numberText}>{number}</Label>
            </View>


            <Pressable onPress={() => setNumber((previous) => previous + 1)}>
                <SVG.CounterPlus width={40} height={40} />
            </Pressable>
        </View>
    )
}

export default memo(Counter)

const styles = StyleSheet.create({
    mainView: {
        ...commonStyles.justifyView
    },
    numberText: {
        ...TEXT_STYLE.text,
        fontSize: hp(12),
        width: wp(25),
        textAlign: 'center',
    },
    dollarSign: {
        ...TEXT_STYLE.text,
        fontSize: hp(12),
        textAlign: 'center',
    },

    totalPassenger: {
        
    },
})