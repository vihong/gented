import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import defaultStyles from '../../config/defaultStyles';
import colorPalette from '../../config/colorPalette';

function AppTextInput({ icon, style, ...restProps }) {
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
					style={[
						styles.icon,
						style
					]}
				/>
			)}
			<TextInput
				style={defaultStyles.text}
				onChangeText={(inputValue) => setInputValue(inputValue)}
				{...restProps}
			/>
		</View>
	);
}

export default AppTextInput;

const styles = StyleSheet.create({
	textInputAtom : {
		flexDirection   : 'row',
		padding         : 15,
		backgroundColor : colorPalette.backgroundGrey,
		borderRadius    : 25,
		width           : '100%',
		alignItems      : 'center',
		marginVertical  : 10
	},
	icon          : {
		marginRight    : 10,
		justifyContent : 'center',
		alignItems     : 'center'
	}
});
