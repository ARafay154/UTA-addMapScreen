import React, { useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SCREEN, TAB } from '../data/enums'
import { BestPlacesScreen, BookRideScreen, CalenderScreen, ChangePasswordScreen, ChatScreen, CreateRideScreen, DataProtection, ForgotScreen, HelpScreen, InstantBookingScreen, LoginScreen, MapRouteScreen, MapScreen, MapViewScreen, PassengerScreen, PayoutMethodScreen, RiderDetailScreen, SearchCounterScreen, SearchGoingToScreen, SearchLeavingFoamScreen, SignUpScreen, SplashScreen, StopOverScreen, TimeScreen } from '../screens'
import BottomNavigator from './BottomNavigator'
import PriceScreen from '../screens/priceScreen'
import ReturnRideScreen from '../screens/returnRideScreen'
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { useDispatch } from 'react-redux'
import { setUser } from '../redux/actions/Actions'



const Stack = createNativeStackNavigator()

const screenOptionStyle = {
    headerShown: false,
}

const RootNavigator = () => {
    const dispatch = useDispatch();

    const [userLogin, setUserLogin] = useState(false);
    useEffect(() => {
        const unsubscribe = auth().onAuthStateChanged(async (user) => {
            if (user) {
                fetchUserData(user.uid);
                setUserLogin(true);
            } else {
                setUserLogin(false);
            }
        });
    }, [])


    const fetchUserData = async (uid) => {
        try {
            const userDoc = await firestore().collection('Users').doc(uid).get();
            if (userDoc.exists) {
                const userData = userDoc.data(); // Extracting data from the document
                dispatch(setUser(userData)); // Dispatching the data instead of the document
            } else {
                console.log("User document does not exist");
            }
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };

    return (
        <NavigationContainer>

            {
                userLogin ?
                    <Stack.Navigator screenOptions={screenOptionStyle} initialRouteName={SCREEN.BOOK_RIDE}>
                        {/* <Stack.Screen name={SCREEN.PROFILE_ABOUT} component={ProfileAboutScreen} /> */}
                        <Stack.Screen name={TAB.BOTTOM} component={BottomNavigator} />
                        <Stack.Screen name={SCREEN.CHANGE_PASSWORD} component={ChangePasswordScreen} />
                        <Stack.Screen name={SCREEN.PAYOUT_METHOD} component={PayoutMethodScreen} />
                        <Stack.Screen name={SCREEN.GOING_FROM} component={SearchLeavingFoamScreen} />
                        <Stack.Screen name={SCREEN.GOING_TO} component={SearchGoingToScreen} />
                        <Stack.Screen name={SCREEN.SEARCH_COUNTER} component={SearchCounterScreen} />
                        <Stack.Screen name={SCREEN.CREATE_RIDE} component={CreateRideScreen} />
                        <Stack.Screen name={SCREEN.RIDER_DETAIL} component={RiderDetailScreen} />
                        <Stack.Screen name={SCREEN.MAP} component={MapScreen} />
                        <Stack.Screen name={SCREEN.MAP_VIEW} component={MapViewScreen} />
                        <Stack.Screen name={SCREEN.CHAT} component={ChatScreen} />
                        <Stack.Screen name={SCREEN.ROUTE} component={MapRouteScreen} />
                        <Stack.Screen name={SCREEN.STOP_OVER} component={StopOverScreen} />
                        <Stack.Screen name={SCREEN.BEST_PLACES} component={BestPlacesScreen} />
                        <Stack.Screen name={SCREEN.PASSENGER} component={PassengerScreen} />
                        <Stack.Screen name={SCREEN.INSTANT_BOOKING} component={InstantBookingScreen} />
                        <Stack.Screen name={SCREEN.CALENDER} component={CalenderScreen} />
                        <Stack.Screen name={SCREEN.TIME} component={TimeScreen} />
                        <Stack.Screen name={SCREEN.PRICE} component={PriceScreen} />
                        <Stack.Screen name={SCREEN.RETURN} component={ReturnRideScreen} />
                        <Stack.Screen name={SCREEN.HELP} component={HelpScreen} />
                        <Stack.Screen name={SCREEN.DATA_PROTECTION} component={DataProtection} />
                        <Stack.Screen name={SCREEN.BOOK_RIDE} component={BookRideScreen} />
                    </Stack.Navigator>
                    :
                    <Stack.Navigator screenOptions={screenOptionStyle}>
                        <Stack.Screen name={SCREEN.SPLASH} component={SplashScreen} />
                        <Stack.Screen name={SCREEN.LOGIN} component={LoginScreen} />
                        <Stack.Screen name={SCREEN.SIGN_UP} component={SignUpScreen} />
                        <Stack.Screen name={SCREEN.FORGOT} component={ForgotScreen} />
                    </Stack.Navigator>

            }

        </NavigationContainer>
    )
}

export default RootNavigator
