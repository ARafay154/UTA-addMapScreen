import { FlatList, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { COLOR, TEXT_STYLE, hp, wp, commonStyles } from '../../data/StyleGuides'
import { Label, Pressable, SearchInput } from '../../components'
import { SVG } from '../../assets/svg'
import { KEYBOARD_TYPE, SCREEN } from '../../data/enums'
import { countryNameData } from '../../data/dummyData'
import En from '../../data/locals/En'

const PublishScreen = ({ navigation }) => {
  const [countryName, setCountryName] = useState("")
  const [filteredData, setFilteredData] = useState(countryNameData)
  const [showCurrentLocation, setShowCurrentLocation] = useState(true)

  const handleSearch = (text) => {
    const filtered = countryNameData.filter(item => item.text.toLowerCase().includes(text.toLowerCase()))
    setFilteredData(filtered)
    setCountryName(text)
    // Hide current location button when searching
    setShowCurrentLocation(text === "")
  }

  return (
    <View style={styles.container}>
      <Label style={styles.heading}>{En.whereLeaving}</Label>

      <SearchInput
        placeholder={En.enterFullAddress}
        keyboard={KEYBOARD_TYPE.EMAIL}
        iconName={SVG.Search}
        value={countryName}
        onChange={(text) => handleSearch(text)}
        style={styles.inputContainer}
      />

      {showCurrentLocation && (
        <Pressable style={styles.currentLocationContainer} onPress={() => navigation.navigate(SCREEN.MAP)}>
          <SVG.CurrentLocation width={20} height={20} />
          <Label style={styles.locationText}>{En.useCurrentLocation}</Label>
          <SVG.ForwardIcon width={18} height={18} />
        </Pressable>
      )}

      <FlatList
        data={filteredData}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Pressable style={styles.locationContainer}>
            <SVG.Clock width={20} height={20} />
            <Label style={styles.locationText}>{item.text}</Label>
            <SVG.ForwardIcon width={18} height={18} />
          </Pressable>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  )
}

export default PublishScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.purple,
    height: hp(91),
    padding: wp(10)
  },
  heading: {
    ...TEXT_STYLE.title,
  },

  currentLocationContainer: {
    ...commonStyles.justifyView,
    height: hp(8),
    marginTop: hp(1),
    borderBottomWidth: 1,
    borderColor: COLOR.lightGrey,
  },
  locationText: {
    textAlign: 'left',
    width: '80%',
  },
  locationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: hp(5.5),
    marginTop: hp(3),
    borderBottomWidth: 1,
    borderColor: COLOR.lightGrey,
  },
  inputContainer: {
    marginTop: hp(2)
  }
})
