import { Platform } from 'react-native';
import colorPalette from './colorPalette';

export default {
	colorPalette,
	textLogo     : {
		alignItems : 'center',
		fontFamily : 'AmaticSC_400Regular',
		fontSize   : 100,
		color      : colorPalette.primary
	},
	text         : {
		color      : colorPalette.dark,
		fontSize   : 18,
		fontFamily : Platform.OS === 'ios' ? 'Avenir' : 'Roboto'
	},
	logo         : {
		color    : colorPalette.primary,
		fontSize : 50
	}
};
