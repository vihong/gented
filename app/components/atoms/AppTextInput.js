import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import defaultStyles from '../../config/defaultStyles';
import colorPalette from '../../config/colorPalette';

const AppTextInput = React.forwardRef(
	({ icon, style, onBlur, isValid, width, ...restProps }, ref) => {
		const [
			inputValue,
			setInputValue
		] = useState('');

		return (
			<View
				style={[
					styles.container,
					isValid && styles.success,
					{ width }
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
					style={[
						defaultStyles.text,
						styles.textInput
					]}
					onChangeText={(inputValue) => setInputValue(inputValue)}
					placeholderTextColor={colorPalette.medium}
					onBlur={onBlur}
					{...restProps}
					ref={ref}
					clearButtonMode={'always'}
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
	container : {
		flexDirection   : 'row',
		padding         : 15,
		backgroundColor : colorPalette.backgroundGrey,
		borderRadius    : 25,
		width           : '100%',
		alignItems      : 'center',
		marginVertical  : 10
	},
	textInput : {
		flex : 1
	},
	icon      : {
		marginRight    : 10,
		justifyContent : 'center',
		alignItems     : 'center'
	},
	success   : {
		borderColor : colorPalette.success,
		borderWidth : 1
	}
});
