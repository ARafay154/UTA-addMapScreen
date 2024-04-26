import { StyleSheet, View } from 'react-native'
import React, { memo } from 'react'
import ShortBtn from '../shortBtn'
import { COLOR, hp, wp, TEXT_STYLE, commonStyles } from '../../../data/StyleGuides'

const ToggleRideView = ({ active, setActive, style }) => {
    return (
        <View style={[styles.container, style]}>
            <ShortBtn
                text={'All'}
                style={[styles.buttonStyle, active == 0 && styles.activeButton]}
                textStyle={[styles.textStyle, active == 0 && styles.activeText]}
                onPress={() => setActive(0)}
            />
            <ShortBtn
                text={'Carpool'}
                style={[styles.buttonStyle, active == 1 && styles.activeButton]}
                textStyle={[styles.textStyle, active == 1 && styles.activeText]}
                onPress={() => setActive(1)}
            />
             <ShortBtn
                text={'Bus'}
                style={[styles.buttonStyle, active == 2 && styles.activeButton]}
                textStyle={[styles.textStyle, active == 2 && styles.activeText]}
                onPress={() => setActive(2)}
            />
        </View>
    )
}

export default memo(ToggleRideView)

const styles = StyleSheet.create({
    container: {
        height: hp(6.7),
        // borderColor: COLOR.pink,
        borderBottomWidth: 1.2,
        backgroundColor: COLOR.purple,
        borderColor: COLOR.lightGrey,
        ...commonStyles.horizontalView,
        justifyContent: 'space-evenly',
        marginVertical: hp(0.5),
        marginBottom: hp(1),
    },
    buttonStyle: {
        height: hp(6.7),
        paddingHorizontal: 0,
        width: wp('40%'),
        color:'green',
        backgroundColor: null,
        paddingTop: hp(0.5),

    },
    activeButton: {
        paddingTop: hp(0.5),
        width: wp('40%'),
        borderColor: COLOR.white,
        borderBottomWidth: 1.2,
    },
    textStyle: {
        ...TEXT_STYLE.bigTextBold,
        fontSize: 16,
        color: COLOR.lightGrey,
    },
    activeText: {
        color: COLOR.white,
    },
})