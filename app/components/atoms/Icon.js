import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View } from 'react-native';

export default function Icon({ style, ...restProps }) {
	return (
		<View style={style}>
			<MaterialCommunityIcons {...restProps} />
		</View>
	);
}
