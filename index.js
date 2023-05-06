import { registerRootComponent } from 'expo';

import App from './App';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { plans } from './data/plans.json'
import { issues } from './data/issues.json'

const loadData = () => {
	AsyncStorage.setItem(
		'plans',
		JSON.stringify(plans),
	);
	AsyncStorage.setItem(
		'issues',
		JSON.stringify(issues),
	);
}

// Loading the dummy data to AsyncStorage
loadData();

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
