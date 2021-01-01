import { useFormikContext } from 'formik';
import React, { Fragment } from 'react';
import AppTextInput from '../atoms/AppTextInput';
import AppErrorMessage from './AppErrorMessage';

const AppField = React.forwardRef(({ name, ...restProps }, ref) => {
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
				ref={ref}
				blurOnSubmit={false}
			/>
			<AppErrorMessage error={errors[name]} isVisible={touched[name]} />
		</Fragment>
	);
});

export default AppField;
