import { useFormikContext } from 'formik';
import React, { Fragment, useState, useEffect } from 'react';
import AppTextInput from '../atoms/AppTextInput';
import AppErrorMessage from './AppErrorMessage';

const AppField = React.forwardRef(({ name, showValidation, width, ...restProps }, ref) => {
	const { values, errors, setFieldTouched, setFieldValue, touched } = useFormikContext();

	useEffect(() => {
		setFieldTouched(name, false);
	}, []);

	const handleOnBlur = () => {
		setFieldTouched(name);
	};

	return (
		<Fragment>
			<AppTextInput
				value={values[name]}
				onChangeText={(text) => setFieldValue(name, text)}
				onBlur={handleOnBlur}
				ref={ref}
				isValid={showValidation && touched[name] && !errors[name]}
				width={width}
				{...restProps}
			/>
			<AppErrorMessage error={errors[name]} isVisible={touched[name]} />
		</Fragment>
	);
});

export default AppField;
