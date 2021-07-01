import React from 'react'
import styled from 'styled-components'
import { AnyObject } from 'yup/lib/object'
import colorPalette from '../../config/colorPalette'

// add TS for propShape

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
		<TouchableOpacityStyled
			style={{
				backgroundColor: backgroundColor
			}}
			onPress={onPress}
		>
			{label && (
				<TextStyled
					style={[
						{
							color: color ? color : colorPalette.white
						}
					]}
				>
					{label}
				</TextStyled>
			)}
		</TouchableOpacityStyled>
	)
}

export default AppButton

// style générique et inhérent à tous le buttons vs style variable en props
const TouchableOpacityStyled = styled.TouchableOpacity`
	width: 100%;
	border-radius: 30px;
	justify-content: center;
	align-items: center;
	padding: 15px;
	margin: 10px 0;
`

const TextStyled = styled.Text`
	font-size: 20px;
	/* text-transform: uppercase; */
`
