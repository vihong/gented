import React from 'react';
import AppText from '../atoms/AppText';

function AppErrorMessage({ error, isVisible }) {
	if (!isVisible || !error) return null;
	return <AppText style={{ color: 'red' }}>{error}</AppText>;
}

export default AppErrorMessage;
