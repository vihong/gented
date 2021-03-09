import React, { useState } from 'react';
import { FlatList } from 'react-native';
import ListItem from '../molecules/ListItem';
import Screen from '../atoms/Screen';
import ItemSeparatorComponent from '../atoms/ItemSeparatorComponent';
import ListItemDeleteAction from '../atoms/ListItemDeleteAction';

const initialMessages = [
	{
		id          : '1',
		title       : 'Andy',
		description : 'Ton pull rouge est toujours disponible ?',
		image       : require('../../assets/images/lad_2.jpg')
	},
	{
		id          : '2',
		title       : 'Howard',
		description : "Ça marche, je t'envoie la cravate ce soir !",
		image       : require('../../assets/images/lad_1.jpg')
	}
];

export default function MesssagesScreen() {
	const [
		messages,
		setMessages
	] = useState(initialMessages);

	const handleDelete = (messageToDelete) => {
		const messagesUpdated = messages.filter((message) => message.id != messageToDelete.id);
		setMessages(messagesUpdated);
	};

	const [
		isRefresh,
		setIsRefresh
	] = useState(false);

	return (
		<Screen>
			<FlatList
				data={messages}
				keyExtractor={(message) => message.id.toString()}
				renderItem={({ item }) => (
					<ListItem
						image={item.image}
						title={item.title}
						description={item.description}
						icon="chevron-right"
						onPress={() => console.log('message tapped', item)}
						renderRightActions={() => (
							<ListItemDeleteAction onPress={() => handleDelete(item)} />
						)}
					/>
				)}
				ItemSeparatorComponent={() => <ItemSeparatorComponent />}
				refreshing={isRefresh}
				onRefresh={() =>
					setMessages([
						{
							id          : '2',
							title       : 'David',
							description : 'Description2',
							image       : require('../../assets/images/blue_jacket.jpg')
						}
					])}
			/>
		</Screen>
	);
}
