import { Alert, Button, Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const Home = (props) => {
  const [user, setuser] = useState('')
  const [password, setpassword] = useState('')
  const [error, seterror] = useState(false)
  const { navigation } = props
  console.log("Heyy Debug", props)
  let name = 'shiv'


  const loginFunction = () => {
    if (user=='' || password =='') {
      seterror(true)
      return Alert.alert('Please Fill Blanks')
    }
    console.log('loginFunction')
    if (user == '8299535242' && password=='shiv' ) {
      navigation.navigate('test')
    }
  }

  const createNewUser = () => {
    console.log('createNewUser')
    navigation.navigate('signup')
  }
  return (
    <ImageBackground
      source={{ uri: 'https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v996-009_1-kroir4dk.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=dcb55d36929676d81bb5f66b7e091fe8' }}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>

        <Image source={require('../../Image/new.png')} style={{ width: 200, height: 300 }} />
        <Text style={{ color: 'black', textAlign: 'center', fontSize: 26, fontWeight: 'bold', marginBottom: '3%' }}>Log In </Text>
        <Text style={{ color: '#93B1A6', textAlign: 'center', fontSize: 14, fontWeight: 'bold', marginBottom: '3%' }}>Please Type Your information </Text>
        <TextInput
          style={styles.input}
          placeholder="Mobile Number"
          placeholderTextColor='black'
          keyboardType="numeric"
          onChangeText={(e) => {
            setuser(e)
            seterror(true)
          }}
          maxLength={10}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor={(password=='' && error ==false) ?'red':'black'}
          secureTextEntry
          onChangeText={(e) => {
            setpassword(e)
            seterror(true)
          }}
        />
        <View style={styles.Submit}>
          <TouchableOpacity onPress={() => loginFunction()}>
            <Text style={{ color: '#fff', textAlign: 'center', fontSize: 26, fontWeight: 'bold' }}>Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity onPress={() => createNewUser()}>
        <Text style={{ color: 'black', textAlign: 'center', fontSize: 14, fontWeight: 'bold', marginBottom: '5%' }}>Create New User</Text>
      </TouchableOpacity>
    </ImageBackground>
  )
}

export default Home

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },

  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  title: {
    fontSize: 24,
    color: 'white',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 60,
    backgroundColor: '#f4f4f4',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  Submit: {
    justifyContent: 'center',
    width: '100%',
    height: 60,
    backgroundColor: 'black',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  }
})

{/* <ImageBackground
    source={require('./Image/image.jpg')}
    style={styles.backgroundImage}
  >
    <View style={styles.container}>
      <Text style={styles.title}>Log In </Text>
      
      <TextInput
        style={styles.input}
        placeholder="Mobile Number"
        keyboardType="numeric"
        onChangeText={(e)=>setMnumber(e)}
        maxLength={10}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={(e)=>setpassword(e)}
      />
      <Button title="SUBMIT" onPress={() => loginFunction()} />
    </View>
  </ImageBackground>}
 {loginStatus &&  <Home token={nToken} logout={logout}/>}
  </>
  )
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  title: {
    fontSize: 24,
    color: 'white',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
}); */}