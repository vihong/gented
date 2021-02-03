import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View } from 'react-native';

//@TODO: change "icon" -> "name"
export default function Icon({ icon, color, backgroundColor, style, ...restProps }) {
	return (
		<View style={style}>
			<MaterialCommunityIcons {...restProps} />
		</View>
	);
}
