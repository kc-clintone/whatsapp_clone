import { useState } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const InputBox = () => {
	const [newMessage, setNewMessage] = useState('');

	const onSend = () => {
		console.warn('Sending a new message: ', newMessage);

		setNewMessage('');
	};

	return (
		<SafeAreaView edges={['bottom']} style={styles.container}>
			{/* Icon */}
			<AntDesign name='plus' size={20} color='royalblue' />

			{/* Text Input */}
			<TextInput
				value={newMessage}
				onChangeText={setNewMessage}
				style={styles.input}
				placeholder='type your message...'
			/>

			{/* Icon */}
			<MaterialIcons
				onPress={onSend}
				style={styles.send}
				name='send'
				size={16}
				color='white'
			/>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		padding: 8,
		paddingHorizontal: 10,
		alignItems: 'center',
		backgroundColor: '#ffffff',
	},
	input: {
		flex: 1,
		padding: 5,
		paddingHorizontal: 10,
		marginHorizontal: 10,
		backgroundColor: '#ffffff',
		borderRadius: 50,
		borderColor: '#000',
		borderWidth: StyleSheet.hairlineWidth,
	},
	send: {
		backgroundColor: '#000',
		padding: 7,
		borderRadius: 15,
		overflow: 'hidden',
	},
});

export default InputBox;
