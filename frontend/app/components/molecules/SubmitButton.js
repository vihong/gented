import { useFormikContext } from 'formik';
import React from 'react';
import AppButton from '../atoms/AppButton';

function SubmitButton({ label, ...restProps }) {
	const { handleSubmit } = useFormikContext();

	return <AppButton label={label} onPress={handleSubmit} {...restProps} />;
}

export default SubmitButton;
