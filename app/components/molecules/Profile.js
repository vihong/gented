import React from 'react';
import { Image, Text } from 'react-native';
import styled from 'styled-components';
import colorPalette from '../../config/colorPalette';

function Profile(props) {
	const { image, fullName, description, style } = props;
	return (
		<ProfileStyled style={style}>
			<ImageStyled source={image} />
			<ProfileDetailsStyled>
				<ProfileFullName>{fullName}</ProfileFullName>
				<ProfilePosessions>{description}</ProfilePosessions>
			</ProfileDetailsStyled>
		</ProfileStyled>
	);
}

export default Profile;

const ProfileStyled = styled.View`
	/* border: 1px solid black; */
	display: flex;
	flex-direction: row;
	/* margin-top: 20px; */
	padding: 15px;
`;

const ImageStyled = styled.Image`
	width: 80px;
	height: 80px;
	border-radius: 50px;
	/* border: 1px solid black; */
	justify-content: center;
	align-items: center;
`;

const ProfileDetailsStyled = styled.View`
	/* border: 1px solid blue; */
	/* background: #a2ada2; */
	width: 100%;
	padding: 5px 12px;
`;

const ProfileFullName = styled.Text`
	/* background: red; */
	margin-bottom: 7px;
	font-weight: 500;
`;

const ProfilePosessions = styled.Text`
	/* background: blue; */
	color: ${colorPalette.textColor};
`;
