import { StyleSheet, Text, View } from 'react-native'
import React,{useState,useEffect} from 'react'
import { AppHeader, ChatBubble, Pressable } from '../../components'
import { SVG } from '../../assets/svg'
import { COLOR, TEXT_STYLE, hp, wp } from '../../data/StyleGuides'
import { usersData } from '../../data/dummyData'
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { SCREEN } from '../../data/enums'

const InboxScreen = ({ navigation }) => {
  const [contacts, setContacts] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    const user = auth().currentUser;
    if (user) {
        const uid = user.uid;
        const unsubscribe = firestore()
            .collection('Users')
            .onSnapshot(querySnapshot => {
                const users = [];
                let loggedInUser = null;

                querySnapshot.forEach(documentSnapshot => {
                    const data = documentSnapshot.data();
                    const documentUid = documentSnapshot.id;

                    if (documentUid === uid) { // Exclude the logged-in user's data
                        loggedInUser = {
                            ...data,
                            key: documentUid,
                        };
                    } else {
                        users.push({
                            ...data,
                            key: documentUid,
                        });
                    }
                });

                users.sort((a, b) => a.Name.localeCompare(b.Name));
                setContacts(users);
                setLoggedInUser(loggedInUser); // Store logged-in user separately
            });

        return () => unsubscribe();
    }
}, []);

console.log(contacts)

  return (
    <View style={styles.container}>
      <AppHeader
        leftComp={<Pressable onPress={() => navigation.goBack()}>
          <SVG.BackArrowActive />
        </Pressable>}
        title={"Inbox"}
        titleStyle={styles.title}
      />

{
        contacts ? (
          contacts.map((item, index) => (
            <ChatBubble
              item={item}
              key={index}
              loggedInUser={loggedInUser} 
              navigation={navigation}/>
          ))
        ) : (
          null
        )
      }


    </View>
  )
}

export default InboxScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.purple,
    height: hp(100),
    padding:wp(4)
  },
  title: {
    color: COLOR.white,
    ...TEXT_STYLE.title,
  },
})