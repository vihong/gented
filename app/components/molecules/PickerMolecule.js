import React, { useState } from 'react';
import { Button, FlatList, Modal, StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Screen from '../atoms/Screen';
import colorPalette from '../../config/colorPalette';
import AppText from '../atoms/AppText';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import PickerItem from './PickerItem';
import ButtonAtom from '../atoms/ButtonAtom';

function PickerMolecule({ icon, itemsAvailable, placeholder }) {
	const [
		isModalVisible,
		setIsModalVisible
	] = useState(false);

	const [
		selectedItem,
		setSelectedItem
	] = useState();

	const onSelectItem = (item) => {
		setSelectedItem(item);
	};

	return (
		<React.Fragment>
			<TouchableWithoutFeedback
				onPress={() => {
					setIsModalVisible(true);
				}}
			>
				<View style={styles.textInputAtom}>
					{icon && (
						<MaterialCommunityIcons
							name={icon}
							size={20}
							style={styles.icon}
						/>
					)}
					<AppText style={styles.appText} placeholder="Firstname">
						{selectedItem ? selectedItem.label : placeholder}
					</AppText>
					<MaterialCommunityIcons name={'chevron-down'} size={20} />
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
									onSelectItem(item);
								}}
							/>
						)}
					/>
				</Screen>
			</Modal>
		</React.Fragment>
	);
}

export default PickerMolecule;

const styles = StyleSheet.create({
	textInputAtom : {
		flexDirection   : 'row',
		padding         : 15,
		backgroundColor : colorPalette.backgroundGrey,
		borderRadius    : 25,
		width           : '100%',
		alignItems      : 'center'
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
		// borderWidth    : 1
		// borderColor    : 'blue'
	}
});
