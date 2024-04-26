import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppHeader, Checkbox, Label, MapForwardBtn, Pressable } from '../../components'
import { SVG } from '../../assets/svg'
import { COLOR, TEXT_STYLE, commonStyles, hp, wp } from '../../data/StyleGuides'
import En from '../../data/locals/En'
import { stopOverData } from '../../data/dummyData'
import { SCREEN } from '../../data/enums'

const StopOverScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <AppHeader
                style={styles.header}
                leftComp={<Pressable onPress={() => navigation.goBack()}>
                    <SVG.BackArrowActive />
                </Pressable>}
            />

            <Label style={styles.heading}>{En.StopOver_Screen_Title}</Label>

            {
                stopOverData.map((item, index) => (
                    <View style={styles.locationBlock} key={index}>
                        <Label style={styles.locName}>{item.name}</Label>
                        <Checkbox />
                    </View>
                ))
            }

            <Pressable style={styles.newCityBlock}>
                <Label style={styles.newCityText}>{En.Add_city}</Label>
            </Pressable>

            <MapForwardBtn onPress={() => navigation.navigate(SCREEN.BEST_PLACES)} />
        </View>
    )
}

export default StopOverScreen

const styles = StyleSheet.create({
    container: {
        height: hp(100),
        backgroundColor: COLOR.purple
    },
    heading: {
        ...TEXT_STYLE.title,
        marginHorizontal: wp(5)
    },
    locationBlock: {
        ...commonStyles.justifyView,
        marginHorizontal: wp(5),
        paddingVertical: hp(1.5),
        borderBottomWidth: 1,
        borderColor: COLOR.lightGrey
    },
    locName: {
        ...TEXT_STYLE.bigText
    },
    newCityBlock: {
        ...commonStyles.justifyView,
        marginHorizontal: wp(5),
        paddingVertical: hp(3),
    },
    newCityText: {
        ...TEXT_STYLE.bigTextBold,
        color: COLOR.blue
    }
})