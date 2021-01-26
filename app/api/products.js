import client from './client';

const endpoint = 'listings';

const getProducts = () => client.get(endpoint);

const addProduct = (product, onUploadProgress) => {
	const productToUpload = new FormData();
	productToUpload.append('title', product.title);
	productToUpload.append('price', product.price);
	productToUpload.append('categoryId', product.category.id);
	productToUpload.append('description', product.description);

	product.images.forEach((image, index) =>
		productToUpload.append('images', {
			name : `image${index}`,
			type : 'image/jpeg',
			uri  : image
		})
	);

	if (product.location) productToUpload.append('location', JSON.stringify(product.location));

	return client.post(endpoint, productToUpload, {
		onUploadProgress : (progress) => onUploadProgress(progress.loaded / progress.total)
	});
};

export default {
	getProducts,
	addProduct
};
