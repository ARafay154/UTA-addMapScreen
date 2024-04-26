import { StyleSheet, View } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { COLOR, hp } from '../../../data/StyleGuides';
import { Image } from '../../../components';
import { IMAGES } from '../../../assets/images';
import { SCREEN } from '../../../data/enums';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate(SCREEN.LOGIN); 
    }, 3000); 

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image src={IMAGES.Logo} style={styles.imageView} contain />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.purple,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageView: {
    height:hp(40),
    width:hp(40),
  },
});
