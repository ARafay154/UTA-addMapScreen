import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Label, Map, MapForwardBtn, NewRadioBtn, Pressable } from '../../components'
import { COLOR, TEXT_STYLE, hp, wp } from '../../data/StyleGuides'
import { routeRareData } from '../../data/dummyData'
import En from '../../data/locals/En'
import { SCREEN } from '../../data/enums'

const MapRouteScreen = ({navigation}) => {
    const [selectedRoute, setSelectedRoute] = useState(null)

  const handleRouteSelection = (index) => {
    setSelectedRoute(index)
  }
    return (
        <View style={styles.container}>
            <View style={{ flex: 0.85 }}>
                <Map />
            </View>

            <View style={styles.routeContainer}>
                <Label style={styles.routeHeading}>{En.Route_Screen_heading}</Label>

                {routeRareData.map((item, index) => (
                    <Pressable
                        key={index}
                        style={[
                            styles.detailContainer,
                            selectedRoute === index && styles.selectedRoute
                        ]}
                        onPress={() => handleRouteSelection(index)}
                    >
                        <View>
                            <Label style={[styles.routeText]}>{item.time}</Label>
                            <Label style={[styles.routeText, styles.lightColorText]}>{item.km}</Label>
                        </View>
                        {/* Pass selectedRoute and index as props to RadioBtn */}
                        <NewRadioBtn selected={selectedRoute === index} />
                    </Pressable>
                ))}
            </View>

            <MapForwardBtn onPress={() => navigation.navigate(SCREEN.STOP_OVER)}/>
        </View>
    )
}

export default MapRouteScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    routeContainer: {
        flex: 1,
        backgroundColor: COLOR.purple,
        paddingTop: hp(4),
        paddingHorizontal: wp(10)
    },
    routeHeading: {
        ...TEXT_STYLE.title,
        fontSize: hp(2.5),
        textAlign: 'center',
        marginBottom: hp(2)
    },
    routeText: {
        color: COLOR.white, // Assuming white color
      },
      lightColorText: {
        color: COLOR.lightGrey
      },
      detailContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: wp(2)
      },
})