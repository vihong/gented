import React from 'react';
import { StyleSheet } from 'react-native';
import colorPalette from '../../config/colorPalette';
import AppText from '../atoms/AppText';

function AppErrorMessage({ error, isVisible }) {
	if (!isVisible || !error) return null;
	return <AppText style={styles.error}>{error}</AppText>;
}

export default AppErrorMessage;

const styles = StyleSheet.create({
	error : {
		color       : colorPalette.danger,
		paddingLeft : 5
	}
});
