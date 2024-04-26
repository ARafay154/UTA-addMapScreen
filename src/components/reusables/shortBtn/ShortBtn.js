import { StyleSheet, View } from 'react-native'
import React, { memo } from 'react'
import Pressable from '../pressable'
import Label from '../label'
import { hp, wp, TEXT_STYLE,COLOR,commonStyles } from '../../../data/StyleGuides'

const ShortBtn = ({ text, onPress, containerStyle, style, textStyle }) => {
  return (
    <View style={[{ flexDirection: 'row' }, containerStyle]}>
      <Pressable style={[styles.container, style]} onPress={() => { onPress && onPress() }}>
        <Label color={COLOR.white} style={[styles.textStyle, textStyle]}>{text}</Label>
      </Pressable>
    </View>
  )
}

export default memo(ShortBtn)

const styles = StyleSheet.create({
  container: {
    height: hp(3.5),
    paddingHorizontal: wp(1.2),
    ...commonStyles.center,
    backgroundColor: 'red'
  },
  textStyle: {
    ...TEXT_STYLE.textBold,
    color: COLOR.white,
    marginBottom: hp(0.2),
  },
})