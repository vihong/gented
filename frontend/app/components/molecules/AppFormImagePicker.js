import { useFormikContext } from 'formik';
import React, { Fragment } from 'react';
import AppErrorMessage from './AppErrorMessage';
import ImageInputs from './ImageInputs';

export default function AppFormImagePicker({ name }) {
	const { values, errors, touched, setFieldValue } = useFormikContext();

	const imageUris = values[name];

	const handleAdd = (newImageUri) => {
		setFieldValue(name, [
			...imageUris,
			newImageUri
		]);
	};

	const handleRemove = (imageUriToDelete) => {
		setFieldValue(
			name,
			imageUris.filter((imageUri) => imageUri !== imageUriToDelete)
		);
	};

	return (
		<Fragment>
			<ImageInputs
				imageUris={imageUris}
				onAddImage={handleAdd}
				onRemoveImage={handleRemove}
			/>
			<AppErrorMessage error={errors[name]} isVisible={touched[name]} />
		</Fragment>
	);
}
