import { useAppState } from '@react-native-community/hooks';
import React, { useState } from 'react';
import { Text, StyleSheet, Platform } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import styled from 'styled-components';
import Icon from '../components/atoms/Icon';
import ItemSeparatorComponent from '../components/atoms/ItemSeparatorComponent';
import Screen from '../components/atoms/Screen';
import ListItem from '../components/molecules/ListItem';
import colorPalette from '../config/colorPalette';

function MyAccountScreen(props) {
	const [
		categories,
		setCategories
	] = useState([
		{
			id              : 1,
			title           : 'My Products',
			name            : 'format-list-bulleted',
			size            : 50,
			color           : colorPalette.white,
			backgroundColor : colorPalette.primary
		},
		{
			id              : 2,
			title           : 'My Messages',
			name            : 'email',
			size            : 50,
			color           : colorPalette.white,
			backgroundColor : colorPalette.secondary
		}
	]);

	return (
		<Screen style={{ backgroundColor: colorPalette.backgroundGrey }}>
			<UserItemStyled>
				<ListItem
					title={'Jeremaih Springfield'}
					image={require('../assets/images/green_jacket.jpg')}
					description={'2 messages'}
				/>
			</UserItemStyled>
			<FlatList
				data={categories}
				keyExtractor={(category) => category.id.toString()}
				renderItem={({ item }) => (
					<ListItem
						title={item.title}
						IconComponent={
							<Icon
								name={item.name}
								size={item.size}
								color={item.color}
								backgroundColor={item.backgroundColor}
							/>
						}
					/>
				)}
				ItemSeparatorComponent={ItemSeparatorComponent}
				style={{ marginVertical: 20 }}
			/>
			<ListItem
				title={'Log Out'}
				IconComponent={
					<Icon
						name={'logout'}
						size={50}
						color={colorPalette.white}
						backgroundColor={colorPalette.yellow}
					/>
				}
			/>
		</Screen>
	);
}

export default MyAccountScreen;

const UserItemStyled = styled.View`
	margin: ${Platform.OS === 'ios' ? '10px' : '20px'} 0 30px;
`;
