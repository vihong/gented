import React from 'react';
import {
	ImageBackground,
	Pressable,
	StyleSheet,
	TouchableHighlight,
	TouchableOpacity
} from 'react-native';
import styled from 'styled-components';
import LogoText from '../molecules/LogoText';
import ButtonAtom from '../atoms/ButtonAtom';
import TextAtom from '../atoms/TextAtom';
import colorPalette from '../config/colorPalette';

function WelcomeScreen(props) {
	return (
		<ImageBackground
			source={require('../assets/images/living_room.jpg')}
			source={require('../assets/images/living_room.jpg')}
			style={{ width: '100%', height: '100%' }}
			blurRadius={10}
		>
			<WelcomeScreenStyled>
				<LogoStyled>
					<LogoText />
					<TextAtom fontSize={30}>Old is the new trend</TextAtom>
				</LogoStyled>
				<TouchableOpacity style={{ width: '100%' }}>
					<ButtonStyled>
						<ButtonAtom
							label="Log in"
							backgroundColor={colorPalette.primary}
						/>
					</ButtonStyled>
				</TouchableOpacity>
				<ButtonStyled>
					<ButtonAtom
						label="Register"
						backgroundColor={colorPalette.secondary}
						textColor={colorPalette.white}
					/>
				</ButtonStyled>
			</WelcomeScreenStyled>
		</ImageBackground>
	);
}

export default WelcomeScreen;

const WelcomeScreenStyled = styled.View`
	flex: 1;
	align-items: center;
	display: flex;
	height: 100%;
	width: 100%;
	justify-content: flex-end;
	align-items: center;
	padding: 20px 0;
`;

const LogoStyled = styled.SafeAreaView`
	position: absolute;
	top: 110px;
	flex: 1;
	justify-content: space-between;
	align-items: center;
	justify-content: flex-start;
`;

const ButtonStyled = styled.View`
	margin: 10px 0;
	width: 100%;
	align-items: center;
`;
