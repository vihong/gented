import React from 'react';
import { Platform, TouchableHighlight, StyleSheet } from 'react-native';
import styled from 'styled-components';
import colorPalette from '../../config/colorPalette';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Icon from '../atoms/Icon';

function IconListItem(props) {
	const {
		name,
		size,
		color,
		backgroundColor,
		title,
		description,
		onPress,
		renderRightActions,
		style
	} = props;

	return (
		<Swipeable renderRightActions={renderRightActions}>
			<TouchableHighlight
				onPress={onPress}
				underlayColor={colorPalette.lightgrey}
			>
				<IconListItemStyled style={style}>
					<Icon
						name={name}
						color={color}
						backgroundColor={backgroundColor}
						size={size}
					/>
					<ListItemDetailsStyled>
						<TitleStyled>{title}</TitleStyled>
					</ListItemDetailsStyled>
				</IconListItemStyled>
			</TouchableHighlight>
		</Swipeable>
	);
}

export default IconListItem;

const IconListItemStyled = styled.View`
	display: flex;
	flex-direction: row;
	/* margin-top: 20px; */
	padding: 15px;
`;

const ImageStyled = styled.Image`
	width: 80px;
	height: 80px;
	border-radius: 50px;
	justify-content: center;
	align-items: center;
`;

const ListItemDetailsStyled = styled.View`
	width: 100%;
	padding: 5px 12px;
	justify-content: center;
`;

const TitleStyled = styled.Text`
	margin-bottom: 7px;
	font-weight: bold;
`;

const DescriptionStyled = styled.Text`color: ${colorPalette.textColor};`;
