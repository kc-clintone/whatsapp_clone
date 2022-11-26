// Learn more about createBottomTabNavigator:
// https://reactnavigation.org/docs/bottom-tab-navigator
import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { useColorScheme } from 'react-native';

import Colors from '../constants/Colors';
import Chats from '../screens/Chats';
import Calls from '../screens/Calls';
import Camera from '../screens/Camera';
import Status from '../screens/Status';
import Settings from '../screens/Settings';

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
	const colorScheme = useColorScheme();

	return (
		<BottomTab.Navigator
			initialRouteName='Chats'
			screenOptions={{
				tabBarActiveTintColor: Colors[colorScheme].tint,
				headerShown: false,
			}}
		>
			<BottomTab.Screen
				name='Chats'
				component={TabOneNavigator}
				options={{
					tabBarIcon: ({ color }) => (
						<TabBarIcon name='ios-chatbubbles-sharp' color={color} />
					),
				}}
			/>
			<BottomTab.Screen
				name='Calls'
				component={TabTwoNavigator}
				options={{
					tabBarIcon: ({ color }) => (
						<TabBarIcon name='ios-call' color={color} />
					),
				}}
			/>
			<BottomTab.Screen
				name='Camera'
				component={TabThreeNavigator}
				options={{
					tabBarIcon: ({ color }) => (
						<TabBarIcon name='ios-camera' color={color} />
					),
				}}
			/>
			<BottomTab.Screen
				name='Status'
				component={TabFourNavigator}
				options={{
					tabBarIcon: ({ color }) => (
						<TabBarIcon name='ios-disc-outline' color={color} />
					),
				}}
			/>
			<BottomTab.Screen
				name='Settings'
				component={TabFiveNavigator}
				options={{
					tabBarIcon: ({ color }) => (
						<TabBarIcon name='settings-sharp' color={color} />
					),
				}}
			/>
		</BottomTab.Navigator>
	);
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props) {
	return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator();

function TabOneNavigator() {
	return (
		<TabOneStack.Navigator>
			<TabOneStack.Screen
				name='Chats'
				component={Chats}
				options={{ headerTitle: 'Chats' }}
			/>
		</TabOneStack.Navigator>
	);
}

const TabTwoStack = createStackNavigator();

function TabTwoNavigator() {
	return (
		<TabTwoStack.Navigator>
			<TabTwoStack.Screen
				name='Calls'
				component={Calls}
				options={{ headerTitle: 'Calls' }}
			/>
		</TabTwoStack.Navigator>
	);
}

const TabThreeStack = createStackNavigator();

function TabThreeNavigator() {
	return (
		<TabTwoStack.Navigator>
			<TabTwoStack.Screen
				name='Camera'
				component={Camera}
				options={{ headerTitle: 'Camera' }}
			/>
		</TabTwoStack.Navigator>
	);
}

const TabFourStack = createStackNavigator();

function TabFourNavigator() {
	return (
		<TabTwoStack.Navigator>
			<TabTwoStack.Screen
				name='Status'
				component={Status}
				options={{ headerTitle: 'Status' }}
			/>
		</TabTwoStack.Navigator>
	);
}

const TabFiveStack = createStackNavigator();

function TabFiveNavigator() {
	return (
		<TabTwoStack.Navigator>
			<TabTwoStack.Screen
				name='Settings'
				component={Settings}
				options={{ headerTitle: 'Settings' }}
			/>
		</TabTwoStack.Navigator>
	);
}
