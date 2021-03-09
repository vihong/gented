import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function LogoImage({ imageScale }) {
	return (
		<Image
			source={require('../../assets/images/boeTiePrimary.png')}
			style={[
				{
					transform : [
						{ scale: imageScale ? imageScale : 0.5 }
					]
				}
			]}
		/>
	);
}

const styles = StyleSheet.create({});
