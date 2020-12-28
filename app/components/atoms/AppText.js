import React from 'react';
import { Text } from 'react-native';
import defaultStyles from '../../config/defaultStyles';

function AppText(props) {
	const { numberOfLines, onPress, style } = props;
	return (
		<Text
			style={[
				defaultStyles.text,
				style
			]}
			onPress={onPress && onPress}
			numberOfLines={numberOfLines && numberOfLines}
		>
			{props.children}
		</Text>
	);
}

export default AppText;
