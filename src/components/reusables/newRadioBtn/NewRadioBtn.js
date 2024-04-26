import React, { memo } from 'react'
import { StyleSheet, View } from 'react-native'
import { COLOR } from '../../../data/StyleGuides'


const NewRadioBtn = ({ selected }) => { 
  return (
    <View style={[styles.radioButton, selected]}>
      {selected && <View style={styles.radioButtonInner} />}
    </View>
  )
}

export default memo(NewRadioBtn)

const styles = StyleSheet.create({
  radioButton: {
    borderWidth: 2,
    borderColor: COLOR.blue,
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  radioButtonInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: COLOR.blue,
  }
})