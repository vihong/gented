import apiSauceClient from './client';

const endpointUpload = 'image/upload';

export default function uploadToCloudinary(image) {
	console.log('image: ', image);

	return apiSauceClient.post(endpointUpload, image);
}
//onUploadProgress : (progress) => onUploadProgress(progress.loaded / progress.total)
