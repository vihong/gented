import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Icon from '../atoms/Icon';
import AppText from '../atoms/AppText';

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
			<AppText style={styles.appText}>{label}</AppText>
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
	appText   : {
		paddingTop : 5
	}
});
