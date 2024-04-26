import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLOR, TEXT_STYLE, hp, wp } from '../../data/StyleGuides'
import { AppHeader, Label, Map, MapForwardBtn, Pressable } from '../../components'
import { SVG } from '../../assets/svg'
import { SCREEN } from '../../data/enums'
import En from '../../data/locals/En'



const MapViewScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>

      <AppHeader
        titleStyle={styles.title}
        leftComp={<Pressable onPress={() => navigation.goBack()}>
          <SVG.BackArrow />
        </Pressable>}
        title={En.machesterAirport}
        rightComp={<Pressable onPress={() => navigation.goBack()}>
          <SVG.Cross />
        </Pressable>}
      />

      <View style={styles.mapContianer}>
        <Map />

        <Pressable style={styles.suggestionBtn}>
          <Label style={styles.suggestionText}>{En.suggestions}</Label>
        </Pressable>

        <MapForwardBtn onPress={()=>navigation.navigate(SCREEN.ROUTE)}/>

      </View>






    </View>
  )
}

export default MapViewScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.purple,
  },
  title: {
    ...TEXT_STYLE.bigTextBold,
    marginTop:hp(0.5)
  },
  mapContianer: {
    flex: 1,
    position: 'relative'
  },
  suggestionBtn: {
    width: wp(32),
    height: hp(4),
    borderRadius: wp(4),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLOR.blue,
    position: "absolute",
    top: hp(5),
    left: wp(35)
  },
  suggestionText: {
    ...TEXT_STYLE.smallText
  },

})