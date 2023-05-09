import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons/faUserCircle'

const Home = ({navigation}) => {
  const [details, setDetails] = React.useState({});
  React.useEffect(() => {
    AsyncStorage.getItem('details')
      .then((res) => {
        setDetails(JSON.parse(res))
      })
      .catch(() => navigation.navigate('MyFone'))
  }, [])
  return (
    <View style={styles.container}>
      <View style={styles.userInfo}>
        <FontAwesomeIcon icon={faUserCircle} size={95} color="grey" />
        <Text></Text>
        <Text style={styles.phNumber}>{details.phNumber}</Text>
      </View>
      <View style={styles.planInfo}>
        <View style={styles.planInfoSection}>
          <Text>PLAN</Text>
          <Text>Rs. 399</Text>
        </View>
        <View style={styles.planInfoSection}>
          <Text>VALID TILL</Text>
          <Text>Thu Jun 06 2023</Text>
        </View>
      </View>
      <View style={styles.usageInfo}>
        <View style={styles.usageInfoSection}>
          <Text style={styles.text}>975.5 MB</Text>
          <Text style={styles.text}>DATA REMAINING</Text>
        </View>
        <View style={styles.usageInfoSection}>
          <Text style={styles.text}>BILL: Rs. 595</Text>
          <Text style={styles.text}>due on Wed May 22 2023</Text>
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 10,
    marginBottom: 50
  },
  phNumber: {
    fontSize: 30,
    fontWeight: 700,
  },
  planInfo: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  planInfoSection: {
  },
  usageInfo: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 20,
  },
  usageInfoSection: {
    backgroundColor: '#ff5349',
    padding: 10,
    border: 'solid',
    borderRadius: 10,
  },
  text: {
    color: 'white',
    fontWeight: 700
  }
})
export default Home