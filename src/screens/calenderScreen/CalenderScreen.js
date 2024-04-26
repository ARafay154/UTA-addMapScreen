import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppHeader, Calender, Label, MapForwardBtn, Pressable } from '../../components'
import { SVG } from '../../assets/svg'
import { COLOR, TEXT_STYLE, hp, wp } from '../../data/StyleGuides'
import En from '../../data/locals/En'
import { SCREEN } from '../../data/enums'

const CalenderScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <AppHeader
        style={styles.header}
        leftComp={<Pressable onPress={() => navigation.goBack()}>
          <SVG.BackArrowActive />
        </Pressable>}
      />

      <Label style={styles.heading}>{En.calenderScreenHeading}</Label>

      <Calender />

      <MapForwardBtn onPress={()=>navigation.navigate(SCREEN.TIME)} />
    </View>
  )
}

export default CalenderScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.purple,
    height: hp(100),
    padding: wp(4),
  },
  heading: {
    ...TEXT_STYLE.title,
    marginHorizontal: wp(4)
  },
})