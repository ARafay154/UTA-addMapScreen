import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLOR, TEXT_STYLE, commonStyles, hp } from '../../data/StyleGuides'
import { AppHeader, Button, Image, Label, Pressable, Scrollable } from '../../components'
import { SVG } from '../../assets/svg'
import En from '../../data/locals/En'
import { IMAGES } from '../../assets/images'

const BookRideScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <AppHeader
        leftComp={
          <Pressable onPress={() => navigation.goBack()}>
            <SVG.BackArrow />
          </Pressable>
        }
      />

<Scrollable containerStyle={styles.mainView}>
                <Label style={styles.dateText}>{'Thu 18 April'}</Label>
                <View style={styles.dateContainer}>
                    <View>

                        <View style={{ ...commonStyles.horizontalView }}>
                            <View style={styles.arrivalTimeStyle}>
                                <Label style={styles.arrivalTime}>{'07:30'}</Label>
                                <Label style={styles.arrivalDuration}>{'3h20'}</Label>
                                <Label style={styles.receivingStyle}>{'07:30'}</Label>
                            </View>
                            <SVG.StraightLine />
                            <View style={styles.premierStyle}>
                                <View>
                                    <Label style={styles.premierInnStyle}>{En.premierInnLuton}</Label>
                                    <Label>{'Luton'}</Label>
                                    <View style={{ ...commonStyles.horizontalView }}>
                                        <SVG.ManActive />
                                        <Label style={{ color: COLOR.orange, marginLeft: hp(0.5) }}>{En.fromDeparture}</Label>
                                    </View>
                                </View>
                                <SVG.ForwardActive />
                            </View>

                        </View>
                        <View style={styles.goldenWayStyle}>
                            <View>
                                <Label style={styles.premierInnStyle}>{En.goldenWay}</Label>
                                <Label>{'Luton'}</Label>
                                <View style={{ ...commonStyles.horizontalView }}>
                                    <SVG.ManActive />
                                    <Label style={{ color: COLOR.yellow, marginLeft: hp(0.5) }}>{En.fromDeparture}</Label>
                                </View>
                            </View>
                            <SVG.ForwardActive />
                        </View>
                    </View>
                </View>
                <View style={styles.line} />
                <View style={styles.pessengerView}>
                    <Label style={styles.priceText}>{En.totalPrice}</Label>
                    <Label style={styles.priceTextStyle}>{'$120.50'}</Label>
                </View>
                <View style={styles.line} />
                <View style={styles.pessengerView}>
                    <View>

                        <Label style={styles.alstonText}>{'Alston'}</Label>
                        <View style={styles.ratingStyle}>
                            <SVG.RatingStar />
                            <Label style={styles.ratingText}>{'5/5-2 ratings'}</Label>
                        </View>
                    </View>
                    <View style={styles.ratingStyle}>
                        <Image src={IMAGES.SmallProfile} style={styles.imageView} />
                        <SVG.ForwardActive />
                    </View>

                </View>
                <View style={styles.ratingStyle}>
                    <SVG.SecurityIcon />
                    <Label style={styles.ratingText}>{En.verifyProfile}</Label>
                </View>
                <View style={styles.line} />
                <Label style={styles.loremStyle}>{En.loremText}</Label>
                <Pressable>
                <Label style={styles.contactText}>{En.contactAlston}</Label>
                </Pressable>
                <View style={styles.line} />
                <Label style={styles.loremStyle}>{En.yourBooking}</Label>
                <View style={styles.line} />
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
                <Label style={styles.cupraText}>{En.cupraFormentor}</Label>
                <Label style={styles.loremStyle}>{En.black}</Label>
                <View style={styles.line} />
                <View style={styles.verifiedStyle}>
                    <SVG.Download />
                    <Label style={styles.shareRideText}>{En.shareRide}</Label>
                </View>
                <View style={styles.lines} />
                <Label style={styles.reportRideText}>{En.reportRide}</Label>
                <Button text={En.requestBook}/>
            </Scrollable>



    </View >
  )
}

export default BookRideScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.purple,
    flex: 1
  },
  dateText: {
    ...TEXT_STYLE.title,
    marginBottom: hp(3)
  },
  mainView: {
    paddingHorizontal: '5%',
  },
  dateContainer: {
    ...commonStyles.justifyView
  },
  arrivalTime: {
    ...TEXT_STYLE.bigTextMedium
  },
  arrivalDuration: {
    color: COLOR.lightGrey,
    ...TEXT_STYLE.textMedium
  },
  arrivalTimeStyle: {
    position: 'relative',
    bottom: 42,
    marginRight: hp(0.4)
  },
  premierStyle: {
    width: hp(30),
    ...commonStyles.horizontalView,
    position: 'relative',
    bottom: 24,
    marginLeft: hp(0.5)
  },
  goldenWayStyle: {
    width: hp(30),
    ...commonStyles.horizontalView,
    position: 'relative',
    left: 68,
    bottom: 22,
    marginLeft: hp(0.5)
  },
  receivingStyle: {
    position: 'relative',
    top: 78,
  },
  premierInnStyle: {
    ...TEXT_STYLE.textBold
  },
  line: {
    width: '100%',
    borderWidth: 2,
    borderColor: COLOR.lightGrey,
    marginVertical: hp(1),
    backgroundColor: COLOR.lightGrey,
  },
  pessengerView: {
    ...commonStyles.justifyView
  },
  priceText: {
    color: COLOR.lightGrey,
    ...TEXT_STYLE.bigTextBold
  },
  priceTextStyle: {
    ...TEXT_STYLE.bigTextBold,
  },
  ratingStyle: {
    ...commonStyles.horizontalView,
  },
  alstonText: {
    ...TEXT_STYLE.bigTextSemiBold,
  },
  ratingText: {
    marginLeft: hp(2.5),
    marginTop: hp(0.7),
    ...TEXT_STYLE.textBold,
    color: COLOR.lightGrey,
  },
  imageView: {
    height: hp(6),
    width: hp(6),
    marginRight: hp(2),
  },
  loremStyle: {
    color: COLOR.lightGrey,
    ...TEXT_STYLE.textBold,
  },
  contactText: {
    color: COLOR.blue,
    ...TEXT_STYLE.bigTextMedium,
    marginTop: hp(0.5)
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
  cupraText: {
    ...TEXT_STYLE.bigTextMedium,
    marginTop: hp(2)
  },
  shareRideText: {
    color: COLOR.blue,
    marginLeft: hp(2),
    ...TEXT_STYLE.bigTextBold,
    marginTop: hp(0.5)
  },
  lines: {
    width: '100%',
    borderWidth: 1,
    borderColor: COLOR.lightGrey,
    marginVertical: hp(2),
    backgroundColor: COLOR.lightGrey,
  },
  reportRideText: {
    color: COLOR.blue,
    ...TEXT_STYLE.bigTextBold,
    marginTop: hp(0.5)
  }

})