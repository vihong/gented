import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native';
import colorPalette from '../../config/colorPalette';
import Text from '../atoms/Text';

export default function Card({
	title,
	subtitle1,
	subtitle2,
	styleTitle,
	styleSubtitle2,
	imageUrl,
	brand,
	style,
	onPress
}) {
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
					<Text
						style={[
							styles.title,
							styleTitle
						]}
					>
						{title}
					</Text>
					{subtitle1 && (
						<Text style={styles.subtitle1} numberOfLines={1}>
							{subtitle1} {brand && `• ${brand}`}
						</Text>
					)}
					{subtitle2 && (
						<Text
							style={[
								styles.subtitle2,
								styleSubtitle2
							]}
							numberOfLines={1}
						>
							{subtitle2}
						</Text>
					)}
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
	subtitle1   : {
		color         : colorPalette.textColor,
		paddingBottom : 3,
		fontWeight    : '400'
	},
	subtitle2   : {
		color         : colorPalette.textColor,
		paddingBottom : 0,
		fontWeight    : '400'
	}
});
