import React from 'react';
import colorPalette from '../../config/colorPalette';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Text from './Text';

export default function Button({ label, backgroundColor, color, onPress, style }) {
	return (
		<TouchableOpacity
			style={[
				styles.touchableOpacity,
				{
					backgroundColor: backgroundColor ? backgroundColor : colorPalette.primary
				}
			]}
			onPress={onPress}
		>
			{label && (
				<Text
					style={[
						styles.text,
						{
							color: color ? color : colorPalette.white
						},
						style
					]}
				>
					{label}
				</Text>
			)}
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	touchableOpacity: {
		width: '100%',
		borderRadius: 30,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 15,
		marginVertical: 10,
		marginHorizontal: 0
	},
	text: {
		fontSize: 20,
		textTransform: 'uppercase',
		fontWeight: 'bold'
	}
});
