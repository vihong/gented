import React from 'react'
import { Text } from 'react-native'
import defaultStyles from '../../config/defaultStyles'

function AppText({ onPress, style, children, ...restProps }) {
	return (
		<Text
			style={[
				defaultStyles.text,
				style
			]}
			onPress={onPress && onPress}
			{...restProps}
		>
			{children}
		</Text>
	)
}

export default AppText
