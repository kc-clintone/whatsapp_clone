import { StyleSheet } from 'react-native';

import ChatListItem from '../components/ChatListItem/ChatListItem.js';
import { Text, View } from '../components/Theme/Themed';

export default function Settings() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Settings</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 0.5;
	},
	title: {
		fontSize: 19,
		fontWeight: 'bold',
	},
	separator: {
		marginVertical: 35,
		height: 1,
		width: '85%',
	},
});
