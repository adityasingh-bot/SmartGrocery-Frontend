import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from './components/home/home'

const App = () => {
    console.log("Heyy Debug")
    return (
        <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
            <Text>Test Shiv</Text>
        <Home/>
        </View>

    )
}

export default App

const styles = StyleSheet.create({})