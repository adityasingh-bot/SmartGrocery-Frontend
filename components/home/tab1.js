import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const tab1 = (props) => {
  console.log('props tab',props)
  return (
    <View>
      <Button title='GO TO SIGNUP PAGE' onPress={()=>props.navigation.navigate('signup')} />
    </View>
  )
}

export default tab1

const styles = StyleSheet.create({})