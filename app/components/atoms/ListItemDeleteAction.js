import React from 'react';
import styled from 'styled-components';
import colorPalette from '../../config/colorPalette';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, TouchableWithoutFeedback } from 'react-native';

function ListItemDeleteAction({ onPress }) {
	return (
		<TouchableWithoutFeedback onPress={onPress}>
			<ProfileDeleteActionStyled>
				<MaterialCommunityIcons
					name="trash-can-outline"
					style={styles.icon}
				/>
			</ProfileDeleteActionStyled>
		</TouchableWithoutFeedback>
	);
}

export default ListItemDeleteAction;

const ProfileDeleteActionStyled = styled.View`
	width: 70px;
	background-color: ${colorPalette.danger};
	justify-content: center;
	align-items: center;
`;

const styles = StyleSheet.create({
	icon : {
		fontSize : 35,
		color    : colorPalette.white
	}
});
