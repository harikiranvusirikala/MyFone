import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState } from 'react'
import { Button, Keyboard, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View, TouchableOpacity } from 'react-native'

const SignUp = ({navigation}) => {
  const [details, setDetails] = useState({
    phNumber: '',
    pin: '',
    confirmPin: '',
  });
  const signUp = () => {
    if (details.phNumber.length == 10 && details.pin.length == 4 && details.pin == details.confirmPin) {
      AsyncStorage.setItem('isLogged', 'true');
      AsyncStorage.setItem('details', JSON.stringify(details))
      navigation.navigate('Auth', {screen: 'Log in'});
    }
  }
  return (
    <KeyboardAvoidingView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <View style={styles.form}>
            <Text>Enter your phone number</Text>
            <TextInput value={details.phNumber} style={styles.input} onChangeText={(v) => setDetails({...details, phNumber: v})} keyboardType="numeric" />
            <Text>Enter PIN</Text>
            <TextInput value={details.pin} style={styles.input} onChangeText={(v) => setDetails({...details, pin: v})} keyboardType="numeric" />
            <Text>Confirm PIN</Text>
            <TextInput value={details.confirmPin} style={styles.input} onChangeText={(v) => setDetails({...details, confirmPin: v})} keyboardType="numeric" />
            <Button title="sign up" onPress={signUp} />
            <Text style={styles.loginText}>Already have a account? 
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => navigation.navigate("Log in")}>
                <Text>Log in</Text>
              </TouchableOpacity>
            </Text>
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
  loginText: {
    alignSelf: 'center'
  },
})

export default SignUp