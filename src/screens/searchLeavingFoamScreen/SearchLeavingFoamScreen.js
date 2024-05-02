import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { AppHeader, LeavingView, Pressable, Scrollable, VerifyProfileData } from '../../components'
import { COLOR, hp } from '../../data/StyleGuides'
import { SVG } from '../../assets/svg'
import En from '../../data/locals/En'
import { leavingData } from '../../data/dummyData'
import firestore from '@react-native-firebase/firestore';

const SearchLeavingFoamScreen = ({ navigation }) => {
    const [location, setLocation] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await firestore().collection('Trip').get();
                const data = querySnapshot.docs.map(doc => doc.data());
                setLocation(data);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchData();
    }, []);

    return (
        <View style={styles.container}>
            <AppHeader
                leftComp={<Pressable onPress={() => navigation.goBack()}><SVG.BackArrow /></Pressable>}
                title={En.machesterAirport}
                rightComp={<Pressable><SVG.Cross /></Pressable>}
            />
            <Scrollable containerStyle={styles.containerStyle}>
                {location.map((item, index) => (
                    <LeavingView item={item} key={index} />
                ))}
            </Scrollable>
        </View>
    )
}

export default SearchLeavingFoamScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLOR.purple,
    },
    containerStyle: {
        height: hp(100),
        paddingHorizontal: '5%',
    }
});
