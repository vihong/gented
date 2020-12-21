import React from 'react';
import { SafeAreaView, TouchableOpacity, Alert, Image } from 'react-native';

function LogoImage(props) {
	return (
		<SafeAreaView>
			<TouchableOpacity
				onPress={() =>
					Alert.prompt('', "What's your name?", (promptAnswer) =>
						alert(`Nice to meet you ${promptAnswer}`)
					)}
			>
				<Image
					source={require('./app/assets/images/boeTie.png')}
					style={{
						transform : [
							{ scale: 0.5 }
						]
					}}
				/>
			</TouchableOpacity>
		</SafeAreaView>
	);
}

export default LogoImage;
