import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Modal, StyleSheet, View } from 'react-native';
import ProgressBar from 'react-native-progress/Bar';
import colorPalette from '../../config/colorPalette';
import LottieView from 'lottie-react-native';

export default function UploadModal({ loading, error, visible = false, onAnimationFinish }) {
	const [
		isActive,
		setisActive
	] = useState(true);

	// const [
	// 	error,
	// 	setError
	// ] = useState(false);

	useEffect(
		() => {
			if (error) onAnimationFinish();
			// setError(false);
			setisActive(true);
		},
		[
			error
		]
	);

	return (
		<Modal visible={visible}>
			<View style={styles.container}>
				{isActive && (
					<LottieView
						source={require('../../assets/animations/upload.json')}
						autoPlay
						loop={false}
						style={styles.success}
						onAnimationFinish={() => {
							// setError(true);
							setisActive(false);
						}}
					/>
				)}
				{!isActive && (
					<LottieView
						source={require('../../assets/animations/success.json')}
						autoPlay
						loop={false}
						style={styles.success}
						onAnimationFinish={() => {
							setisActive(true);
							onAnimationFinish();
						}}
					/>
				)}
			</View>
		</Modal>
	);
}

const styles = StyleSheet.create({
	container : {
		flex           : 1,
		justifyContent : 'center',
		alignItems     : 'center'
	},
	success   : {
		width : 150
	}
});
