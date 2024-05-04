import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { AppHeader, Image, Input, Label, Pressable } from '../../components'
import { SVG } from '../../assets/svg'
import { COLOR, TEXT_STYLE, commonStyles, hp, wp } from '../../data/StyleGuides'
import { dummyMessages } from '../../data/dummyData'
import LinearGradient from 'react-native-linear-gradient'
import firestore from '@react-native-firebase/firestore';
import { v4 as uuidv4 } from 'uuid';


const ChatScreen = (props) => {

    const { navigation } = props
    const sender = props.route.params.sender
    const receiver = props.route.params.receiver

    //    console.log("sender",sender)
    //    console.log("receiver", receiver)

    const [text, setText] = useState("")
    const [messages, setMessages] = useState([])


    const getAllmessages = async () => {
        const docid = receiver.UID > sender.UID ? sender.UID + '-' + receiver.UID : receiver.UID + '-' + sender.UID;
        const querySnap = await firestore().collection('chatRoom')
            .doc(docid)
            .collection('chat')
            .orderBy('createdAt', "desc")
            .get()
        const allmsg = querySnap.docs.map(docSnap => {
            return {
                ...docSnap.data(),
                createdAt: docSnap.data().createdAt.toDate()
            }

        })

        // Sort messages by creation time before setting them in state
        const sortedMessages = allmsg.sort((a, b) => b.createdAt - a.createdAt);
        setMessages(sortedMessages);
    }



    useEffect(() => {
        getAllmessages()
    }, []);

    console.log(messages)



    const sendMessage = () => {
        const docid = receiver.UID > sender.UID ? sender.UID + '-' + receiver.UID : receiver.UID + '-' + sender.UID;
        const messageRef = firestore().collection('chatRoom').doc(docid).collection('chat');

        const myMsg = {
            sentBy: sender.UID,
            sentTo: receiver.UID,
            message: text,
            createdAt: new Date(),
            // Add other properties if needed
        };

        messageRef.add({
            ...myMsg,
            createdAt: firestore.FieldValue.serverTimestamp(),
        })
            .then(() => {
                console.log("Message sent successfully");
            })
            .catch((error) => {
                console.error("Error sending message: ", error);
            });

        // Update local state
        setMessages(previousMessages => [myMsg, ...previousMessages]);
        setText('');
    };




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
                        <Image url={receiver.Image} style={styles.imageView} contain />
                        <Label style={styles.userName}>{receiver.Name}</Label>
                    </View>
                }
            />

            <ScrollView style={styles.chatDetailsContainer}>
                {messages.slice(0).reverse().map((message, index) => (
                    <LinearGradient
                        key={index}
                        colors={[COLOR.blue, COLOR.pink]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={[styles.messageContainer, message.sentBy === sender.UID ? styles.senderMessage : styles.receiverMessage]}>

                        <Label style={styles.messageText}>{message.message}</Label>
                    </LinearGradient>
                ))}
            </ScrollView>

            <View style={styles.newMsgContainer}>
                <Input
                    styleContainer={styles.inputblock}
                    placeholder={'Send a message'}
                    placeholderTextColor={COLOR.lightGrey}
                    style={styles.inputMainContainer}
                    value={text}
                    onChange={(e) => setText(e)}
                />
                <Pressable style={styles.sendMsgBtn} onPress={() => sendMessage({ message: text })}>
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
    imageView: {
        width: wp(14),
        height: hp(7),
        borderRadius: wp(14)
    }
})