import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { AppHeader, Checkbox, Counter, Label, MapForwardBtn, Pressable } from '../../components'
import { SVG } from '../../assets/svg'
import En from '../../data/locals/En'
import { COLOR, TEXT_STYLE, commonStyles, hp, wp } from '../../data/StyleGuides'
import { SCREEN } from '../../data/enums'

const PassengerScreen = ({ navigation }) => {

  const [number, setNumber] = useState(0)

  return (
    <View style={styles.container}>
      <AppHeader
        style={styles.header}
        leftComp={<Pressable onPress={() => navigation.goBack()}>
          <SVG.BackArrowActive />
        </Pressable>}
      />

      <Label style={styles.heading}>{En.passengerScreenTitle}</Label>

      {/* counter */}
      <Counter number={number} setNumber={setNumber} style={styles.counterBlock} icon={false}/>
      {/* Counter End */}

      <Label style={[styles.optionBlock]}>{En.passengeroptions}</Label>

      <Pressable style={styles.passengerBlock}>
        <SVG.SeatCoupleLight />
        <View style={styles.textContainer}>
          <Label style={styles.upperText}>{En.maxBack}</Label>
          <Label style={styles.lowerText}>{En.thinkcomfort}</Label>
        </View>
        <Checkbox />
      </Pressable>

      <Pressable style={styles.passengerBlock}>
        <SVG.SeatCoupleLight />
        <View style={styles.textContainer}>
          <Label style={styles.upperText}>{En.women}</Label>
          <Label style={styles.lowerText}>{En.makeRide}</Label>
        </View>
        <Checkbox />
      </Pressable>

      <MapForwardBtn onPress={() => navigation.navigate(SCREEN.INSTANT_BOOKING)} />
    </View>
  )
}

export default PassengerScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.purple,
    flex: 1,
  },
  header: {
    marginHorizontal: wp(4),
  },
  heading: {
    ...TEXT_STYLE.title,
    marginHorizontal: wp(8),
  },
  passengerBlock: {
    ...commonStyles.justifyView,
    paddingHorizontal: wp(8),
  },
  textContainer: {
    flexDirection: 'column',
    flex: 1,
    marginLeft: wp(4),
    padding: wp(3),
  },
  upperText: {
    ...TEXT_STYLE.smallText,
    fontSize: hp(1.75)
  },
  lowerText: {
    ...TEXT_STYLE.smallText,
    color: COLOR.lightGrey,
    fontSize: hp(1.75)
  },
  counterBlock:{
marginHorizontal:"5%"
  },
  totalPassenger: {
    ...TEXT_STYLE.text,
    fontSize: hp(12),
    width: wp(50),
    textAlign: 'center',
  },
  optionBlock: {
    borderTopWidth: 4,
    borderColor: COLOR.lightGrey,
    ...TEXT_STYLE.title,
    paddingHorizontal: wp(8),
    paddingTop: hp(3)
  }
})