// If you are not familiar with React Navigation, check out the "Fundamentals" guide:
// https://reactnavigation.org/docs/getting-started
import {
	DarkTheme,
	DefaultTheme,
	NavigationContainer,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ChatScreen from '../screens/ChatScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';

export default function Navigation({ colorScheme }) {
	return (
		<NavigationContainer
			linking={LinkingConfiguration}
			theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
		>
			<RootNavigator />
		</NavigationContainer>
	);
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator();

function RootNavigator() {
	// TODO: ------please remember to add the NotFoundScreen----
	return (
		<Stack.Navigator
			screenOptions={{ headerShown: false }}
			initialRouteName='Root'
		>
			<Stack.Screen name='Root' component={BottomTabNavigator} />
			<Stack.Screen
				name='chatscreen'
				component={ChatScreen}
				options={{
					headerShown: true,
				}}
			/>
		</Stack.Navigator>
	);
}
