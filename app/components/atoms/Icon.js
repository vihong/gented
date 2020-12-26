import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function Icon(props) {
	const { name, size = 40, color = '#fff', backgroundColor = '#000' } = props;

	const styles = StyleSheet.create({
		icon : {
			width           : size,
			height          : size,
			borderRadius    : size / 2,
			backgroundColor : backgroundColor,
			alignItems      : 'center',
			justifyContent  : 'center'
		}
	});

	return (
		<View style={styles.icon}>
			<MaterialCommunityIcons name={name} size={size / 2} color={color} />
		</View>
	);
}

export default Icon;
