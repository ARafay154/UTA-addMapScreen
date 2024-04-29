import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useState,useEffect } from 'react'
import { Button, Checkbox, Image, Input, Label, Pressable, Scrollable } from '../../../components'
import { COLOR, hp, TEXT_STYLE, commonStyles } from '../../../data/StyleGuides'
import { IMAGES } from '../../../assets/images'
import En from '../../../data/locals/En'
import { KEYBOARD_TYPE, SCREEN } from '../../../data/enums'
import { useIsFocused } from '@react-navigation/native'; 
import { signUp } from '../../../services/AuthServices'


const SignUpScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const isFocused = useIsFocused();

    // useEffect to clear fields when screen is focused
    useEffect(() => {
        if (!isFocused) {
            setEmail('');
            setPassword('');
        }
    }, [isFocused]); 

    const handleSignUp = async() => {
      setLoading(true);
      await signUp(name, email, password, confirmPassword)
          .then(() => {
              setLoading(false);
          })
          .catch((error) => {
              setLoading(false);
              Alert.alert("Error signing up", error);
          });
  };
  
  return (
    <Scrollable containerStyle={{ height: hp(100) }}>
      <View style={styles.container}>
        <View>

          <Image src={IMAGES.SmallLogo} style={styles.logoView} />
          <Label style={styles.emailText}>{En.name}</Label>
          <Input
            placeholder={En.enterName}
            value={name}
            onChange={(e) => setName(e)}
          />
          <Label style={styles.passwordText}>{En.email}</Label>
          <Input
            placeholder={En.enterEmail}
            keyboard={KEYBOARD_TYPE.EMAIL}
            value={email}
            onChange={(e) => setEmail(e)}
          />

          <Label style={styles.passwordText}>{En.password}</Label>
          <Input
            isPassword
            placeholder={En.enterPassword}
            value={password}
            onChange={(e) => setPassword(e)}
          />

          <Label style={styles.passwordText}>{En.confirmPassword}</Label>
          <Input
            isPassword
            placeholder={En.confirmPassword}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e)}
          />

          <View style={styles.footer} >
            <Button
              text={En.signUp}
              onPress={() => handleSignUp()}
              isLoading={loading}
            />
            <Label style={styles.agreeText}>{En.agreeTerms}</Label>
            <View style={{ ...commonStyles.horizontalView, alignSelf: 'center', marginTop: hp(0.3) }}>
              <Label>{En.alreadyAccount}</Label>
              <Pressable onPress={() => navigation.navigate(SCREEN.LOGIN)}>
                <Label style={styles.signUpText}> {En.signIn}</Label>
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
  agreeText: {
    textAlign: 'center',
    paddingHorizontal: '7%',
    marginTop: hp(0.3)
  }
})