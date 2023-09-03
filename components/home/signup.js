import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const signup = (props) => {
  const {navigation}=props
  console.log('signup ::',props)
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Button title='GO TO LOG IN PAGE' onPress={()=>navigation.navigate('login')} ></Button>
    </View>
  )
}

export default signup

const styles = StyleSheet.create({})