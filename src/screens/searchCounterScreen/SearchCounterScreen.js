import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { COLOR, TEXT_STYLE, commonStyles, hp, wp } from '../../data/StyleGuides'
import { AppHeader, Button, Counter, Label, Pressable } from '../../components'
import { SVG } from '../../assets/svg'
import En from '../../data/locals/En'
import { SCREEN, TAB } from '../../data/enums'

const SearchCounterScreen = ({ navigation }) => {
    const [number, setNumber] = useState(0)
    return (
        <View style={styles.container}>
            <AppHeader
                leftComp={<Pressable onPress={() => navigation.goBack()}><SVG.Cross /></Pressable>}
            />
            <Label style={styles.titleText}>{En.numberOfSeat}</Label>
            <View style={styles.subContainer}>

                <Counter number={number} setNumber={setNumber} icon={false}/>
                <View style={styles.footer}>

                    <Button
                        text={En.confirm}
                        onPress={() => navigation.navigate(TAB.SEARCH, { number })}
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