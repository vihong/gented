import React from 'react';
import { Alert, Platform, Pressable, StyleSheet } from 'react-native';
import styled from 'styled-components';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colorPalette from '../../config/colorPalette';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import Text from '../atoms/Text';

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
				<TouchableOpacity onPress={() => navigation.goBack()}>
					{/* <MaterialCommunityIcons name="close" style={iconStyle} /> */}
					<Text style={styles.fermer}>Fermer</Text>
				</TouchableOpacity>
				{/* <Pressable onPressIn={handlePressTrash}>
					<MaterialCommunityIcons name="trash-can-outline" style={iconStyle} />
				</Pressable> */}
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
	top: ${Platform.OS === 'ios' ? '8%' : '20px'};
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

const styles = StyleSheet.create({
	fermer : {
		borderWidth       : 1,
		paddingVertical   : 8,
		paddingHorizontal : 15,
		borderRadius      : 5,
		fontSize          : 16,
		// fontWeight        : 'bold',
		borderColor       : colorPalette.lightgrey,
		color             : colorPalette.lightgrey
	}
});
