import React from 'react';
import {
	FlatList,
	SafeAreaView,
	Text,
	TouchableHighlight,
	View
} from 'react-native';
import Profile from '../components/molecules/Profile';
import Constants from 'expo-constants';
import styled from 'styled-components';
import Screen from '../components/atoms/Screen';
import ItemSeparatorComponent from '../components/atoms/ItemSeparatorComponent';

console.log('Constants: ', Constants.statusBarHeight);

function MesssagesScreen(props) {
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

	return (
		<Screen>
			<FlatList
				data={messages}
				keyExtractor={(message) => message.id.toString()}
				renderItem={({ item }) => (
					<TouchableHighlight>
						<Profile
							image={item.image}
							fullName={item.title}
							description={item.description}
						/>
					</TouchableHighlight>
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
