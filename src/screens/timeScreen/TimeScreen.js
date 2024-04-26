import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppHeader, Label, MapForwardBtn, Pressable, TimePicker } from '../../components'
import { SVG } from '../../assets/svg'
import { COLOR, TEXT_STYLE, hp, wp } from '../../data/StyleGuides'
import { SCREEN } from '../../data/enums'

const TimeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
    <AppHeader
      style={styles.header}
      leftComp={<Pressable onPress={() => navigation.goBack()}>
        <SVG.BackArrowActive />
      </Pressable>}
    />

    <Label style={styles.heading}>At what time will you pick passengers up?</Label>

    <View style={styles.timeContainer}>
      <TimePicker />
    </View>

    <MapForwardBtn  onPress={()=>navigation.navigate(SCREEN.PRICE)}/>
  </View>
  )
}

export default TimeScreen

const styles = StyleSheet.create({
  container: {
    height: hp(100),
    backgroundColor: COLOR.purple,
    padding: wp(4),
  },
  heading: {
    ...TEXT_STYLE.title,
    marginHorizontal: wp(4),
  },
  timeContainer:{
    height:hp(60),
    justifyContent:'center'
  }
})