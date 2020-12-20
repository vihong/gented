import React from 'react';
import styled from 'styled-components';
import LogoText from './LogoText';
import LogoImage from './LogoImage';

export default function App() {
	return (
		<AppStyled>
			<LogoText />
			<LogoImage />
		</AppStyled>
	);
	r;
}

const AppStyled = styled.SafeAreaView`
	flex: 1;
	background: #b22f44;
	align-items: center;
	justify-content: center;
`;
