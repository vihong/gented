import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colorPalette from '../../config/colorPalette';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function ScreenHeader({ onPressLeft, onPressRight }) {
	return (
		<View style={styles.header}>
			<HeaderLeft onPress={onPressLeft} />
			<HeaderRight onPress={onPressRight} />
		</View>
	);
}

function HeaderLeft({ onPress }) {
	return (
		<TouchableOpacity onPress={onPress}>
			<View style={styles.headerLeft}>
				<MaterialCommunityIcons name="chevron-left" size={40} color={colorPalette.white} />
				<Text style={styles.leftText}>Retour </Text>
			</View>
		</TouchableOpacity>
	);
}

function HeaderRight({ onPress }) {
	return (
		<TouchableOpacity onPress={onPress}>
			<MaterialCommunityIcons name="hanger" size={30} color={colorPalette.primary} />
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	header     : {
		// borderWidth       : 1,
		// borderColor       : 'red',
		position          : 'absolute',
		zIndex            : 1,
		top               : '5%',
		width             : '100%',
		paddingHorizontal : '3%',
		paddingRight      : '9%',
		display           : 'flex',
		flexDirection     : 'row',
		justifyContent    : 'space-between',
		alignItems        : 'center',
		color             : 'white'
	},
	headerLeft : {
		flexDirection  : 'row',
		justifyContent : 'space-between',
		alignItems     : 'center'
	},
	leftText   : {
		color      : colorPalette.white,
		fontSize   : 18,
		marginLeft : -8
	}
});
