import { View, StyleSheet, NativeModules } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { isIOS } from '../utils/Helpers'
import { TAB } from '../data/enums'
import { InboxScreen, ProfileAboutScreen, PublishScreen, SearchScreen } from '../screens'
import { bottomIcons } from '../data/dummyData'
import { COLOR, hp, commonStyles, wp } from '../data/StyleGuides'
import { Label, If } from '../components'

const renderIcon = (routeName) => ({ focused }) => {
    const item = bottomIcons[routeName]
    return (
        <View style={[styles.tabContainer, item.title && { marginTop: '10%' }]}>
            {focused ?
                item?.activeIcon
                :
                item?.iconName
            }
            <If condition={item?.title}>
                <Label style={[styles.text, focused ? styles.blueText : styles.redText]}>{item?.title}</Label>
            </If>
        </View>
    )
}

const BottomNavigator = () => {
    const Tab = createBottomTabNavigator()

    const { StatusBarManager } = NativeModules
    const backgroundStyle = {
        backgroundColor: COLOR.WHITE,
        flex: 1,
    }

    return (
        <SafeAreaProvider style={[backgroundStyle, { paddingTop: isIOS() ? StatusBarManager.HEIGHT || 0 : 0, backgroundColor: COLOR.WHITE }]}>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        height: isIOS() ? hp(11) : hp(9),
                        backgroundColor: COLOR.purple,
                        borderTopWidth: 0,
                        paddingHorizontal: '3%',
                        paddingBottom: isIOS() ? hp(2) : hp(0.2),
                        // display: getIsTabBarShown(route),
                    },
                    tabBarIcon: renderIcon(route?.name),
                })}
            >
                <Tab.Screen name={TAB.SEARCH} component={SearchScreen} />
                <Tab.Screen name={TAB.PUBLISH} component={PublishScreen} />
                <Tab.Screen name={TAB.INBOX} component={InboxScreen} />
                <Tab.Screen name={TAB.PROFILE_ABOUT} component={ProfileAboutScreen} />
            </Tab.Navigator>
        </SafeAreaProvider>
    )
}

export default BottomNavigator

const styles = StyleSheet.create({
    tabContainer: {
        height: '90%',
        width: '95%',
        ...commonStyles.center,
    },
    text: {
        fontSize: 12,
        paddingVertical: hp(0.5),
        fontWeight: '800'
    },
    blueText: {
        color: COLOR.blue
    },
    redText: {
        color: COLOR.lightGrey,
    },
})