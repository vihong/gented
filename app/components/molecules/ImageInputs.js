import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ImageInput from './ImageInput';

export default function ImageInputs({
	imageUris = [
		''
	],
	onAddImage,
	onRemoveImage
}) {
	return (
		<View style={styles.container}>
			{imageUris.map((imageUri) => (
				<View style={styles.image}>
					<ImageInput
						imageUri={imageUri}
						key={imageUri}
						onChangeImage={() => onRemoveImage(imageUri)}
					/>
				</View>
			))}
			{<ImageInput onChangeImage={onAddImage} />}
		</View>
	);
}

const styles = StyleSheet.create({
	container : {
		flexDirection : 'row'
	},
	image     : {
		marginHorizontal : 10
	}
});
