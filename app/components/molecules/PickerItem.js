import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Icon from '../atoms/Icon';
import TextAtom from '../atoms/TextAtom';

function PickerItem({ label, iconName, size, backgroundColor, onPress }) {
	return (
		<TouchableOpacity onPress={onPress} style={styles.container}>
			{iconName && (
				<Icon
					name={iconName}
					backgroundColor={backgroundColor}
					size={size}
				/>
			)}
			<TextAtom style={styles.textAtom}>{label}</TextAtom>
		</TouchableOpacity>
	);
}

export default PickerItem;

const styles = StyleSheet.create({
	container : {
		alignItems        : 'center',
		paddingHorizontal : 20,
		paddingVertical   : 15,
		width             : '33%'
	},
	textAtom  : {
		paddingTop : 5
	}
});
