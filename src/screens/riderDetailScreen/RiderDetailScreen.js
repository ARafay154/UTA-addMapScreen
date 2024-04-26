import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppHeader, Image, Label, Pressable, Scrollable } from '../../components'
import { SVG } from '../../assets/svg'
import { COLOR, commonStyles, TEXT_STYLE, hp } from '../../data/StyleGuides'
import { IMAGES } from '../../assets/images'
import En from '../../data/locals/En'

const RiderDetailScreen = () => {
    return (
        <View style={styles.container}>
            <AppHeader
                leftComp={
                    <Pressable>
                        <SVG.BackArrow />
                    </Pressable>
                }
            />
            <Scrollable containerStyle={styles.mainView}>
                <View style={styles.profileView}>
                    <View>
                        <Label style={styles.profileName}>{En.alston}</Label>
                        <Label style={styles.ageText}>{En.age}</Label>
                    </View>
                    <Image src={IMAGES.SmallProfile} contain style={styles.profileImage} />
                </View>
                <Label style={styles.experienceText}>{En.experience}</Label>
                <View style={styles.ratingView}>
                    <View style={{ ...commonStyles.horizontalView, marginBottom: hp(0.3) }}>
                        <SVG.RatingStar />
                        <Label style={styles.ratingText}>{'5/5-2 ratings'}</Label>
                    </View>
                    <SVG.ForwardActive />
                </View>
                <Label style={styles.experienceText}>{En.drivingSkill}</Label>
                <Label style={styles.verifyText}>{En.alstonVerified}</Label>
                <View style={styles.verifiedStyle}>
                    <SVG.Verified />
                    <Label style={styles.idText}>{En.verifyId}</Label>
                </View>
                <View style={styles.verifiedStyle}>
                    <SVG.Verified />
                    <Label style={styles.idText}>{En.confirmEmail}</Label>
                </View>
                <View style={styles.verifiedStyle}>
                    <SVG.Verified />
                    <Label style={styles.idText}>{En.confirmPhoneNumber}</Label>
                </View>
                <View style={styles.line} />
                <Label style={styles.verifyText}>{En.aboutAlston}</Label>
                <Label style={styles.loremText}>{En.loremText}</Label>
                <View style={styles.verifiedStyle}>
                    <SVG.NoSmoking />
                    <Label style={styles.idText}>{En.noSmoking}</Label>
                </View>
                <View style={styles.verifiedStyle}>
                    <SVG.Tune />
                    <Label style={styles.idText}>{En.noSmoking}</Label>
                </View>
                <View style={styles.verifiedStyle}>
                    <SVG.NoPet />
                    <Label style={styles.idText}>{En.preferNotTravel}</Label>
                </View>
                <View style={styles.line} />
                <Label style={styles.rideText}>{En.ridesPulish}</Label>
                <Label style={styles.rideText}>{En.sinceDecember}</Label>
                <View style={styles.line} />
                <Pressable>
                <Label style={styles.reportMemberText}>{En.reportMember}</Label>
                </Pressable>
            </Scrollable>
        </View>
    )
}

export default RiderDetailScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.purple
    },
    mainView: {
        paddingHorizontal: '5%',
    },
    profileView: {
        ...commonStyles.justifyView
    },
    profileImage: {
        height: hp(8),
        width: hp(8),
        marginRight: hp(2)
    },
    profileName: {
        ...TEXT_STYLE.smallTitleBold
    },
    ageText: {
        color: COLOR.lightGrey,
        ...TEXT_STYLE.textBold,
    },
    experienceText: {
        color: COLOR.lightGrey,
        ...TEXT_STYLE.textBold,
        marginTop: hp(2)
    },
    ratingView: {
        ...commonStyles.justifyView,
        marginTop: hp(2)
    },
    ratingText: {
        paddingLeft: hp(2),
        ...TEXT_STYLE.textMedium,
        marginTop: hp(0.5)
    },
    verifyText: {
        ...TEXT_STYLE.smallTitleSemiBold,
        marginTop: hp(1),
    },
    verifiedStyle: {
        ...commonStyles.horizontalView,
        marginTop: hp(1)
    },
    idText: {
        ...TEXT_STYLE.textBold,
        color: COLOR.lightGrey,
        paddingLeft: hp(1)
    },
    line: {
        width: '100%',
        borderWidth: 1,
        borderColor: COLOR.lightGrey,
        marginTop: hp(2),
    },
    loremText: {
        color: COLOR.lightGrey,
    },
    rideText: {
        ...TEXT_STYLE.textBold,
        color: COLOR.lightGrey,
        marginTop: hp(1)
    },
    reportMemberText:{
        ...TEXT_STYLE.textBold,
        color:COLOR.blue,
        marginTop:hp(2)
    }
})