import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';

export default function Icon({ style, ...restProps }) {
	const styles = StyleSheet.create({
		container : {
			alignItems     : 'center',
			justifyContent : 'center'
		}
	});

	return (
		<View
			style={[
				styles.container,
				style
			]}
		>
			<MaterialCommunityIcons {...restProps} />
		</View>
	);
}
