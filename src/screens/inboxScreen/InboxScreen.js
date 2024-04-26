import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppHeader, ChatBubble, Pressable } from '../../components'
import { SVG } from '../../assets/svg'
import { COLOR, TEXT_STYLE, hp, wp } from '../../data/StyleGuides'
import { usersData } from '../../data/dummyData'

const InboxScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <AppHeader
        leftComp={<Pressable onPress={() => navigation.goBack()}>
          <SVG.BackArrowActive />
        </Pressable>}
        title={"Inbox"}
        titleStyle={styles.title}
      />

      {
        usersData.map((item, index) => (
          <ChatBubble
            item={item}
            key={index}
            onpress={() => navigation.navigate(item.route)} />
        ))
      }

    </View>
  )
}

export default InboxScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.purple,
    height: hp(100),
    padding:wp(4)
  },
  title: {
    color: COLOR.white,
    ...TEXT_STYLE.title,
  },
})