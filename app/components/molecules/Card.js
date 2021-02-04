import React from 'react';
import { Image, Platform, StyleSheet, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native';
import styled from 'styled-components';
import colorPalette from '../../config/colorPalette';
import Text from '../atoms/Text';

export default function Card({ title, subtitle, imageUrl, brand, style, onPress }) {
	return (
		<TouchableWithoutFeedback onPress={onPress}>
			<View
				style={[
					styles.container,
					style
				]}
			>
				<Image style={styles.image} source={{ uri: imageUrl }} />
				<View style={styles.description}>
					<Text style={styles.title}>{title}</Text>
					<Text style={styles.subtitle} numberOfLines={1}>
						{subtitle}
						{brand && ` • ${brand}`}
					</Text>
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	container   : {
		width           : '100%',
		backgroundColor : colorPalette.white,
		borderRadius    : 20,
		marginBottom    : 20,
		overflow        : 'hidden'
	},
	image       : {
		height : 250,
		width  : '100%'
	},
	description : {
		padding        : 15,
		justifyContent : 'space-between',
		width          : '90%'
	},
	title       : {
		color         : colorPalette.black,
		paddingBottom : 7,
		fontWeight    : '700'
	},
	subtitle    : {
		color      : colorPalette.textColor,
		fontWeight : '400'
	}
});
