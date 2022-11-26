import * as WebBrowser from 'expo-web-browser';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';

import Colors from '../../constants/Colors';
import { MonoText } from '../Theme/StyledText';
import { Text, View } from '../Theme/Themed';

export default function ChatListItem() {
	return (
		<TouchableOpacity style={styles.container}>
			<Image
				style={styles.profileImage}
				source={require('../../assets/images/1f9dbfe4dc2b949035e959658cc843f3.jpg')}
			/>
			<View style={styles.userDetails}>
				<View style={styles.userChat}>
					<Text numberOfLines={1} style={styles.userName}>
						Billy the GOAT
					</Text>
					<Text numberOfLines={1} style={styles.lastText}>
						hello there, this is a demo application and is for test purposes
						only
					</Text>
				</View>
				<View style={styles.rightCont}>
					<Text style={styles.lastSeen}>yesterday</Text>
					<View style={styles.badge}>
						<Text style={styles.badgeContent}>5</Text>
					</View>
				</View>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		alignSelf: 'center',
		flexDirection: 'row',
		marginBottom: 15,
		marginTop: 10,
	},
	profileImage: {
		width: 55,
		height: 55,
		borderRadius: '50%',
	},
	userDetails: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		width: '80%',
		left: 20,
		borderBottomWidth: StyleSheet.hairlineWidth,
		borderBottomColor: 'gray',
		paddingBottom: 2,
	},
	userChat: {
		width: '90%',
	},
	rightCont: {
		zIndex: 10,
		left: -33,
		backgroundColor: 'transparent',
	},
	userName: {
		fontSize: 16,
		fontWeight: '600',
		marginBottom: 4,
	},
	lastText: {
		fontSize: 14,
		fontWeight: '300',
		width: '96%',
	},
	lastSeen: {
		fontSize: 12,
		fontWeight: '100',
		marginBottom: 10,
	},

	badge: {
		width: 20,
		height: 20,
		alignSelf: 'flex-end',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'green',
		padding: 1,
		borderRadius: '50%',
	},
	badgeContent: {
		fontWeight: '100',
		fontSize: 12,
	},
});
