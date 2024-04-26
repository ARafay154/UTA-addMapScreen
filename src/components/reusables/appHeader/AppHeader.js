import { StyleSheet, View } from 'react-native'
import React from 'react'
import Label from '../label'
import { COLOR, hp, TEXT_STYLE, commonStyles } from '../../../data/StyleGuides'

const AppHeader = ({ title, leftComp, rightComp, centerComp, titleStyle, style }) => {
    return (
        <View style={[styles.header, style]}>
            {leftComp ?
                leftComp :
                <View style={styles.space} />
            }

            {centerComp ?
                centerComp :
                title ?
                    <Label style={[styles.textStyle, titleStyle]}>{title}</Label>
                    :
                    <View style={styles.space} />
            }

            {rightComp ?
                rightComp :
                <View style={styles.space} />
            }
        </View>
    )
}

export default React.memo(AppHeader)

const styles = StyleSheet.create({
    header: {
        height: hp(8),
        paddingHorizontal: '5%',
        ...commonStyles.justifyView,
    },
    space: {
        height: 3,
        width: '10%',
    },
    textStyle: {
        color: COLOR.white,
        ...TEXT_STYLE.textBold,
    },
})