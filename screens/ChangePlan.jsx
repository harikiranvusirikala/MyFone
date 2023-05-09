import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import PlanCards from '../components/PlanCards'

const ChangePlan = () => {
  const [Plans, setPlans] = React.useState([])
  React.useEffect(() => {
    AsyncStorage.getItem('plans')
      .then((res) => setPlans(JSON.parse(res)))
  }, [])
  return (
    <View style={styles.container}>
      <FlatList
        data={Plans}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => (
          <PlanCards details={item} />
        )}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around'
  },
})
export default ChangePlan