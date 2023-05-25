import { StyleSheet, FlatList } from 'react-native';
import chats from '../assets/data/chats.json';
import ChatListItem from '../components/ChatListItem/ChatListItem.js';
import { Text, View } from '../components/Theme/Themed';

export default function Chats() {
	return (
		<FlatList
			showsVerticalScrollIndicator={false}
			style={styles.container}
			data={chats}
			renderItem={({ item }) => <ChatListItem chats={item} />}
		/>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 15,
	},
});
