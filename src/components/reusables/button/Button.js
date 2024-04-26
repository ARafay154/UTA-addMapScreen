import { StyleSheet, View, ActivityIndicator } from 'react-native'
import React, { memo } from 'react'
import If from '../if'
import Label from '../label'
import Pressable from '../pressable'
import { COLOR, commonStyles, TEXT_STYLE, hp } from '../../../data/StyleGuides'

const Button = ({ text, textStyle, style, onPress, icon, isLoading, }) => {
    return (
        <Pressable onPress={() => { onPress && onPress() }} style={[styles.container, style]}>

            <If condition={!isLoading} elseComp={<ActivityIndicator color={COLOR.white} />}>
                <If condition={icon}>
                    <View style={{ marginRight: '2.5%' }}>
                        {icon}
                    </View>
                </If>
                <Label style={[styles.titleStyle, textStyle]}>{text}</Label>
            </If>
        </Pressable>
    )
}

export default memo(Button)

const styles = StyleSheet.create({
    container: {
        marginVertical: hp(1),
        height: hp(5.8),
        borderRadius: hp(3),
        ...commonStyles.horizontalView,
        ...commonStyles.center,
        backgroundColor: COLOR.blue,
        ...commonStyles.borderStyle,
    },
    titleStyle: {
        ...TEXT_STYLE.bigTextBold,
        color: COLOR.white,
        fontSize: 18,
        marginTop:hp(0.5)
    },
})