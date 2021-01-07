import React, { Fragment, useState } from 'react';
import { Button, FlatList, Modal, StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Screen from '../atoms/Screen';
import colorPalette from '../../config/colorPalette';
import AppText from '../atoms/AppText';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import PickerItem from './PickerItem';

// Ici on a externalisé le state pour le rendre en boite noir. ce n'est plus lui le propriétaire de la donnée
// qui est sélectionnée, d'où selected Item en props et le onSelectItem pour pouvoir le modifier de l'extérieur
function AppPicker({
	icon,
	itemsAvailable,
	placeholder,
	onSelectItem,
	selectedItem,
	width
}) {
	const [
		isModalVisible,
		setIsModalVisible
	] = useState(false);

	return (
		<Fragment>
			<TouchableWithoutFeedback
				onPress={() => {
					setIsModalVisible(true);
				}}
			>
				<View
					style={[
						styles.textInputAtom,
						{ width }
					]}
				>
					{icon && (
						<MaterialCommunityIcons
							name={icon}
							size={20}
							style={styles.icon}
						/>
					)}
					{selectedItem ? (
						<Fragment>
							<AppText
								style={styles.appText}
								placeholder="Firstname"
							>
								{selectedItem.label}
							</AppText>
							<MaterialCommunityIcons
								name={'chevron-down'}
								size={20}
							/>
						</Fragment>
					) : (
						<Fragment>
							<AppText
								style={styles.placeholder}
								placeholder="Firstname"
							>
								{placeholder && placeholder}
							</AppText>
							<MaterialCommunityIcons
								name={'chevron-down'}
								size={20}
								color={styles.placeholder.color}
							/>
						</Fragment>
					)}
				</View>
			</TouchableWithoutFeedback>

			<Modal visible={isModalVisible} animationType="slide">
				<Screen>
					<Button
						title="Close x"
						onPress={() => setIsModalVisible(false)}
					/>
					<FlatList
						columnWrapperStyle={styles.flatList}
						data={itemsAvailable}
						keyExtractor={(item) => item.id.toString()}
						numColumns={3}
						renderItem={({ item }) => (
							<PickerItem
								label={item.label}
								iconName={item.iconName}
								size={70}
								backgroundColor={item.iconBackgroundColor}
								onPress={() => {
									setIsModalVisible(false);
									onSelectItem && onSelectItem(item);
								}}
							/>
						)}
					/>
				</Screen>
			</Modal>
		</Fragment>
	);
}

export default AppPicker;

const styles = StyleSheet.create({
	textInputAtom : {
		flexDirection   : 'row',
		padding         : 15,
		backgroundColor : colorPalette.backgroundGrey,
		borderRadius    : 25,
		width           : '100%',
		alignItems      : 'center',
		marginBottom    : 5
	},
	icon          : {
		marginRight    : 10,
		justifyContent : 'center',
		alignItems     : 'center'
	},
	appText       : {
		flex : 1
	},
	flatList      : {
		justifyContent : 'center'
		// width          : '100%'
		// borderColor    : 'blue'
	},
	placeholder   : {
		flex  : 1,
		color : colorPalette.medium
	}
});
