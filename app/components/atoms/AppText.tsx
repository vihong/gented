import React from 'react'
import { Text } from 'react-native'
import defaultStyles from '../../config/defaultStyles'

interface AppTextProps {
	onPress?: () => {}
	style: any // @TODO: add StylePop
	children: React.ReactNode
}

function AppText({ onPress, style, children, ...restProps }: AppTextProps) {
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
