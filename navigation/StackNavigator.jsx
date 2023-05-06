import React from 'react'
import Splash from '../screens/Splash'
import SignUp from '../screens/SignUp'
import Login from '../screens/Login'
import TabNavigator from './TabNavigator'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#0287e3",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="MyFone" screenOptions={{headerShown: false}}>
      <Stack.Screen name="MyFone" component={Splash}  />
      <Stack.Screen name="Auth" component={AuthStackNavigator} />
      <Stack.Screen name="Tabs" component={TabNavigator} />
    </Stack.Navigator>
  )
}

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Sign Up" component={SignUp} />
      <Stack.Screen name="Log in" component={Login} />
    </Stack.Navigator>
  )
}

export default StackNavigator