import React, { useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import styled from 'styled-components';
import colorPalette from '../../config/colorPalette';
import Screen from '../atoms/Screen';
import Card from '../molecules/Card';

function FeedScreen(props) {
	const [
		cards,
		setCards
	] = useState([
		{
			id       : '1',
			title    : 'Red jacket for sale!',
			subtitle : '$100',
			image    : require('../../assets/images/red_jacket.jpg')
		},
		{
			id       : '2',
			title    : "Levi's Jeans jacket available",
			subtitle : '$200',
			image    : require('../../assets/images/blue_jacket.jpg')
		},
		{
			id       : '3',
			title    : "Levi's Jeans jacket available",
			subtitle : '$300',
			image    : require('../../assets/images/green_jacket.jpg')
		}
	]);

	return (
		<Screen style={styles.screen}>
			<FlatList
				style={styles.cards}
				data={cards}
				keyExtractor={(card) => card.id.toString()}
				renderItem={({ item }) => (
					<Card
						title={item.title}
						subtitle={item.subtitle}
						image={item.image}
					/>
				)}
			/>
		</Screen>
	);
}

const styles = StyleSheet.create({
	screen : {
		backgroundColor : colorPalette.backgroundGrey,
		paddingTop      : 20
	},
	cards  : {
		paddingHorizontal : 20
	}
});

export default FeedScreen;
