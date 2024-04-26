import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { AllRideScreen, AppHeader, BusRideScreen, CarpoolRideScreen, If, Label, Pressable, Scrollable, ToggleRideView } from '../../components'
import { COLOR, hp, commonStyles, TEXT_STYLE } from '../../data/StyleGuides'
import { SVG } from '../../assets/svg'
import En from '../../data/locals/En'

const CreateRideScreen = ({ navigation }) => {
    const [activeTab, setActiveTab] = useState(0)
    return (
        <View style={styles.container}>

            <AppHeader
                leftComp={<Pressable onPress={() => navigation.goBack()}><SVG.BackArrow /></Pressable>}
                centerComp={
                    <View>
                        <View style={styles.headerStyle}>
                            <Label style={styles.forwardToStyle}>{En.machesterAirport}</Label>
                            <SVG.MoveForward />
                            <Label style={styles.forwardFromStyle}>{En.machesterAirport}</Label>
                        </View>
                        <Label style={{ color: COLOR.lightGrey }}>{En.todayPassenger}</Label>
                    </View>

                }
            />

            <ToggleRideView active={activeTab} setActive={setActiveTab} />
            <Scrollable containerStyle={styles.mainView}>

            <If condition={activeTab == 0}>
                <AllRideScreen />
            </If>
            <If condition={activeTab == 1}>
                <CarpoolRideScreen />
            </If>
            <If condition={activeTab == 2}>
                <BusRideScreen />
            </If>

            </Scrollable>
        </View>
    )
}

export default CreateRideScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLOR.purple,
        flex: 1
    },
    mainView: {
        backgroundColor: COLOR.purple,
        paddingHorizontal:'5%',
    },
    headerStyle: {
        ...commonStyles.horizontalView
    },
    forwardToStyle: {
        ...TEXT_STYLE.textMedium,
        marginRight: hp(0.5)
    },
    forwardFromStyle: {
        ...TEXT_STYLE.textMedium,
        marginLeft: hp(0.5)
    }
})