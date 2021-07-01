import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import colorPalette from '../../config/colorPalette'
import Text from './Text'

interface AppButtonProps {
	label: string
	backgroundColor?: string
	color: string
	onPress: () => {}
}

function AppButton({
	label,
	backgroundColor = colorPalette.primary,
	color,
	onPress
}: AppButtonProps) {
	return (
		<TouchableOpacity
			style={[
				styles.touchable,
				{
					backgroundColor: backgroundColor
				}
			]}
			onPress={onPress}
		>
			{label && (
				<Text
					style={[
						styles.text,
						{
							color: color ? color : colorPalette.white
						}
					]}
				>
					{label}
				</Text>
			)}
		</TouchableOpacity>
	)
}

export default AppButton

const styles = StyleSheet.create({
	touchable: {
		width: '100%',
		borderRadius: 30,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 15,
		marginVertical: 10,
		marginHorizontal: 0
	},
	text: {
		fontSize: 20
	}
})
