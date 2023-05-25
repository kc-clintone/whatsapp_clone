import { StyleSheet } from 'react-native';
import { View, Text } from '../Theme/Themed';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

const Message = ({ message }) => {
	const incoming = () => {
		return message.user.id === 'u1';
	};

	return (
		<View
			style={[
				styles.container,
				{
					backgroundColor: incoming() ? '#abffa9' : '#f4fff8',
					alignSelf: incoming() ? 'flex-end' : 'flex-start',
					borderBottomLeftRadius: incoming() ? 10 : 0,
					borderBottomRightRadius: incoming() ? 0 : 10,
				},
			]}
		>
			<Text>{message.text}</Text>
			<Text style={styles.time}>{dayjs(message.createdAt).fromNow(true)}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		margin: 5,
		padding: 10,
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
		maxWidth: '80%',

		// Shadows
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.18,
		shadowRadius: 1.0,

		elevation: 1,
	},
	time: {
		color: 'gray',
		alignSelf: 'flex-end',
	},
});

export default Message;
