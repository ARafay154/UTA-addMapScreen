import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppHeader, Label, Pressable } from '../../components'
import { SVG } from '../../assets/svg'
import { COLOR, TEXT_STYLE, commonStyles, hp, wp } from '../../data/StyleGuides'
import { SCREEN } from '../../data/enums'
import En from '../../data/locals/En'

const InstantBookingScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <AppHeader
        style={styles.header}
        leftComp={<Pressable onPress={() => navigation.goBack()}>
          <SVG.BackArrowActive />
        </Pressable>}
      />

      <Label style={styles.heading}>{En.instantBooking_Heading}</Label>

      <Pressable style={styles.mainBlock}>
        <SVG.BellIcon />
        <View style={styles.textContainer}>
          <Label style={styles.upperText}>{En.convenience}</Label>
          <Label style={styles.lowerText}>{En.noNeed}</Label>
        </View>
      </Pressable>

      <Pressable style={styles.mainBlock}>
        <SVG.Electric  width={18}/>
        <View style={styles.textContainer}>
          <Label style={styles.upperText}>{En.getMore}</Label>
          <Label style={styles.lowerText}>{En.prefer}</Label>
        </View>
      </Pressable>

      <Pressable style={styles.instantBlock} onPress={() => navigation.navigate(SCREEN.CALENDER)}>
        <Label style={styles.instantText}>{En.enable}</Label>
        <SVG.ForwardIcon />
      </Pressable>
    </View>
  )
}

export default InstantBookingScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.purple,
    height: hp(100),
    padding: wp(4)
  },
  heading: {
    ...TEXT_STYLE.title,
    marginHorizontal: wp(4)
  },
  mainBlock: {
    ...commonStyles.justifyView,
    paddingHorizontal: wp(4)
},
textContainer: {
    flexDirection: 'column',
    flex: 1,
    marginLeft: wp(4),
    padding: wp(3),
},
upperText: {
    ...TEXT_STYLE.textMedium,
},
lowerText: {
    ...TEXT_STYLE.text,
    color: COLOR.lightGrey,
    
},
instantText:{
    ...TEXT_STYLE.textBold,
    color:COLOR.blue,
},
instantBlock:{
    ...commonStyles.justifyView,
    paddingHorizontal:wp(5),
    marginTop:hp(2)
    
}
})