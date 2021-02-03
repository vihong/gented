import { useFormikContext } from 'formik';
import React, { Fragment, useState } from 'react';
import uploadToCloudinary from '../../api/api-sauce/uploadToCloudinary';
import AppErrorMessage from './AppErrorMessage';
import ImageInputs from './ImageInputs';
import LottieView from 'lottie-react-native';
import { StyleSheet, View } from 'react-native';
import Text from '../atoms/Text';
import { CLOUDINARY_ENDPOINT } from '@env';

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
		console.log('Uploading...');
		const photo = {
			name : 'image',
			type : 'image/jpeg',
			uri  : newImages
		};
		const file = photo;

		const data = new FormData();
		data.append('file', file);
		data.append('upload_preset', 'gented-preset');
		data.append('cloud_name', 'probamaths');

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
