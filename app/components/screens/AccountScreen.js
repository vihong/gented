import React, { useState } from 'react';
import { Alert, Platform } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import styled from 'styled-components';

import colorPalette from '../../config/colorPalette';
import IconInCircle from '../atoms/IconInCircle';
import ItemSeparatorComponent from '../atoms/ItemSeparatorComponent';
import Screen from '../atoms/Screen';
import ListItem from '../molecules/ListItem';
import routes from '../navigation/routes';
import useAuth from '../hooks/useAuth';

export default function AccountScreen({ navigation }) {
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
			backgroundColor : colorPalette.primary,
			targetScreen    : routes.MESSAGES
		},
		{
			id              : 2,
			title           : 'My Messages',
			name            : 'email',
			size            : 50,
			color           : colorPalette.white,
			backgroundColor : colorPalette.primary,
			targetScreen    : routes.MESSAGES
		}
	]);

	const { user, logOut } = useAuth();

	return (
		<Screen style={{ backgroundColor: colorPalette.backgroundGrey }}>
			<UserItemStyled>
				<ListItem
					title={user.name}
					description={user.email}
					image={require('../../assets/images/green_jacket.jpg')}
				/>
			</UserItemStyled>
			<FlatList
				data={categories}
				keyExtractor={(category) => category.id.toString()}
				renderItem={({ item }) => (
					<ListItem
						title={item.title}
						IconComponent={
							<IconInCircle
								name={item.name}
								size={item.size}
								color={item.color}
								backgroundColor={item.backgroundColor}
							/>
						}
						onPress={() => navigation.navigate(item.targetScreen)}
					/>
				)}
				ItemSeparatorComponent={ItemSeparatorComponent}
				style={{ marginVertical: 20 }}
			/>
			<ListItem
				title={'Log Out'}
				IconComponent={
					<IconInCircle
						name={'logout'}
						size={50}
						color={colorPalette.white}
						backgroundColor={colorPalette.primary}
					/>
				}
				onPress={logOut}
			/>
		</Screen>
	);
}

const UserItemStyled = styled.View`margin: ${Platform.OS === 'ios' ? '10px' : '20px'} 0 30px;`;
