import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppHeader, LeavingView, Pressable, Scrollable, VerifyProfileData } from '../../components'
import { COLOR, hp } from '../../data/StyleGuides'
import { SVG } from '../../assets/svg'
import En from '../../data/locals/En'
import { leavingData } from '../../data/dummyData'

const SearchLeavingToScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
        <AppHeader 
        leftComp={<Pressable onPress={()=>navigation.goBack()}><SVG.BackArrow/></Pressable>}
        title={En.machesterAirport}
        rightComp={<Pressable><SVG.Cross/></Pressable>}
        />
        <Scrollable containerStyle={styles.containerStyle}>
        {leavingData?.map((item, index) => (
                <LeavingView item={item} key={index} />
            ))}
        </Scrollable>
    </View>
  )
}

export default SearchLeavingToScreen

const styles = StyleSheet.create({
    container:{
        backgroundColor:COLOR.purple,
    },
    containerStyle:{
        height:hp(100),
        paddingHorizontal:'5%',
    }
})