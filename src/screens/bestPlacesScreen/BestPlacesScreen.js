import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppHeader, Label, MapForwardBtn, Pressable } from '../../components'
import { SVG } from '../../assets/svg'
import { COLOR, TEXT_STYLE, commonStyles, hp, wp } from '../../data/StyleGuides'
import En from '../../data/locals/En'
import { SCREEN } from '../../data/enums'

const BestPlacesScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <AppHeader
        style={styles.header}
        leftComp={<Pressable onPress={() => navigation.goBack()}>
          <SVG.BackArrowActive />
        </Pressable>}
      />

      <Label style={styles.heading}>{En.bestPlacesScreenTitle}</Label>

      <Pressable style={styles.innerBlock}>
        <SVG.LineCircle height={135} width={18} />
        <View style={styles.blockView}>
          <Label style={{ color: COLOR.lightGrey }}>{En.bestPlacesUpperText}</Label>
          <View style={{ paddingVertical: hp(2) }}>
            <Label style={styles.middleText}>{En.bestPlacesMiddleUpperText}</Label>
            <Label style={styles.middleText}>{En.bestPlacesMiddleBottomText}</Label>
          </View>
          <Label style={{ color: COLOR.lightGrey }}>{En.bestPlacesbottomText}</Label>
        </View>
        <SVG.ForwardIcon />
      </Pressable>

      <MapForwardBtn onPress={() => navigation.navigate(SCREEN.PASSENGER)} />

    </View>
  )
}

export default BestPlacesScreen

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
  innerBlock: {
    ...commonStyles.justifyView,
    paddingHorizontal: "5%",
    marginTop: "4%"
  },
  blockView: {
    marginRight: 'auto',
    marginLeft: wp(3),
    paddingTop: 2
  },
  middleText:{
    ...TEXT_STYLE.bigText
  }
})