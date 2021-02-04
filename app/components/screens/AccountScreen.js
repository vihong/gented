import React, { useState } from 'react';
import { Platform, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

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
			title           : 'My Wardrobe', //mon armoire, mes affaires, ma penderie
			name            : 'wardrobe',
			size            : 50,
			color           : colorPalette.white,
			backgroundColor : colorPalette.primary,
			style           : {},
			targetScreen    : routes.WARDROBE
		},
		{
			id              : 2,
			title           : 'My Messages',
			name            : 'email',
			size            : 50,
			color           : colorPalette.white,
			backgroundColor : colorPalette.primary,
			style           : {},
			targetScreen    : routes.MESSAGES
		}
	]);

	const { user, logOut } = useAuth();

	return (
		<Screen style={styles.screen}>
			<FlatList
				data={categories}
				keyExtractor={(category) => category.id.toString()}
				ListHeaderComponent={() => <UserListItem user={user} />}
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
				ListFooterComponent={() => <LogOutListItem onPress={logOut} />}
			/>
		</Screen>
	);
}

//@TODO: rename pour rendre plus géénrique et mettre dans atoms/
function UserListItem({ user }) {
	return (
		<ListItem
			title={user.name}
			description={user.email}
			// image={user.picture} dans l'avenir c'est ça
			image={require('../../assets/images/green_jacket.jpg')}
			style={styles.user}
		/>
	);
}

function LogOutListItem({ onPress }) {
	return (
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
			onPress={onPress}
			style={{ marginVertical: 50 }}
		/>
	);
}

const styles = StyleSheet.create({
	screen : {
		backgroundColor : colorPalette.backgroundGrey,
		flex            : 1
	},
	user   : {
		marginTop        : Platform.OS === 'ios' ? 10 : 20,
		marginHorizontal : 0,
		marginBottom     : 30
	}
});
