import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Button, Label, RideDetailView } from '..';
import En from '../../data/locals/En';
import { COLOR, TEXT_STYLE, hp, commonStyles } from '../../data/StyleGuides';
import { rideDetailData } from '../../data/dummyData';
import { SVG } from '../../assets/svg';

const AllRideScreen = () => {
    const [showLabels, setShowLabels] = useState(true);
    const [textInputVisible, setTextInputVisible] = useState(false);
    const [textInputValue, setTextInputValue] = useState('');

    const handleCreateRide = () => {
        setShowLabels(false);
        setTextInputVisible(true);
    };

    const handleTextInputChange = (text) => {
        setTextInputValue(text);
    };

    return (
        <View>
            {showLabels && (
                <>
                    <Label style={styles.todayText}>{En.today}</Label>
                    <Label style={styles.noRideText}>{En.ridesForThisDay}</Label>
                    <Button
                        text={En.createRide}
                        style={styles.buttonStyle}
                        textStyle={{ ...TEXT_STYLE.textBold }}
                        onPress={handleCreateRide}
                    />
                    <View style={styles.line}/>
                    <View style={styles.errorStyle}>
                        <SVG.ErrorIcon/>
                        <Label style={styles.rideText}>{En.noRideAvailable}</Label>
                    </View>
                </>
            )}
            {!showLabels && textInputVisible && (
                <View>
                    <Label style={styles.dateText}>{'18 April 2024'}</Label>
                    {rideDetailData.map((item, index) => (
                        <RideDetailView item={item} key={index} />
                    ))}
                </View>
            )}
        </View>
    );
};

export default AllRideScreen;

const styles = StyleSheet.create({
    todayText: {
        ...TEXT_STYLE.title,
    },
    noRideText: {
        textAlign: 'center',
        ...TEXT_STYLE.title,
        marginTop: hp(2),
    },
    buttonStyle: {
        marginTop: hp(5),
        width: '50%',
        alignSelf: 'center',
    },
    textInput: {
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        marginTop: 10,
        marginHorizontal: 20,
    },
    dateText:{
        ...TEXT_STYLE.smallTitleBold,
        marginTop:hp(2)
    },
    line:{
        width:'100%',
        borderWidth:1,
        borderColor:COLOR.lightGrey,
        marginVertical:hp(2)
    },
    errorStyle:{
        ...commonStyles.horizontalView
    },
    rideText:{
        color:COLOR.lightGrey,
        marginLeft:hp(1),
        ...TEXT_STYLE.textBold,
        marginTop:hp(0.3)
    }
});
