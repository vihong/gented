import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import defaultStyles from '../../config/defaultStyles';
import colorPalette from '../../config/colorPalette';

const AppTextInput = React.forwardRef(
	({ icon, style, onBlur, isValid, ...restProps }, ref) => {
		const [
			inputValue,
			setInputValue
		] = useState('');

		return (
			<View
				style={[
					styles.appTextInput,
					isValid
						? { borderColor: colorPalette.success, borderWidth: 1 }
						: null
				]}
			>
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
					placeholderTextColor={colorPalette.medium}
					onBlur={onBlur}
					{...restProps}
					ref={ref}
				/>
				{isValid && (
					<MaterialCommunityIcons
						name="checkbox-marked-circle"
						size={20}
						style={[
							styles.icon
						]}
						color={colorPalette.success}
					/>
				)}
			</View>
		);
	}
);

export default AppTextInput;

const styles = StyleSheet.create({
	appTextInput : {
		flexDirection   : 'row',
		padding         : 15,
		backgroundColor : colorPalette.backgroundGrey,
		borderRadius    : 25,
		width           : '100%',
		alignItems      : 'center',
		marginVertical  : 10
	},
	icon         : {
		marginRight    : 10,
		justifyContent : 'center',
		alignItems     : 'center'
	}
});
