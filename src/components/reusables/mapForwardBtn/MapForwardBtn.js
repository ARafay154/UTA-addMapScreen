import { StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'
import Pressable from '../pressable'
import { SVG } from '../../../assets/svg'
import { SCREEN } from '../../../data/enums'
import { COLOR, hp, wp } from '../../../data/StyleGuides'

const MapForwardBtn = (props) => {
    const {onPress} = props
    return (
        <Pressable style={styles.mapNextBtn} onPress={onPress}>
        <SVG.ForwardActive width={20} height={20}/>
        </Pressable>
    )
}

export default memo(MapForwardBtn)

const styles = StyleSheet.create({
    mapNextBtn:{
        width:hp(5.5),
        height:hp(5.5),
        backgroundColor:COLOR.blue,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:wp(10),
        position: "absolute",
        bottom:hp(5),
        right:wp(10)
      }
})