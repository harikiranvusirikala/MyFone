import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import Splash from '../screens/Splash'
import Home from '../screens/Home'
import ChangePlan from '../screens/ChangePlan'
import ContactUs from '../screens/ContactUs'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons/faHome'
import { faFile } from '@fortawesome/free-solid-svg-icons/faFile'
import { faUsers } from '@fortawesome/free-solid-svg-icons/faUsers'

const Tab = createBottomTabNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#0287e3",
  },
  headerTintColor: "white",
  headerBackTitle: "Back"
};

const TabNavigator = ({navigation}) => {
  return (
    <Tab.Navigator initialRouteName="My Account" screenOptions={screenOptionStyle}>
      <Tab.Screen name="My Account" component={Home} options={{
        tabBarIcon: ({ color, size }) => (
          <FontAwesomeIcon icon={faHome} size={20} color="grey" />
        ),
      }}/>
      <Tab.Screen name="Change Plan" component={ChangePlan} options={{
        tabBarIcon: ({ color, size }) => (
          <FontAwesomeIcon icon={faFile} size={20} color="grey" />
        ),
      }}/>
      <Tab.Screen name="Contact Us" component={ContactUs} options={{
        tabBarIcon: ({ color, size }) => (
          <FontAwesomeIcon icon={faUsers} size={20} color="grey" />
        ),
      }}/>
    </Tab.Navigator>
  )
}

export default TabNavigator