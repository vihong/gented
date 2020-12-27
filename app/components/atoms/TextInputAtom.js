import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Screen from './Screen';
import defaultStyles from '../../config/defaultStyles';
import colorPalette from '../../config/colorPalette';

function TextInputAtom({ icon, placeholder }) {
	const [
		inputValue,
		setInputValue
	] = useState('');

	return (
		<View style={styles.textInputAtom}>
			{icon && (
				<MaterialCommunityIcons
					name={icon}
					size={20}
					style={styles.icon}
				/>
			)}
			<TextInput
				style={defaultStyles.text}
				placeholder={placeholder}
				onChangeText={(inputValue) => setInputValue(inputValue)}
			/>
		</View>
	);
}

export default TextInputAtom;

const styles = StyleSheet.create({
	textInputAtom : {
		flexDirection   : 'row',
		padding         : 15,
		backgroundColor : colorPalette.backgroundGrey,
		borderRadius    : 25,
		width           : '100%',
		alignItems      : 'center',
		marginVertical  : 20
	},
	icon          : {
		marginRight    : 10,
		justifyContent : 'center',
		alignItems     : 'center'
	}
});
