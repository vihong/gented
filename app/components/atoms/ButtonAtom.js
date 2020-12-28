import React from 'react';
import styled from 'styled-components';

// add TS for propShape

function ButtonApp({ label, backgroundColor, color, onPress, style }) {
	return (
		<TouchableOpacityStyled
			style={{ backgroundColor, color }}
			onPress={onPress}
		>
			{label && (
				<TextStyled
					style={[
						{ color },
						style
					]}
				>
					{label}
				</TextStyled>
			)}
		</TouchableOpacityStyled>
	);
}

export default ButtonApp;

// style générique et inhérent à tous le buttons vs style variable en props
const TouchableOpacityStyled = styled.TouchableOpacity`
	width: 100%;
	border-radius: 30px;
	justify-content: center;
	align-items: center;
	padding: 15px;
	margin: 10px 0;
`;

const TextStyled = styled.Text`
	font-size: 20px;
	text-transform: uppercase;
	font-weight: bold;
`;
