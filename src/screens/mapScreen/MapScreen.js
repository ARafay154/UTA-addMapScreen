import { StyleSheet, View } from 'react-native'
import React from 'react'
import { COLOR, TEXT_STYLE, hp, wp } from '../../data/StyleGuides'
import { AppHeader, Label, Map, Pressable, SearchInput } from '../../components'
import { SVG } from '../../assets/svg'
import { KEYBOARD_TYPE, SCREEN } from '../../data/enums'

const MapScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      
        <AppHeader
          leftComp={<Pressable onPress={() => navigation.goBack()}>
            <SVG.BackArrow />
          </Pressable>}
        />
        <View style={{ paddingHorizontal: '5%' }}>

          <Label style={styles.heading}>Where would you like to drop off passengers?</Label>

          <SearchInput
            placeholder={"Enter the full address"}
            keyboard={KEYBOARD_TYPE.EMAIL}
            iconName={SVG.Search}
            style={styles.searchContainer}
            value={""}
            onChange={""}
          />
        </View>

      <Pressable style={{ flex: 1 }} onPress={() => navigation.navigate(SCREEN.MAP_VIEW)}>
        <Map />
      </Pressable>


    </View>
  )
}

export default MapScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.purple,
    flex: 1,
    // paddingHorizontal:'5%'

  },
  heading: {
    ...TEXT_STYLE.title,
    // marginHorizontal: wp(4)
  },
  searchContainer: {
    marginVertical: wp(4)
  }


})
