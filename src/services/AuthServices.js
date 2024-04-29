import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const login = (email, password) => {
    return new Promise((resolve, reject) => {
        if (email.trim() === "" || password.trim() === "") {
            reject("Enter Valid Data");
            return;
        }

        auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                resolve(userCredential);
            })
            .catch((error) => {
                reject("Enter Correct Email and Password");
            });
    });
};

export const signUp = (name, email, password, confirmPassword) => {
    return new Promise((resolve, reject) => {
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if (!passwordRegex.test(password)) {
            reject("Password must have at least 8 characters, 1 letter, 1 number, and 1 special character");
            return;
        }
        if (name.trim() === "" || email.trim() === "" || password.trim() === "" || confirmPassword.trim() === "") {
            reject("Enter Valid Data");
            return;
        }

        if (password !== confirmPassword) {
            reject("Ensure Passwords Match");
            return;
        }

        auth().fetchSignInMethodsForEmail(email)
            .then((emailExists) => {
                if (emailExists && emailExists.length > 0) {
                    reject("Email already in use");
                } else {
                    return firestore().collection('Users').add({
                        Name: name,
                        Email: email,
                    });
                }
            })
            .then(() => {
                return auth().createUserWithEmailAndPassword(email, password);
            })
            .then(() => {
                resolve("User Created");
            })
            .catch((error) => {
                console.log('SignUp Error:', error.message);
                reject("Error signing up: " + error.message);
            });
    });
};



export const signOut = () => {
    return new Promise((resolve, reject) => {
        auth().signOut()
            .then(() => {
                resolve("Sign out successful");
            })
            .catch((error) => {
                reject("Error signing out");
            });
    });
};


export const changePassword = (currentPassword, newPassword, confirmNewPassword) => {
    return new Promise((resolve, reject) => {
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        const user = auth().currentUser;
        if (!user) {
            reject("User not signed in");
            return;
        }

        if (!passwordRegex.test(newPassword)) {
            reject("Password must have at least 8 characters, 1 letter, 1 number, and 1 special character");
            return;
        }

        if (currentPassword.trim() === "" || newPassword.trim() === "" || confirmNewPassword.trim() === "") {
            reject("Enter Password");
            return;
        }

        if (newPassword !== confirmNewPassword) {
            reject("Ensure Passwords Match");
            return;
        }

        const credential = auth.EmailAuthProvider.credential(user.email, currentPassword);

        // Reauthenticate user
        user.reauthenticateWithCredential(credential)
            .then(() => {
                // Password reauthentication successful, now update password
                return user.updatePassword(newPassword);
            })
            .then(() => {
                resolve("Password changed successfully");
            })
            .catch((error) => {
                reject("Error changing password: " + error.message);
            });
    });
};


export const deleteAccount = (email) => {
    return new Promise((resolve, reject) => {
        const user = auth().currentUser;
        if (!user) {
            reject("User not signed in");
            return;
        }

        const lowercaseEmail = email.charAt(0).toUpperCase() + email.slice(1).toLowerCase();

        // Find the document ID associated with the user's email
        firestore().collection('Users')
            .where('Email', '==', lowercaseEmail) // Compare with lowercase email
            .get()
            .then((querySnapshot) => {
                if (querySnapshot.size === 0) {
                    reject("User not found in database");
                    return;
                }
                const docId = querySnapshot.docs[0].id;

                // Delete user document from Firestore
                return firestore().collection('Users').doc(docId).delete();
            })
            .then(() => {
                // Delete user account from Firebase Authentication
                return user.delete();
            })
            .then(() => {
                resolve("Account deleted successfully");
            })
            .catch((error) => {
                reject("Error deleting account: " + error.message);
            });
    });
};