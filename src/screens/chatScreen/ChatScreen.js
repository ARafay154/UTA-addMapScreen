import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppHeader, Image, Input, Label, Pressable } from '../../components'
import { SVG } from '../../assets/svg'
import { IMAGES } from '../../assets/images'
import { COLOR, TEXT_STYLE, commonStyles, hp, wp } from '../../data/StyleGuides'
import { dummyMessages } from '../../data/dummyData'
import LinearGradient from 'react-native-linear-gradient'

const ChatScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <AppHeader
                leftComp={
                    <Pressable onPress={() => navigation.goBack()}>
                        <SVG.BackArrowActive />
                    </Pressable>
                }
                centerComp={
                    <View style={styles.headerDetail}>
                        <Image src={IMAGES.SmallProfile} style={styles.imageView} contain />
                        <Label style={styles.userName}>John Herry</Label>
                    </View>
                }
            />

            <ScrollView style={styles.chatDetailsContainer}>
                {dummyMessages.map((message, index) => (
                    <LinearGradient key={index} colors={[COLOR.blue, COLOR.pink]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} key={message.id} style={[styles.messageContainer, message.isSender ? styles.senderMessage : styles.receiverMessage]}>
                        <Label style={styles.messageText}>{message.text}</Label>
                    </LinearGradient>
                ))}
            </ScrollView>

            <View style={styles.newMsgContainer}>
                <Input
                    styleContainer={styles.inputblock}
                    placeholder={'Send a message'}
                    placeholderTextColor={COLOR.lightGrey}
                    style={styles.inputMainContainer}
                />
                <Pressable style={styles.sendMsgBtn}>
                    <SVG.SendMsg width={20} height={20} />
                </Pressable>
            </View>
        </View>
    )
}

export default ChatScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.purple,
    },
    headerDetail: {
        ...commonStyles.horizontalView,
        marginRight: 'auto',
        marginLeft: wp(4),
    },
    userName: {
        ...TEXT_STYLE.bigTextMedium,
        marginLeft: wp(4),
    },
    chatDetailsContainer: {
        flex: 1,
        marginTop: hp(3),
        padding: wp(5),
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: COLOR.lightGrey
    },
    messageContainer: {
        borderRadius: wp(10),
        minWidth: wp(15),
        maxWidth: wp(60),
        padding: wp(2),
        marginBottom: hp(0.5),
        alignSelf: 'flex-start',
    },
    senderMessage: {
        alignSelf: 'flex-end',
        backgroundColor: COLOR.blue,
    },
    receiverMessage: {
        backgroundColor: COLOR.lightGrey,
    },
    messageText: {
        ...TEXT_STYLE.text,
        color: COLOR.white,
        textAlign: 'center'
    },
    inputblock: {
        backgroundColor: COLOR.purple,
    },
    inputMainContainer: {
        width: '85%',
    },
    newMsgContainer: {
        ...commonStyles.justifyView,
        paddingVertical: hp(1),
    },
    sendMsgBtn: {
        width: wp(10),
        height: hp(5),
        borderRadius: wp(10),
        marginRight: wp(4),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLOR.blue,
    },
    imageView:{
        width:wp(15),
        height:hp(10)
    }
})