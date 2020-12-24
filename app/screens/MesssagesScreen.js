import React, { useState } from 'react';
import { FlatList } from 'react-native';
import ListItem from '../components/molecules/ListItem';
import Screen from '../components/atoms/Screen';
import ItemSeparatorComponent from '../components/atoms/ItemSeparatorComponent';
import ListItemDeleteAction from '../components/atoms/ListItemDeleteAction';

const initialMessages = [
	{
		id          : '1',
		title       : 'David',
		description : 'Description1',
		image       : require('../assets/images/lad_2.jpg')
	},
	{
		id          : '2',
		title       : 'David',
		description : 'Description2',
		image       : require('../assets/images/lad_1.jpg')
	}
];

function MesssagesScreen() {
	const [
		messages,
		setMessages
	] = useState(initialMessages);

	const handleDelete = (messageToDelete) => {
		const messagesUpdated = messages.filter(
			(message) => message.id != messageToDelete.id
		);
		setMessages(messagesUpdated);
	};

	return (
		<Screen>
			<FlatList
				data={messages}
				keyExtractor={(message) => message.id.toString()}
				renderItem={({ item }) => (
					<ListItem
						image={item.image}
						fullName={item.title}
						description={item.description}
						onPress={() => console.log('message tapped', item)}
						renderRightActions={() => (
							<ListItemDeleteAction
								onPress={() => handleDelete(item)}
							/>
						)}
					/>
				)}
				ItemSeparatorComponent={() => <ItemSeparatorComponent />}
				refreshing={isRefresh}
			/>
		</Screen>
	);
}

export default MesssagesScreen;
