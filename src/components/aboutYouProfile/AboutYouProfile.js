import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { hp, commonStyles, TEXT_STYLE, COLOR, wp } from '../../data/StyleGuides'
import { SVG } from '../../assets/svg'
import { Label, Pressable, VerifyProfileData } from '..'
import En from '../../data/locals/En'
import { aboutYouData, vehiclesData, verifyProfileData } from '../../data/dummyData'

const AboutYouProfile = () => {
    
    return (
        <View style={styles.mainView}>
            <View>
                <Pressable style={{ ...commonStyles.horizontalView }}>
                    <SVG.AddIcon />
                    <Label style={styles.addProfileText}>{En.addProfilePicture}</Label>
                </Pressable>
                <Pressable style={{ paddingTop: hp(2) }}>
                    <Label style={styles.personalText}>{En.EditPersonalDetails}</Label>
                </Pressable>
            </View>
            <View style={styles.line}/>
            <Label style={{...TEXT_STYLE.smallTitleBold}}>{En.verifyProfile}</Label>
            {verifyProfileData?.map((item, index) => (
                <VerifyProfileData item={item} key={index} />
            ))}
            
             <View style={styles.line}/>
            <Label style={{...TEXT_STYLE.smallTitleBold}}>{En.aboutYou}</Label>
            {aboutYouData?.map((item, index) => (
                <VerifyProfileData item={item} key={index} />
            ))}
              <View style={styles.line}/>
            <Label style={{...TEXT_STYLE.smallTitleBold}}>{En.vehicles}</Label>
            {vehiclesData?.map((item, index) => (
                <VerifyProfileData item={item} key={index} />
            ))}
        </View>
    )
}

export default AboutYouProfile

const styles = StyleSheet.create({
    mainView: {
        marginTop: hp(3)
    },
    addProfileText: {
        marginLeft: hp(2.5),
        ...TEXT_STYLE.bigTextMedium,
        color: COLOR.blue
    },
    personalText: {
        ...TEXT_STYLE.bigTextMedium,
        color: COLOR.blue,
    },
    line:{
        width:'100%',
        borderWidth:1,
        borderColor:COLOR.lightGrey,
        marginVertical:hp(2)
    }
})