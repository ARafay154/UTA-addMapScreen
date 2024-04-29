import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLOR, TEXT_STYLE, commonStyles } from '../../data/StyleGuides'
import { AppHeader, Label, Pressable } from '../../components'
import { SVG } from '../../assets/svg'
import En from '../../data/locals/En'

const DataProtection = ({navigation}) => {
  return (
    <View style={styles.container}>
      <AppHeader
        style={styles.header}
        leftComp={<Pressable onPress={() => navigation.goBack()}>
          <SVG.BackArrow />
        </Pressable>} />
      <View style={styles.bodyContainer}>
        <Label style={styles.dataTitle}>{En.dataProtectionScreenTitle}</Label>

        <Pressable style={styles.blockView} >
          <Label style={styles.blockText}>{En.privacyPolicy}</Label>
          <SVG.ForwardActive />
        </Pressable>

        <Pressable style={styles.cookieBlock} >
          <Label style={styles.cookieText}>{En.cookieSetting}</Label>
        </Pressable>
      </View>
    </View>
  )
}

export default DataProtection

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.purple
  },
  dataTitle: {
    ...TEXT_STYLE.title
  },
  bodyContainer: {
    paddingHorizontal: "5%"
  },
  blockText: {
    ...TEXT_STYLE.bigText,
  },
  blockView: {
    ...commonStyles.justifyView,
    borderBottomWidth: 1,
    borderColor: COLOR.lightGrey,
    paddingVertical: "5%",
  },
  cookieBlock:{
    ...commonStyles.justifyView,
    paddingVertical: "5%",
  },
  cookieText:{
    ...TEXT_STYLE.bigTextSemiBold,
    color:COLOR.blue
  }
})