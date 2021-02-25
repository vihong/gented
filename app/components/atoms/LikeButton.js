import React from 'react';
import { Pressable } from 'react-native';
import colorPalette from '../../config/colorPalette';
import Icon from './Icon';

export default function LikeButton({ hasLiked, onPress, style }) {
	return (
		<Pressable onPress={onPress}>
			<Icon
				name={hasLiked ? 'heart' : 'heart-outline'}
				size={20}
				color={hasLiked ? colorPalette.primary : colorPalette.dark}
				style={style}
			/>
		</Pressable>
	);
}
