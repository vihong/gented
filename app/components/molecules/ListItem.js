import React from 'react';
import { Platform, TouchableHighlight } from 'react-native';
import styled from 'styled-components';
import colorPalette from '../../config/colorPalette';
import Swipeable from 'react-native-gesture-handler/Swipeable';

function ListItem(props) {
	const {
		image,
		IconComponent,
		title,
		description,
		style,
		onPress,
		renderRightActions
	} = props;
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
						<TitleStyled>{title}</TitleStyled>
						{description && (
							<DescriptionStyled>{description}</DescriptionStyled>
						)}
					</ListItemDetailsStyled>
				</ListItemStyled>
			</TouchableHighlight>
		</Swipeable>
	);
}

export default ListItem;

const ListItemStyled = styled.View`
	/* border: 1px solid black; */
	flex-direction: row;
	/* margin-top: 20px; */
	padding: 15px;
	background: ${colorPalette.white};
`;

const ImageStyled = styled.Image`
	width: 70px;
	height: 70px;
	border-radius: 50px;
	/* border: 1px solid black; */
	justify-content: center;
	align-items: center;
`;

const ListItemDetailsStyled = styled.View`
	/* border: 1px solid blue; */
	/* background: #a2ada2; */
	width: 100%;
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
