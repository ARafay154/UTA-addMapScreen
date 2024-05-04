import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { AboutYouProfile, AccountProfile, If, Image, Label, Scrollable, ToggleView } from '../../components'
import { COLOR, commonStyles, hp, TEXT_STYLE, wp } from '../../data/StyleGuides'
import En from '../../data/locals/En'
import { IMAGES } from '../../assets/images'
import { SVG } from '../../assets/svg'
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const ProfileAboutScreen = () => {
    const [activeTab, setActiveTab] = useState(0)
    const [userData, setUserData] = useState("");


    useEffect(() => {
        fetchUserData();
    }, []);

    const fetchUserData = async () => {
        try {
            const user = auth().currentUser;
            if (user) {
                const userDoc = await firestore().collection('Users').doc(user.uid).get();
                if (userDoc.exists) {
                    setUserData(userDoc.data());
                } else {
                    console.log("User document does not exist");
                }
            }
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };

    console.log(userData)

    return (
        <View style={styles.container}>

            <ToggleView active={activeTab} setActive={setActiveTab} />
            <Scrollable hasInput containerStyle={styles.mainContainer}>
                <If condition={activeTab == 0}>
                    <View style={styles.mainScreen}>
                        <View style={styles.profileContainer}>

                            <View>
                                <Label style={styles.profilerName}>{userData.Name}</Label>
                                <Label style={styles.subTitle}>{En.newComer}</Label>
                            </View>

                            <View style={{ ...commonStyles.horizontalView }}>

                                <Image url={userData.Image} style={styles.imageView} />
                                <SVG.ForwardIcon />
                            </View>
                        </View>
                        <AboutYouProfile />
                    </View>
                </If>
                <If condition={activeTab == 1}>
                    <AccountProfile />
                </If>
            </Scrollable>
        </View>
    )
}

export default ProfileAboutScreen

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: COLOR.purple,
        height: hp(91)
    },
    mainScreen: {
        paddingHorizontal: '5%'
    },
    profileContainer: {
        ...commonStyles.justifyView,
        paddingHorizontal: '6%',
        marginTop: hp(1)
    },
    imageView: {
        height: hp(7),
        width: hp(7),
        borderRadius:wp(7),
        marginEnd: hp(1)
    },
    profilerName: {
        ...TEXT_STYLE.smallTitleBold
    },
    subTitle: {
        ...TEXT_STYLE.textBold,
        color: COLOR.lightGrey,
        lineHeight: hp(1.8)
    },
    container: {
        backgroundColor: COLOR.purple
    }
})