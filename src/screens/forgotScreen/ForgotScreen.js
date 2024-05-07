import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLOR, TEXT_STYLE, hp, wp } from '../../data/StyleGuides'
import { AppHeader, Button, Input, Label, Pressable } from '../../components'
import { SVG } from '../../assets/svg'
import { SCREEN } from '../../data/enums'

const ForgotScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <AppHeader
        leftComp={<Pressable onPress={() => navigation.goBack()}>
          <SVG.BackArrow />
        </Pressable>} />
      <View style={styles.innerContainer}>
        <Label style={styles.forgotText}>Forgot Password</Label>

        <Label>Enter your email to get code for password reset.</Label>
        <Input
          style={styles.input}
          placeholder={"enter your email"}
        />
      </View>

      <Button
        text={"Send Email"}
        style={styles.emailBtn}
        onPress={() => navigation.navigate(SCREEN.LOGIN)}
      />



    </View>
  )
}

export default ForgotScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.purple,
  },
  forgotText: {
    ...TEXT_STYLE.title,
    marginBottom: hp(5)
  },
  innerContainer: {
    alignItems: 'center',
    padding: wp(5)
  },
  input: {
    marginVertical: hp(5),
  },
  emailBtn: {
    marginTop: hp(5),
    marginHorizontal: wp(5)
  }

})