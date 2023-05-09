import React from 'react'
import { View, Text, StyleSheet, Button, Alert } from 'react-native'

const Plan = ({details}) => {
  return (
    <View key={details.id} style={styles.container}>
    	<View style={styles.row}>
	      <View style={styles.section}>
		      <Text>PLAN</Text>
		      <Text>Rs. {details.plan}</Text>
	      </View>
	      <View style={styles.section}>
		      <Text>VALIDITY</Text>
		      <Text>{details.validity} days</Text>
	      </View>
	      <View style={styles.section}>
		      <Text>TALKTIME</Text>
		      <Text>{details.talktime}</Text>
	      </View>
	      <View style={styles.section}>
		      <Text>DATA</Text>
		      <Text>{details.data} GB/day</Text>
	      </View>
      </View>
      <View style={styles.button}>
      	<Button title="Confirm Plan" onPress={() => {Alert.alert(
      		"Message",
      		"Change request raised successfully. Our operator will be in touch shortly"
      	)}}/>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
	container: {
		borderBottomWidth: 1,
		padding: 10,
		borderColor: 'grey'
	},
	row: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'space-around',
		margin: 20,
	},
	section: {
	},
	button: {
		alignSelf: 'flex-start',
	}
})

export default Plan