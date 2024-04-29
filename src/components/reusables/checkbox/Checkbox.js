import React, { useState,memo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { COLOR, hp,TEXT_STYLE } from '../../../data/StyleGuides';
import { Label } from '..';

const Checkbox = ({text, style, checkStyle}) => {
  const [checked, setChecked] = useState(false);

  const toggleCheckbox = () => {
    setChecked(!checked);
  };

  return (
    <View style={[styles.container, checkStyle]}>
      <CheckBox
        value={checked}
        onValueChange={toggleCheckbox}
        style={styles.checkbox}
        tintColors={{ true: COLOR.blue, false: COLOR.gray }}
      />
      <Text style={[styles.label, style]}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    ...TEXT_STYLE.smallText,
    marginTop:hp(0.3),
    color:COLOR.white
  },
  checkbox: {
    borderWidth: 2,
    borderRadius: 4,
    borderColor: COLOR.blue, // Border color of the checkbox
  },
});

export default memo(Checkbox)
