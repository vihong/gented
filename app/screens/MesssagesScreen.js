import React from 'react';
import { FlatList } from 'react-native';
import ListItem from '../components/molecules/ListItem';
import Constants from 'expo-constants';
import styled from 'styled-components';
import Screen from '../components/atoms/Screen';
import ItemSeparatorComponent from '../components/atoms/ItemSeparatorComponent';
import ProfileDeleteAction from '../components/atoms/ProfileDeleteAction';

const messages = [
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
		image       : require('../assets/images/lad_2.jpg')
	}
];

function MesssagesScreen(props) {
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
							<ProfileDeleteAction
								onPress={() => alert('Pokemon')}
							/>
						)}
					/>
				)}
				ItemSeparatorComponent={() => <ItemSeparatorComponent />}
			/>
		</Screen>
	);
}

export default MesssagesScreen;

const MesssagesScreenStyled = styled.SafeAreaView`
	padding-top: ${Constants.statusBarHeight};
`;
