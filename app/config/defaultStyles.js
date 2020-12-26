import { Platform } from 'react-native';
import colorPalette from './colorPalette';

export default {
	colorPalette,
	text         : {
		color      : colorPalette.dark,
		fontSize   : 18,
		fontFamily : Platform.OS === 'ios' ? 'Avenir' : 'Roboto'
	}
};
