import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

export const upload = async (result) => {
    return new Promise(async (resolve, reject) => {
        const user = auth().currentUser;
        console.log(user)
        
        if (!user) {
            reject("User not signed in");
            return;
        }

        try {
            const image = result.assets[0]; // Get the first image from result
            const reference = storage().ref(`/ProfilePhotos/${image.fileName}`);
            const pathToFile = image.uri;
            await reference.putFile(pathToFile);
            const url = await reference.getDownloadURL();

            // Update Firestore with image URL
            const userRef = firestore().collection('Users');
            const querySnapshot = await userRef.where('UID', '==', user.uid).get();
            if (querySnapshot.empty) {
                reject("User document not found");
                return;
            }

            querySnapshot.forEach(async (doc) => {
                try {
                    await doc.ref.update({ Image: url });
                    resolve(url);
                } catch (error) {
                    reject(error);
                }
            });
        } catch (error) {
            reject(error);
        }
    });
};
