import React, { ReactElement } from 'react'
import { Text as AppText } from 'react-native'

type Props = {
	onPress?: () => {}
	style?: Object
	children: any
}

export default function Text(props: Props) {
	const { onPress, style, children, ...restProps } = props

	return (
		<AppText style={style} onPress={onPress && onPress} {...restProps}>
			{children}
		</AppText>
	)
}
