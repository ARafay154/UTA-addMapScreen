import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Checkbox, Image, Input, Label, Pressable, Scrollable } from '../../../components'
import { COLOR, hp, TEXT_STYLE, commonStyles } from '../../../data/StyleGuides'
import { IMAGES } from '../../../assets/images'
import En from '../../../data/locals/En'
import { KEYBOARD_TYPE, SCREEN } from '../../../data/enums'

const SignUpScreen = ({ navigation }) => {
  return (
    <Scrollable containerStyle={{ height: hp(100) }}>
      <View style={styles.container}>
        <View>

          <Image src={IMAGES.SmallLogo} style={styles.logoView} />
          <Label style={styles.emailText}>{En.name}</Label>
          <Input
            placeholder={En.enterName}
          />
          <Label style={styles.passwordText}>{En.email}</Label>
          <Input
            placeholder={En.enterEmail}
            keyboard={KEYBOARD_TYPE.EMAIL}
          />

          <Label style={styles.passwordText}>{En.password}</Label>
          <Input
            isPassword
            placeholder={En.enterPassword}
          />

          <Label style={styles.passwordText}>{En.confirmPassword}</Label>
          <Input
            isPassword
            placeholder={En.confirmPassword}
          />

          <View style={styles.footer}>
            <Button
              text={En.signUp}
            />
            <Label style={styles.agreeText}>{En.agreeTerms}</Label>
            <View style={{ ...commonStyles.horizontalView, alignSelf: 'center',marginTop:hp(0.3) }}>
              <Label>{En.alreadyAccount}</Label>
              <Pressable onPress={() => navigation.navigate(SCREEN.LOGIN)}>
                <Label style={styles.signUpText}> {En.signUp}</Label>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </Scrollable>
  )
}

export default SignUpScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: '5%',
    backgroundColor: COLOR.purple,
  },
  logoView: {
    alignSelf: 'center',
    height: hp(16),
    width: hp(16),
  },
  emailText: {
    ...TEXT_STYLE.textBold,
    marginTop: hp(3),
    marginBottom: hp(1)
  },
  passwordText: {
    ...TEXT_STYLE.textBold,
    marginVertical: hp(1),
  },
  checkView: {
    ...commonStyles.justifyView
  },
  footer: {
    position: 'relative',
    top: hp(20),
  },
  signUpText: {
    color: COLOR.blue
  },
  agreeText:{
    textAlign:'center',
    paddingHorizontal:'7%',
    marginTop:hp(0.3)
  }
})