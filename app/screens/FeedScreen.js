import React from 'react';
import styled from 'styled-components';
import Screen from '../components/atoms/Screen';
import Card from '../components/molecules/Card';
import colorPalette from '../config/colorPalette';

function FeedScreen(props) {
	return (
		<Screen style={{ backgroundColor: colorPalette.backgroundLightgrey }}>
			<FeedScreenStyled style={{ overflowY: 'scroll' }}>
				<Card
					title="Red jacket for sale!"
					subtitle="$100"
					image={require('../assets/images/red_jacket.jpg')}
				/>
				<Card
					title="Levi's Jeans jacket available"
					subtitle="$200"
					image={require('../assets/images/blue_jacket.jpg')}
				/>
			</FeedScreenStyled>
		</Screen>
	);
}

const FeedScreenStyled = styled.View`
	padding: 40% 20px 10%;
	align-items: center;
	width: 100%;
	height: 100%;
	font-size: 100px;
	background: #f8f4f4;
`;

export default FeedScreen;
