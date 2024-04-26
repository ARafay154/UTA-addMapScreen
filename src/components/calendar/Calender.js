import { StyleSheet, Text, View } from 'react-native'
import React, { memo, useState } from 'react'
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { COLOR, hp, wp } from '../../data/StyleGuides';


const Calender = () => {
  const [selected, setSelected] = useState('');
  return (
    <View style={styles.container}>
      <Calendar
      hideArrows={true}
      hideExtraDays={true}
        onDayPress={day => {
          setSelected(day.dateString);
        }}
        markedDates={{
          [selected]: { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' }
        }}
        theme={{
          
        }}
        style={styles.calenderView}
      />
    </View>
  )
}

export default memo(Calender)

const styles = StyleSheet.create({
  container:{
    marginTop:hp(5),
    padding:wp(4)
  },
  calenderView:{
    borderWidth:1,
    borderColor:COLOR.black,
  }
})