import { StyleSheet, FlatList } from 'react-native';
import { Text, View } from '../components/Theme/Themed';
import calls from '../assets/data/calls.json';
import Contacts from '../components/Contacts/Contacts';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const callHistory = calls;

export default function Calls() {
	return (
		<View style={styles.container}>
			{callHistory ? (
				<View style={styles.contacts}>
					<FlatList
						showsVerticalScrollIndicator={false}
						style={styles.container}
						data={calls}
						renderItem={({ item }) => <Contacts calls={item} />}
					/>
				</View>
			) : (
				<View style={styles.nocalls}>
					<MaterialCommunityIcons
						name='phone-classic-off'
						style={styles.noCallIcon}
					/>
					<Text>All your call history will appear here.</Text>
				</View>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	contacts: {
		paddingVertical: 2.5,
		paddingHorizontal: 10,
	},
	noCallIcon: {
		fontSize: 65,
		color: 'gray',
		paddingVertical: 15,
	},
	nocalls: {
		width: '100%',
		height: '100%',
		justifyContent: 'center',
		alignSelf: 'center',
		alignItems: 'center',
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
