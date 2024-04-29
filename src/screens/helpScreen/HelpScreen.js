import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppHeader, Label, Pressable } from '../../components'
import { COLOR, TEXT_STYLE, commonStyles } from '../../data/StyleGuides'
import { SVG } from '../../assets/svg'
import En from '../../data/locals/En'
import { helpScreenData } from '../../data/dummyData'

const HelpScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <AppHeader
        style={styles.header}
        leftComp={<Pressable onPress={() => navigation.goBack()}>
          <SVG.BackArrow />
        </Pressable>} />
      <View style={styles.bodyContainer}>
        <Label style={styles.helpTitle}>{En.helpScreenTitle}</Label>

        {
          helpScreenData.map((item,index) => (
            <Pressable key={index} style={styles.blockView} onPress={()=>navigation.navigate(item.route)}>
              <Label style={styles.block1Text}>{item.text}</Label>
              <SVG.ForwardActive />
            </Pressable>
          ))
        }
      </View>

    </View>
  )
}

export default HelpScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.purple
  },
  
  helpTitle: {
    ...TEXT_STYLE.title
  },
  bodyContainer: {
    paddingHorizontal: "5%"
  },
  block1Text: {
    ...TEXT_STYLE.bigText,
  },
  blockView: {
    ...commonStyles.justifyView,
    borderBottomWidth: 1,
    borderColor: COLOR.lightGrey,
    paddingVertical: "5%",

  }
})