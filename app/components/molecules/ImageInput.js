import React, { Fragment, useEffect, useState } from 'react';
import { Alert, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import Icon from '../atoms/Icon';
import colorPalette from '../../config/colorPalette';

export default function ImageInput({ imageUri, onChangeImage }) {
	const requestPermission = async () => {
		const {
			granted
		} = await ImagePicker.requestCameraRollPermissionsAsync();
		if (!granted)
			alert('You need to enable permission to access the library');
	};

	useEffect(() => {
		requestPermission();
	}, []);

	const handleOnPress = () => {
		if (!imageUri) selectImage();
		else
			Alert.alert(
				'Delete',
				'Are you sure you want to delete this image ?',
				[
					{ text: 'Yes', onPress: () => onChangeImage(null) },
					{ text: 'No' }
				]
			);
	};

	const selectImage = async () => {
		try {
			const {
				cancelled,
				uri
			} = await ImagePicker.launchImageLibraryAsync({
				mediaTypes : ImagePicker.MediaTypeOptions.Images,
				quality    : 0.5
			});
			if (!cancelled) onChangeImage(uri);
		} catch (error) {
			console.log('Error reading an image', error);
		}
	};

	return (
		<Pressable style={styles.container} onPress={handleOnPress}>
			{imageUri ? (
				<Image source={{ uri: imageUri }} style={styles.image} />
			) : (
				<Icon
					name={'camera'}
					background="transparent"
					size={40}
					color={colorPalette.medium}
				/>
			)}
		</Pressable>
	);
}

const styles = StyleSheet.create({
	container : {
		width           : 80,
		height          : 80,
		borderRadius    : 15,
		justifyContent  : 'center',
		alignItems      : 'center',
		backgroundColor : colorPalette.lightgrey,
		overflow        : 'hidden'
	},
	image     : {
		width  : '100%',
		height : '100%'
	}
});
