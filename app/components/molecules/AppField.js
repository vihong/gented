import { useFormikContext } from 'formik';
import React, { Fragment } from 'react';
import AppTextInput from '../atoms/AppTextInput';
import AppErrorMessage from './AppErrorMessage';

function AppField({ name, ...restProps }) {
	const {
		handleChange,
		errors,
		setFieldTouched,
		touched
	} = useFormikContext();

	return (
		<Fragment>
			<AppTextInput
				onChangeText={handleChange(name)}
				onBlur={() => setFieldTouched(name)}
				{...restProps}
			/>
			<AppErrorMessage error={errors[name]} isVisible={touched[name]} />
		</Fragment>
	);
}

export default AppField;
