import { useFormikContext } from 'formik';
import React, { Fragment, useState } from 'react';
import AppErrorMessage from './AppErrorMessage';
import ImageInputs from './ImageInputs';
import { CLOUDINARY_ENDPOINT, UPLOAD_PRESET, CLOUD_NAME } from '@env';

export const ImagePickerContext = React.createContext({});

export default function AppFormImagePicker({ name }) {
	const { values, errors, touched, setFieldValue } = useFormikContext();

	const imageUris = values[name];

	const [
		isLoading,
		setIsLoading
	] = useState(false);

	const handleAdd = (newImageUri) => {
		uploadFile(newImageUri);
	};

	const uploadFile = async (newImages) => {
		const photo = {
			name : 'image',
			type : 'image/jpeg',
			uri  : newImages
		};
		const file = photo;

		const data = new FormData();
		data.append('file', file);
		data.append('upload_preset', UPLOAD_PRESET);
		data.append('cloud_name', CLOUD_NAME);

		setIsLoading(true);
		const response = await fetch(CLOUDINARY_ENDPOINT, {
			method : 'POST',
			body   : data
		});
		const cloudinaryResponse = await response.json();
		setIsLoading(false);
		const imageReceivedFromCloudinary = cloudinaryResponse.secure_url;
		setFieldValue(name, [
			...imageUris,
			imageReceivedFromCloudinary
		]);
	};

	const handleRemove = (imageUriToDelete) => {
		setFieldValue(name, imageUris.filter((imageUri) => imageUri !== imageUriToDelete));
	};

	return (
		<Fragment>
			<ImageInputs
				imageUris={imageUris}
				onAddImage={handleAdd}
				onRemoveImage={handleRemove}
				isLoading={isLoading}
			/>
			<AppErrorMessage error={errors[name]} isVisible={touched[name]} />
		</Fragment>
	);
}
