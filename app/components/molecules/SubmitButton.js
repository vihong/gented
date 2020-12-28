import { useFormikContext } from 'formik';
import React from 'react';
import colorPalette from '../../config/colorPalette';
import ButtonApp from '../atoms/ButtonAtom';

function SubmitButton({ label, ...restProps }) {
	const { handleSubmit } = useFormikContext();
	return <ButtonApp label={label} onPress={handleSubmit} {...restProps} />;
}

export default SubmitButton;
