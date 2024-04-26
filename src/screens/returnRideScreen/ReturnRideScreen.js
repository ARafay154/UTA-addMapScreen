import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppHeader, Label, Pressable } from '../../components'
import { SVG } from '../../assets/svg'
import { COLOR, TEXT_STYLE, commonStyles, hp, wp } from '../../data/StyleGuides'
import En from '../../data/locals/En'

const ReturnRideScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <AppHeader
        style={styles.header}
        leftComp={<Pressable onPress={() => navigation.goBack()}>
          <SVG.BackArrowActive />
        </Pressable>}
      />

      <Label style={styles.heading}>{En.returnRideScreenHeading}</Label>

      <Pressable style={styles.sureContainer}>
        <Label style={styles.sureText}>{En.yes}</Label>
        <SVG.ForwardIcon />
      </Pressable>

      <Pressable style={styles.noContainer}>
        <Label style={styles.noText}>{En.no}</Label>
        <SVG.ForwardIcon />
      </Pressable>
    </View>
  )
}

export default ReturnRideScreen

const styles = StyleSheet.create({
  container: {
    height: hp(100),
    backgroundColor: COLOR.purple,
    padding: wp(4),

  },
  heading: {
    ...TEXT_STYLE.title,
    marginHorizontal: wp(4),
    lineHeight: hp(3.25)
  },
  sureContainer:{
    ...commonStyles.justifyView,
    margin:wp(6),
    paddingBottom:hp(2.5),
    borderBottomWidth:1,
    borderColor:COLOR.lightGrey
  },
  sureText:{
    ...TEXT_STYLE.text,
    color:COLOR.blue
  },
  noContainer:{
    ...commonStyles.justifyView,
    marginHorizontal:wp(6),
  },
  noText:{
    ...TEXT_STYLE.text,
    color:COLOR.lightGrey
  },
})