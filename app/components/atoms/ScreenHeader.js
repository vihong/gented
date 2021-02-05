import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colorPalette from '../../config/colorPalette';
import IconInCircle from './IconInCircle';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Fragment } from 'react';

export default function ScreenHeader({ onPressLeft, onPressRight }) {
	return (
		<View style={styles.header}>
			<LeftHeader onPress={onPressLeft} />
			<RightHeader onPress={onPressRight} />
		</View>
	);
}

function LeftHeader({ onPress }) {
	return (
		<View style={styles.leftHeader}>
			<MaterialCommunityIcons name="chevron-left" size={30} color="white" />
			<Text onPress={onPress} style={styles.icons}>
				Retour{' '}
			</Text>
		</View>
	);
}

function RightHeader({ onPress }) {
	return <MaterialCommunityIcons name="hanger" size={30} color="white" />;
}

const styles = StyleSheet.create({
	header     : {
		// borderWidth       : 1,
		// borderColor       : 'red',
		position          : 'absolute',
		zIndex            : 1,
		top               : '8%',
		width             : '100%',
		paddingHorizontal : '3%',
		paddingRight      : '5%',
		display           : 'flex',
		flexDirection     : 'row',
		justifyContent    : 'space-between',
		alignItems        : 'center',
		color             : 'white'
	},
	icons      : {
		color    : colorPalette.white,
		fontSize : 16
	},
	leftHeader : {
		// borderWidth    : 1,
		// borderColor    : 'white',
		flexDirection  : 'row',
		justifyContent : 'space-between',
		alignItems     : 'center'
	}
});
