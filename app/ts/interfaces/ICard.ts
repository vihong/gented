export default interface ICard {
	title: string
	subtitle1?: string
	subtitle2?: string
	styleTitle?: string
	styleSubtitle2?: string
	imageUrl: string
	brand?: string
	style?: Object
	onPress: () => {}
	showLikeButton: boolean
}
