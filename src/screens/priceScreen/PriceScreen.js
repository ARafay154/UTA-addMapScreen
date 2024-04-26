import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { AppHeader, Label, MapForwardBtn, Pressable } from '../../components'
import { SVG } from '../../assets/svg'
import { COLOR, TEXT_STYLE, commonStyles, hp, wp } from '../../data/StyleGuides'
import En from '../../data/locals/En'
import { SCREEN } from '../../data/enums'

const PriceScreen = ({ navigation }) => {

    const [price, setPrice] = useState(0)
    return (
        <View style={styles.container}>
            <AppHeader
                style={styles.header}
                leftComp={<Pressable onPress={() => navigation.goBack()}>
                    <SVG.BackArrowActive />
                </Pressable>}
            />

            <Label style={styles.heading}>{En.priceScreenHeading}</Label>

            {/* Counter Start */}

            <View style={styles.mainView}>
                <Pressable onPress={() => setPrice(prevSeats => prevSeats > 0 ? prevSeats - 1 : 0)}>
                    <SVG.CounterMinusActive width={40} height={40} />
                </Pressable>

                <Label style={styles.totalPassenger}>${price}</Label>

                <Pressable onPress={() => setPrice((previous) => previous + 1)}>
                    <SVG.CounterPlus width={40} height={40} />
                </Pressable>
            </View>
            {/* Counter End */}

            <Label style={styles.recomendBlock}>{En.recomendedPrice}</Label>
            <Label style={styles.recomendText}>{En.perfectPrice}</Label>


            <Pressable style={styles.stopPricingBlock}>
                <Label style={styles.stopPricingText}>{En.stopOver}</Label>
                <SVG.ForwardIcon />
            </Pressable>

            <MapForwardBtn onPress={() => navigation.navigate(SCREEN.RETURN)} />

        </View>
    )
}

export default PriceScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLOR.purple,
        height: hp(100),
        padding: wp(4),
    },
    heading: {
        ...TEXT_STYLE.title,
        marginHorizontal: wp(4),
    },

    recomendBlock: {
        marginHorizontal: wp(4),
        ...TEXT_STYLE.smallText,
        backgroundColor: COLOR.green,
        width: wp(45),
        paddingVertical: hp(1),
        textAlign: 'center',
        borderRadius: wp(3)
    },
    recomendText: {
        ...TEXT_STYLE.text,
        color: COLOR.lightGrey,
        marginHorizontal: wp(5),
        marginTop: hp(1)
    },
    stopPricingText: {
        ...TEXT_STYLE.text
    },
    stopPricingBlock: {
        borderTopWidth: 3,
        borderColor: COLOR.lightGrey,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: hp(3)
    },
    mainView: {
        ...commonStyles.justifyView,
        paddingHorizontal: wp(8),
    },
    totalPassenger: {
        ...TEXT_STYLE.text,
        fontSize: hp(12),
        width: wp(50),
        textAlign: 'center',
    },
})