import React, { useRef, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import ImageInput from './ImageInput';

export default function ImageInputs({
	imageUris = [
		''
	],
	onAddImage,
	onRemoveImage,
	isLoading
}) {
	const scrollViewRef = useRef();

	return (
		<View>
			<ScrollView
				ref={scrollViewRef}
				horizontal
				onContentSizeChange={() => scrollViewRef.current.scrollToEnd()}
			>
				<View style={styles.container}>
					{imageUris.map((imageUri) => (
						<View style={styles.image} key={imageUri}>
							<ImageInput
								imageUri={imageUri}
								onChangeImage={() => onRemoveImage(imageUri)}
								isLoading={isLoading}
							/>
						</View>
					))}
					{<ImageInput onChangeImage={onAddImage} isLoading={isLoading} />}
				</View>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container : {
		flexDirection : 'row',
		marginBottom  : 5
	},
	image     : {
		marginRight : 10
	}
});
