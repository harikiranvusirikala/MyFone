import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { View, Text, StyleSheet, KeyboardAvoidingView, TouchableWithoutFeedback, Button, TextInput, Keyboard, Alert } from 'react-native'
import { Picker } from '@react-native-picker/picker'

const ContactUs = () => {
  const [issues, setIssues] = React.useState()
  const [details, setDetails] = React.useState({
    issue: null,
    description: '',
  })
  React.useEffect(() => {
    AsyncStorage.getItem('issues')
      .then((res) => {
        const details = JSON.parse(res)
        const locData = details.map((v, k) => (
          <Picker.Item key={k} label={v} value={v} />
        ))
        setIssues(locData)
      })
  },[])
  return (
    <KeyboardAvoidingView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <View style={styles.form}>
            <Text>Select an issue</Text>
            <Picker
              selectedValue={details.issue}
              onValueChange={(v) => setDetails({...details, issue: v})}>
              <Picker.Item enabled={true} label={'Select'} value={null} />
              {issues}
            </Picker>
            <Text>Issue description</Text>
            <TextInput value={details.description} style={styles.input} onChangeText={(v) => setDetails({...details, description: v})} />

            <Button title="submit" onPress={() => {Alert.alert(
              'Message',
              'Issue submitted successfully'
            )}} />
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
export default ContactUs