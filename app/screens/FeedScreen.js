import React from 'react';
import styled from 'styled-components';
import Card from '../components/molecules/Card';

function FeedScreen(props) {
	return (
		<FeedScreenStyled style={{ overflowY: 'scroll' }}>
			<Card
				title="Red jacket for sale!"
				subtitle="$100"
				image={require('../assets/red_jacket.jpg')}
			/>
			<Card
				title="Levi's Jeans jacket available"
				subtitle="$200"
				image={require('../assets/blue_jacket.jpg')}
			/>
		</FeedScreenStyled>
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
