import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SCREEN, TAB } from '../data/enums'
import { BestPlacesScreen, CalenderScreen, ChangePasswordScreen, ChatScreen, CreateRideScreen, InstantBookingScreen, LoginScreen, MapRouteScreen, MapScreen, MapViewScreen, PassengerScreen, PayoutMethodScreen, RiderDetailScreen, SearchCounterScreen, SearchGoingToScreen, SearchLeavingFoamScreen, SignUpScreen, SplashScreen, StopOverScreen, TimeScreen } from '../screens'
import BottomNavigator from './BottomNavigator'
import PriceScreen from '../screens/priceScreen'
import ReturnRideScreen from '../screens/returnRideScreen'

const Stack = createNativeStackNavigator()

const screenOptionStyle = {
    headerShown: false,
}

const RootNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={screenOptionStyle}>
                <Stack.Screen name={SCREEN.SPLASH} component={SplashScreen} />
                <Stack.Screen name={SCREEN.LOGIN} component={LoginScreen} />
                <Stack.Screen name={SCREEN.SIGN_UP} component={SignUpScreen} />
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
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigator
