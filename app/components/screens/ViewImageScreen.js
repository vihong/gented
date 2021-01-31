import React from 'react';
import { Alert, Platform, Pressable } from 'react-native';
import styled from 'styled-components';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colorPalette from '../../config/colorPalette';
import { TouchableHighlight } from 'react-native-gesture-handler';

function ViewImageScreen({ navigation, route }) {
	const { item } = route.params;
	const iconStyle = {
		color    : 'white',
		fontSize : 30
	};

	const handlePressTrash = () => {
		Alert.alert('', 'Are you sure you want to delete this?', [
			{ text: 'Yes' },
			{ text: 'No' }
		]);
	};

	return (
		<ViewImageScreenStyled>
			<IconsContainerStyled>
				<TouchableHighlight onPress={() => navigation.goBack()}>
					<MaterialCommunityIcons name="close" style={iconStyle} />
				</TouchableHighlight>
				<Pressable onPressIn={handlePressTrash}>
					<MaterialCommunityIcons name="trash-can-outline" style={iconStyle} />
				</Pressable>
			</IconsContainerStyled>
			<ImageStyled source={{ uri: item.images[0].url }} resizeMode="contain" />
		</ViewImageScreenStyled>
	);
}

export default ViewImageScreen;

const ViewImageScreenStyled = styled.View`
	border: 1px solid black;
	background: #000;
	align-items: center;
`;

const ImageStyled = styled.Image`
	width: 100%;
	height: 100%;
`;

const IconsContainerStyled = styled.SafeAreaView`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: flex-start;
	height: 100%;
	width: 80%;
	position: absolute;
	z-index: 1;
	top: ${Platform.OS === 'ios' ? '50px' : '20px'};
	/* border: 1px solid white; */
`;

const IconStyled = styled.View`
	height: 50px;
	width: 50px;
	color: ${colorPalette.white};
`;

const CloseIconStyled = styled.View`
	height: 50px;
	width: 50px;
	background: #4ecdc4;
`;
