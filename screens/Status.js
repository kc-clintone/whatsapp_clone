import { StyleSheet } from 'react-native';

import ChatListItem from '../components/ChatListItem/ChatListItem.js';
import { Text, View } from '../components/Theme/Themed';

export default function Status() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Status</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: '80%',
	},
});
