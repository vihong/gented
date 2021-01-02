import React from 'react';
import { Platform, StyleSheet, TouchableHighlight } from 'react-native';
import styled from 'styled-components';
import colorPalette from '../../config/colorPalette';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function ListItem({
	image,
	IconComponent,
	title,
	description,
	style,
	onPress,
	renderRightActions,
	icon
}) {
	const styles = {
		icon : {
			width          : 40,
			height         : 40,
			justifyContent : 'center',
			alignSelf      : 'center',
			color          : colorPalette.textColor,
			paddingLeft    : 10
		}
	};

	return (
		<Swipeable renderRightActions={renderRightActions}>
			<TouchableHighlight
				onPress={onPress}
				underlayColor={colorPalette.lightgrey}
			>
				<ListItemStyled style={style}>
					{IconComponent}
					{image && <ImageStyled source={image} />}
					<ListItemDetailsStyled>
						<TitleStyled numberOfLines={1}>{title}</TitleStyled>
						{description && (
							<DescriptionStyled numberOfLines={1}>
								{description}
							</DescriptionStyled>
						)}
					</ListItemDetailsStyled>
					{icon && (
						<MaterialCommunityIcons
							name={icon}
							size={20}
							style={styles.icon}
						/>
					)}
				</ListItemStyled>
			</TouchableHighlight>
		</Swipeable>
	);
}

export default ListItem;

const ListItemStyled = styled.View`
	/* border: 1px solid black; */
	flex-direction: row;
	padding: 15px;
	background: ${colorPalette.white};
`;

const ImageStyled = styled.Image`
	width: 70px;
	height: 70px;
	border-radius: 50px;
	/* border: 1px solid blue; */
	justify-content: center;
	align-items: center;
`;

const ListItemDetailsStyled = styled.View`
	/* border: 1px solid blue; */
	/* background: #a2ada2; */
	flex: 1;
	padding: 5px 12px;
	justify-content: center;
`;

const TitleStyled = styled.Text`
	/* background: red; */
	margin-bottom: 7px;
	font-weight: ${Platform.OS === 'ios' ? 500 : 700};
`;

const DescriptionStyled = styled.Text`
	/* background: blue; */
	color: ${colorPalette.textColor};
`;
