import { DefaultTheme } from '@react-navigation/native';
import colorPalette from '../../config/colorPalette';

export default {
	...DefaultTheme,
	colors : {
		...DefaultTheme.colors,
		primary    : colorPalette.primary,
		background : colorPalette.white
	}
};
