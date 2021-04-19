import React from 'react'
import LottieView from 'lottie-react-native'
import { Image, StyleSheet, View } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native'
import colorPalette from '../../config/colorPalette'
import Text from '../atoms/Text'
import { useState } from 'react'
import LikeButton from '../atoms/LikeButton'
import ICard from '../../ts/interfaces/ICard'

export default function Card({
	title,
	subtitle1,
	subtitle2,
	styleTitle,
	styleSubtitle2,
	imageUrl,
	brand,
	style,
	onPress,
	showLikeButton = false
}: ICard) {
	const [
		isAnimationActive,
		setIsAnimationActive
	] = useState(false)

	const [
		hasLiked,
		setHasLiked
	] = useState(false)

	const handleLikeButton = () => {
		if (hasLiked === false) {
			setIsAnimationActive(true)
			setHasLiked(true)
		}
		setHasLiked(!hasLiked)
	}

	return (
		<TouchableWithoutFeedback onPress={onPress}>
			<View
				style={[
					styles.container,
					style
				]}
			>
				<CardImage
					imageUrl={imageUrl}
					isAnimationActive={isAnimationActive}
					onPress={() => setIsAnimationActive(!isAnimationActive)}
					onAnimationFinish={() => setIsAnimationActive(false)}
				/>
				<View style={styles.detailsContainer}>
					<View style={styles.line1}>
						<Text
							style={[
								styles.line1Title,
								styleTitle
							]}
						>
							{title}
						</Text>
						{showLikeButton && (
							<LikeButton
								hasLiked={hasLiked}
								onPress={handleLikeButton}
								style={{ borderWidth: 0, paddingHorizontal: 10 }}
							/>
						)}
					</View>
					{subtitle1 && (
						<Text style={styles.line2} numberOfLines={1}>
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
	)
}

type CardImageProps = {
	imageUrl: string
	isAnimationActive: boolean
	onAnimationFinish: any
	onPress: any
}

function CardImage({ imageUrl, isAnimationActive, onAnimationFinish }: CardImageProps) {
	return (
		<View style={styles.containerLike}>
			{isAnimationActive && (
				<LottieView
					source={require('../../assets/animations/heart.json')}
					autoPlay
					loop={false}
					style={styles.like}
					onAnimationFinish={onAnimationFinish}
				/>
			)}
			<Image style={styles.image} source={{ uri: imageUrl }} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		backgroundColor: colorPalette.white,
		borderRadius: 20,
		marginBottom: 20,
		overflow: 'hidden'
	},
	image: {
		height: 250,
		width: '100%'
	},
	detailsContainer: {
		padding: 15,
		paddingRight: 10,
		justifyContent: 'space-between'
	},
	line1: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'flex-start'
	},
	line1Title: {
		color: colorPalette.black,
		paddingBottom: 7,
		fontWeight: '700'
	},
	line2: {
		color: colorPalette.textColor,
		paddingBottom: 3,
		paddingRight: 20,
		fontWeight: '400'
	},
	subtitle2: {
		color: colorPalette.textColor,
		paddingBottom: 0,
		fontWeight: '400'
	},
	containerLike: {
		position: 'relative',
		justifyContent: 'center',
		alignItems: 'center'
	},
	like: {
		width: 150,
		position: 'absolute',
		zIndex: 2
	}
})
