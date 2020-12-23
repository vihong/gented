import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components';

// add TS for propShape

function ButtonApp(props) {
	const { label, backgroundColor, textColor } = props;
	return (
		<ViewStyled style={{ backgroundColor }}>
			{label && (
				<TextStyled
					style={{ color: `${textColor ? textColor : 'white'}` }}
				>
					{label}
				</TextStyled>
			)}
		</ViewStyled>
	);
}

export default ButtonApp;

// style générique et inhérent à tous le buttons vs style variable en props
const ViewStyled = styled.View`
	height: 60px;
	width: 90%;
	border-radius: 50px;
	justify-content: center;
	align-items: center;
`;

const TextStyled = styled.Text`font-size: 25px;`;
