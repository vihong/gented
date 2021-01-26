import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colorPalette from '../../config/colorPalette';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

export default function ProductEditButton({ onPress }) {
	return (
		<TouchableOpacity onPress={onPress}>
			<View style={styles.container}>
				<MaterialCommunityIcons
					name="plus-circle"
					color="white"
					size={40}
				/>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container : {
		backgroundColor : colorPalette.primary,
		borderRadius    : 38,
		height          : 75,
		width           : 75,
		bottom          : 23,
		borderWidth     : 7,
		borderColor     : colorPalette.white,
		alignItems      : 'center',
		justifyContent  : 'center'
	}
});
