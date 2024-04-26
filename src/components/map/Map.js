import { StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'


const Map = () => {
  return (
    <View style={styles.mapContainer}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
          <Marker
            coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
            title={"Marker Title"}
            description={"Marker Description"}
          />
        </MapView>
      </View>
  )
}

export default memo(Map)

const styles = StyleSheet.create({
  mapContainer: {
    flex: 1,
  },
  map: {
    flex:1
  },
})