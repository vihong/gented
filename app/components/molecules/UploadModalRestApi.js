import React from 'react';
import { Modal, StyleSheet, View } from 'react-native';
import ProgressBar from 'react-native-progress/Bar';
import colorPalette from '../../config/colorPalette';
import LottieView from 'lottie-react-native';

//@TODO: this component has been replaced by UploadModalGraphQL not used anymore but we'll keep it in case of external RESTful APIs.

export default function UploadModalRestApi({ progress = 0, visible = false, onAnimationFinish }) {
	return (
		<Modal visible={visible}>
			<View style={styles.container}>
				{progress < 1 ? (
					<ProgressBar
						progress={progress.toFixed(2) * 100}
						width={200}
						color={colorPalette.primary}
					/>
				) : (
					<LottieView
						source={require('../../assets/animations/success.json')}
						autoPlay
						loop={false}
						style={styles.success}
						onAnimationFinish={onAnimationFinish}
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
