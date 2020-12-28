import { useFormikContext } from 'formik';
import React, { Fragment } from 'react';
import { View } from 'react-native';
import colorPalette from '../../config/colorPalette';
import AppErrorMessage from './AppErrorMessage';
import AppPicker from './AppPicker';

export default function AppFormPicker({
	icon,
	name,
	placeholder,
	style,
	...restProps
}) {
	const {
		handleChange,
		errors,
		setFieldValue,
		setFieldTouched,
		touched,
		values
	} = useFormikContext();

	return (
		<View style={style}>
			<AppPicker
				icon={icon}
				name={name}
				placeholder={placeholder}
				onSelectItem={(item) => setFieldValue(name, item)}
				selectedItem={values[name]}
				onBlur={() => setFieldTouched(name)}
				{...restProps}
			/>
			<AppErrorMessage error={errors[name]} isVisible={touched[name]} />
		</View>
	);
}
