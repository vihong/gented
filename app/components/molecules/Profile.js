import React from 'react';
import { Image, Text } from 'react-native';
import styled from 'styled-components';
import colorPalette from '../../config/colorPalette';

function Profile(props) {
	const { image, fullName, numberOfProducts } = props;
	return (
		<ProfileStyled>
			<ImageStyled source={image} />
			<ProfileDetailsStyled>
				<ProfileFullName>{fullName}</ProfileFullName>
				<ProfilePosessions>
					{`${numberOfProducts} ${numberOfProducts > 1
						? 'products'
						: 'product'}`}
				</ProfilePosessions>
			</ProfileDetailsStyled>
		</ProfileStyled>
	);
}

export default Profile;

const ProfileStyled = styled.View`
	/* border: 1px solid black; */
	display: flex;
	flex-direction: row;
	margin-top: 20px;
	padding: 0 5%;
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
