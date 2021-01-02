import { useFormikContext } from 'formik';
import React, { Fragment, useState, useEffect } from 'react';
import AppTextInput from '../atoms/AppTextInput';
import AppErrorMessage from './AppErrorMessage';

const AppField = React.forwardRef(
	({ name, showValidation, ...restProps }, ref) => {
		const {
			handleChange,
			errors,
			setFieldTouched,
			touched
		} = useFormikContext();

		useEffect(() => {
			setFieldTouched(name, false);
		}, []);

		const handleOnBlur = () => {
			setFieldTouched(name);
		};

		return (
			<Fragment>
				<AppTextInput
					onChangeText={handleChange(name)}
					onBlur={handleOnBlur}
					ref={ref}
					isValid={showValidation && touched[name] && !errors[name]}
					{...restProps}
				/>
				<AppErrorMessage
					error={errors[name]}
					isVisible={touched[name]}
				/>
			</Fragment>
		);
	}
);

export default AppField;
