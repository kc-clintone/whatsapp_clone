import * as WebBrowser from 'expo-web-browser';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../../constants/Colors';
import { useNavigation } from '@react-navigation/native';
import { MonoText } from '../Theme/StyledText';
import { Text, View } from '../Theme/Themed';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

export default function Contacts({ calls }) {
	const navigation = useNavigation();
	const img = calls.user.image;
	return (
		<TouchableOpacity style={styles.container}>
			<Image style={styles.profileImage} source={{ uri: calls.user.image }} />
			<View style={styles.userDetails}>
				<View style={styles.chatDetail}>
					<Text numberOfLines={1} style={styles.userName}>
						{calls.user.name}
					</Text>
					<Text style={styles.lastSeen}></Text>
				</View>
				<Text numberOfLines={1} style={styles.lastText}>
					{calls.user.status}
				</Text>
			</View>
			{/*<View style={styles.badge}>
				<Text style={styles.badgeContent}>
					{chats.chat_details.badge_count}
				</Text>
	</View>*/}
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
		backgroundColor: 'transparent',
	},
	profileImage: {
		width: 55,
		height: 55,
		borderRadius: 30,
		backgroundColor: 'gray',
	},
	userDetails: {
		justifyContent: 'space-between',
		width: '80%',
		left: 20,
		backgroundColor: 'transparent',
		borderBottomWidth: StyleSheet.hairlineWidth,
		borderBottomColor: 'gray',
		paddingBottom: 5,
	},
	chatDetail: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '100%',
		backgroundColor: 'transparent',
	},
	userName: {
		fontSize: 16,
		fontWeight: '600',
	},
	lastText: {
		fontSize: 14,
		fontWeight: '300',
		width: '90%',
		// marginTop: -10,
	},
	lastSeen: {
		fontSize: 12,
		fontWeight: '100',
	},
	badge: {
		top: -16,
		width: 18,
		height: 18,
		alignSelf: 'flex-end',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'green',
		padding: 0.5,
		// borderRadius: '50%',
	},
	badgeContent: {
		fontWeight: '100',
		fontSize: 11,
	},
});
