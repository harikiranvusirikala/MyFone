import React, { useState, useEffect } from 'react'
import { Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, Text, TextInput, Button, StyleSheet, View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Login = ({navigation}) => {
  const [pin, setPin] = useState('')
  const [details, setDetails] = useState({})
  useEffect(() => {
    AsyncStorage.getItem('details')
      .then((res) => {
        setDetails(JSON.parse(res))
      })
  }, [])
  const login = () => {
    if (pin != '' && pin == details.pin)
      navigation.navigate("Tabs")
  }
  return (
    <KeyboardAvoidingView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <View style={styles.form}>
            <Text>Enter your PIN</Text>
            <TextInput value={pin} style={styles.input} onChangeText={setPin} keyboardType="numeric" />
            <Button title="login" onPress={login} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    margin: 30
  },
  inner: {
    flex: 1,
  },
  form: {
    flex: 1,
    justifyContent: 'center'
  },
  input: {
    height: 40,
    marginBottom: 12,
    borderBottomWidth: 1,
    padding: 10,
    borderColor: 'grey'
  },
})

export default Login