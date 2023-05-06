import React, { useEffect } from 'react'
import { Image, View, StyleSheet } from 'react-native'
import Logo from '../assets/logo.png'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      // navigation.navigate('Auth', {screen: 'Sign Up'})
      AsyncStorage.getItem('isLogged')
        .then(res => {
          console.log('isLogged:', res)
          res == 'true' ? navigation.navigate('Auth', {screen: 'Log in'}) : navigation.navigate('Auth', {screen: 'Sign Up'})
        })
        .catch(() => navigation.navigate('Auth', {screen: 'Sign Up'}))
    }, 2000);
  }, [])
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.img} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  img: {
    width: 350,
    height: 500,
    alignSelf: 'center'
  }
})

export default Splash