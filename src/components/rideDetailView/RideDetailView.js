import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { COLOR, hp, commonStyles, TEXT_STYLE } from '../../data/StyleGuides'
import { Image, Label, Pressable } from '..'
import { SVG } from '../../assets/svg'
import { IMAGES } from '../../assets/images'
import { useNavigation } from '@react-navigation/native';
import { SCREEN } from '../../data/enums'

const RideDetailView = ({ item }) => {
    const navigation = useNavigation()
    const { timing, timeDuration, to, from, price, coupleIcon, manActiveIcon, manNonActiveIcon, pointToAndFromIcon, ratingStarIcon, profileImage } = item
    return (
        <Pressable onPress={()=>navigation.navigate(SCREEN.RIDER_DETAIL)}>
        <LinearGradient
            colors={[COLOR.blue, COLOR.pink]}
            locations={[0.5, 1]}
            style={styles.linearGradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 0.9, y: 0 }}
        >
            <View style={styles.container}>
                <View style={{ ...commonStyles.horizontalView }}>
                    <View>
                        <Label style={{ ...TEXT_STYLE.textMedium }}>{timing}</Label>
                        <Label style={{ color: COLOR.lightGrey }}>{timeDuration}</Label>
                    <Label>{timing}</Label>
                    </View>
                    <View style={styles.centerView}>
                        <View style={{marginEnd:hp(0.5)}}>
                            <SVG.PointToAndFrom />
                        </View>
                        <View>
                            <Label style={{paddingTop:hp(2)}}>{to}</Label>
                            <View style={{ ...commonStyles.horizontalView, marginTop: hp(0.5) }}>
                                <View style={{ marginEnd: hp(0.2) }}>
                                    <SVG.ManNonActive />
                                </View>
                                <View style={{ marginEnd: hp(0.2) }}>
                                    <SVG.ManNonActive />
                                </View>
                                <View style={{ marginEnd: hp(0.2) }}>
                                    <SVG.ManActive />
                                </View>
                            </View>
                            <Label style={{ marginTop: hp(0.5) }}>{from}</Label>
                            <View style={{ ...commonStyles.horizontalView, marginTop: hp(0.2) }}>
                                <View style={{ marginEnd: hp(0.2) }}>
                                    <SVG.ManNonActive />
                                </View>
                                <View style={{ marginEnd: hp(0.2) }}>
                                    <SVG.ManNonActive />
                                </View>
                                <View style={{ marginEnd: hp(0.2) }}>
                                    <SVG.ManActive />
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <Label>{price}</Label>
            </View>

            <View style={styles.secondView}>
                <View style={{ ...commonStyles.horizontalView }}>
                    <Image src={IMAGES.SmallProfile} style={styles.imageView} />
                    <View style={{ marginLeft: hp(1.2) }}>
                        <Label style={{ ...TEXT_STYLE.textMedium }}>{'Alston'}</Label>
                        <View style={{ ...commonStyles.horizontalView }}>
                            <SVG.RatingStar />
                            <Label style={{ marginLeft: '10%', marginTop: '8%' }}>{'5'}</Label>
                        </View>
                    </View>
                </View>
                    <SVG.CoupleIcon/>
            </View>
        </LinearGradient>
            </Pressable>
    )
}

export default RideDetailView

const styles = StyleSheet.create({
    linearGradient: {
        height: hp(21),
        paddingHorizontal:'5%',
        marginTop: hp(2),
        borderRadius: hp(2)
    },
    container: {
        width: '100%',
        ...commonStyles.justifyView
    },
    centerView: {
        marginLeft: hp(2.5),
        ...commonStyles.horizontalView,
    },
    secondView: {
        ...commonStyles.justifyView,
        marginTop:hp(0.5)
    },
    imageView: {
        height: hp(6),
        width: hp(6)
    },
    
})