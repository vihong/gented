import React from 'react';
import AppButton from '../atoms/AppButton';

export default function AppLink({ label, onPress, ...restProps }) {
	// const navigation = useNavigation();
	return <AppButton label={label} onPress={onPress} {...restProps} />;
}
