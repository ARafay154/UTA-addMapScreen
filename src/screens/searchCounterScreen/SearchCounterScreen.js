import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { COLOR, TEXT_STYLE, commonStyles, hp, wp } from '../../data/StyleGuides'
import { AppHeader, Button, Label, Pressable } from '../../components'
import { SVG } from '../../assets/svg'
import En from '../../data/locals/En'
import { SCREEN, TAB } from '../../data/enums'

const SearchCounterScreen = ({ navigation }) => {
    const [seats, setSeats] = useState(0)
    return (
        <View style={styles.container}>
            <AppHeader
                leftComp={<Pressable onPress={() => navigation.goBack()}><SVG.Cross /></Pressable>}
            />
            <Label style={styles.titleText}>{En.numberOfSeat}</Label>
            <View style={styles.subContainer}>

                <View style={styles.mainView}>
                    <Pressable onPress={() => setSeats(prevSeats => prevSeats > 0 ? prevSeats - 1 : 0)}>
                        <SVG.CounterMinus width={40} height={40} />
                    </Pressable>

                    <Label style={{ color: COLOR.white, fontSize: hp(12), width: wp(50), textAlign: 'center' }}>{seats}</Label>

                    <Pressable onPress={() => setSeats((previous) => previous + 1)}>
                        <SVG.CounterPlus width={40} height={40} />
                    </Pressable>
                </View>
                <View style={styles.footer}>

                    <Button
                        text={En.confirm}
                        onPress={() => navigation.navigate(TAB.SEARCH, { seats })}
                    />
                </View>
            </View>
        </View>
    )
}

export default SearchCounterScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLOR.purple,
        flex: 1,
    },
    titleText: {
        ...TEXT_STYLE.smallTitleBold,
        textAlign: 'center'
    },
    mainView: {
        ...commonStyles.justifyView
    },
    subContainer: {
        paddingHorizontal: '5%',
        flex: 1,
        justifyContent: 'center'
    },
    footer: {
        position: 'relative',
        top: hp(24),

    }
})