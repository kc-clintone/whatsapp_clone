import { StyleSheet, ScrollView } from 'react-native';

import ChatListItem from '../components/ChatListItem/ChatListItem.js';
import { Text, View } from '../components/Theme/Themed';

export default function Chats() {
	return (
		<ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
			<ChatListItem />
			<ChatListItem />
			<ChatListItem />
			<ChatListItem />
			<ChatListItem />
			<ChatListItem />
			<ChatListItem />
			<ChatListItem />
			<ChatListItem />
			<ChatListItem />
			<ChatListItem />
			<ChatListItem />
			<ChatListItem />
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 15,
	},
});
