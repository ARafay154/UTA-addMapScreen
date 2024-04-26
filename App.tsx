import { StatusBar, StyleSheet, View } from 'react-native'
import React from 'react'
import FlashMessage from 'react-native-flash-message'
import { COLOR } from './src/data/StyleGuides'
import RootNavigator from './src/navigation/RootNavigator'

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor={COLOR.purple} barStyle={'dark-content'} />
        <RootNavigator/>
      <FlashMessage position={'top'} />
    </View>
  )
}

export default App

const styles = StyleSheet.create({})