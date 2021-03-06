import React, { useRef, useState } from 'react';
import { Keyboard, StyleSheet, ScrollView, View } from 'react-native';
import * as Yup from 'yup';
import _ from 'lodash';

import colorPalette from '../../config/colorPalette';
import defaultStyles from '../../config/defaultStyles';
import AppText from '../atoms/AppText';
import Screen from '../atoms/Screen';
import useGetLocation from '../hooks/useGetLocation';
import AppField from '../molecules/AppField';
import AppFormImagePicker from '../molecules/AppFormImagePicker';
import AppFormPicker from '../molecules/AppFormPicker';
import SubmitButton from '../molecules/SubmitButton';
import AppForm from '../organisms/AppForm';
import routes from '../navigation/routes';
import UploadModal from '../molecules/UploadModal';
import AppErrorMessage from '../molecules/AppErrorMessage';
import { clientPrisma } from '../../api/apollo/client';

import { useMutation } from '@apollo/client';
import { CREATE_PRODUCT, UPDATE_PRODUCT } from '../../graphql/Queries';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const validationSchema = Yup.object().shape({
	title       : Yup.string().required().min(1).label('Title'),
	price       : Yup.number().required().typeError('Price must be a number').min(1).label('Price'),
	category    : Yup.object().required().nullable().label('Category'),
	description : Yup.string().label('Description').min(5, '5 characters minimum'),
	images      : Yup.array().min(1, 'Please select at least 1 image').label('Image')
});

export default function ProductEditScreen({ navigation, route }) {
	const [
		isUploading,
		setIsUploading
	] = useState(false);

	let existingProduct = {};
	const isUserModifyingExistingProduct = !_.isEmpty(route.params);
	if (isUserModifyingExistingProduct) existingProduct = route.params.item;

	const [
		createProduct,
		{ data: dataProductCreated, loading: loadingMutation, error: errorMutation }
	] = useMutation(CREATE_PRODUCT);

	const [
		updateProduct,
		{ data: dataProductUpdated, loading: loadingUpdate, error: errorUpdate }
	] = useMutation(UPDATE_PRODUCT, { client: clientPrisma });

	const location = useGetLocation();

	const ref_input2 = useRef();

	const ref_input3 = useRef();

	const handleOnSubmit = async (newProduct, formikBag) => {
		setIsUploading(true);
		const productToSend = createProductToSend(newProduct);
		const productUpdatedToSend = createProductUpdatedToSend(newProduct);

		//@TODO: handle several images updates with upsert() in backend yoga and move logic in one function below
		if (isUserModifyingExistingProduct) {
			await updateProduct({
				variables : {
					data  : {
						title       : productUpdatedToSend.title,
						price       : parseFloat(productUpdatedToSend.price),
						category    : productUpdatedToSend.category,
						description : productUpdatedToSend.description,
						images      : {
							update : {
								data  : {
									url : productUpdatedToSend.images.update[0].url
								},
								where : { id: existingProduct.images[0].id }
							}
						}
					},
					where : { id: existingProduct.id }
				}
			});
		} else {
			await createProduct({ variables: { ...productToSend } });
			formikBag.resetForm();
			navigation.navigate(routes.FEED);
		}
	};

	const handleAnimationFinish = () => {
		setIsUploading(false);
		if (isUserModifyingExistingProduct) {
			navigation.navigate(routes.MY_WARDROBE);
		}
	};

	return (
		<Screen style={styles.screen}>
			<UploadModal
				loading={loadingMutation || loadingUpdate}
				error={errorMutation || errorUpdate}
				// error={errorMutation}
				visible={isUploading}
				onAnimationFinish={handleAnimationFinish}
			/>
			<KeyboardAwareScrollView>
				<AppText
					style={[
						defaultStyles.text,
						styles.title
					]}
				>
					{isUserModifyingExistingProduct ? (
						'Edit your product here'
					) : (
						'What would you like to sell?'
					)}
				</AppText>
				<View style={styles.form}>
					<AppForm
						initialValues={{
							title       : isUserModifyingExistingProduct
								? existingProduct.title
								: 'Apple',
							price       : isUserModifyingExistingProduct
								? existingProduct.price.toString()
								: '10',
							category    : isUserModifyingExistingProduct
								? { label: existingProduct.category }
								: categoryAlreadySet,
							description : isUserModifyingExistingProduct
								? existingProduct.description
								: 'Yummy!',
							images      : isUserModifyingExistingProduct
								? [
										existingProduct.images[0].url
									]
								: []
							// images      : []
						}}
						onSubmit={handleOnSubmit}
						validationSchema={validationSchema}
					>
						<AppFormImagePicker name="images" />
						<AppField
							style={styles.textInputAtom}
							name="title"
							placeholder="Title"
							maxLength={255}
							blurOnSubmit={false}
							returnKeyType={'next'}
							onSubmitEditing={() => ref_input2.current.focus()}
						/>
						<AppField
							style={styles.textInputAtom}
							name="price"
							placeholder="Price"
							keyboardType="numeric"
							maxLength={10}
							returnKeyType={'done'}
							ref={ref_input2}
							onSubmitEditing={() => ref_input2.current.focus()}
						/>
						<AppFormPicker
							style={styles.category}
							name="category"
							placeholder="Category"
							itemsAvailable={categories}
							width={'100%'}
						/>
						<AppField
							style={styles.textInputAtom}
							name="description"
							placeholder="Description"
							maxLength={255}
							multiline
							ref={ref_input3}
							returnKeyType={'done'}
							onSubmitEditing={Keyboard.dismiss}
						/>
						<SubmitButton
							label="Publish"
							color={colorPalette.white}
							backgroundColor={colorPalette.primary}
						/>
						<AppErrorMessage
							error={"Désolé, votre produit n'a pas pu être sauvegardé"}
							isVisible={errorMutation}
						/>
					</AppForm>
				</View>
			</KeyboardAwareScrollView>
		</Screen>
	);
}

const styles = StyleSheet.create({
	screen        : {
		padding : 15
	},
	title         : {
		justifyContent : 'center',
		alignSelf      : 'center',
		fontSize       : 22,
		fontWeight     : '500'
	},
	textInputAtom : {
		color : 'grey'
	},
	form          : {
		marginVertical : 20
	},
	category      : {
		marginVertical : 10
	}
});

const categories = [
	{
		id                  : 1,
		label               : 'Games',
		iconName            : 'floor-lamp',
		iconBackgroundColor : '#fc5c65'
	},
	{
		id                  : 2,
		label               : 'Clothing',
		iconName            : 'shoe-heel',
		iconBackgroundColor : '#fd9644'
	},
	{
		id                  : 3,
		label               : 'Music',
		iconName            : 'headphones',
		iconBackgroundColor : '#fed330'
	},
	{
		id                  : 4,
		label               : 'Sports',
		iconName            : 'basketball',
		iconBackgroundColor : '#26de81'
	},
	{
		id                  : 5,
		label               : 'Cars',
		iconName            : 'car',
		iconBackgroundColor : '#2bcbba'
	},
	{
		id                  : 6,
		label               : 'Tech',
		iconName            : 'camera',
		iconBackgroundColor : '#45aaf2'
	}
];

const iPhoneImages = [
	'file:///Users/vi/Library/Developer/CoreSimulator/Devices/B55A221E-3A62-4A63-BEB1-3B894CC72AF9/data/Containers/Data/Application/E4F191C8-E596-4CDA-BCB7-9CBB6B070C97/Library/Caches/ExponentExperienceData/%2540vhong%252Fgented/ImagePicker/4D0E9BA9-C90F-4FF5-8CBF-3E7C9079B24F.jpg'
];

const categoryAlreadySet = {
	iconBackgroundColor : '#26de81',
	iconName            : 'basketball',
	id                  : 4,
	label               : 'Sports'
};

function createProductToSend(newProduct) {
	const productToSend = {
		title       : newProduct.title,
		category    : newProduct.category.label,
		price       : newProduct.price,
		description : newProduct.description,
		brand       : newProduct.brand,
		images      : {
			create : newProduct.images.map((image, index) => ({
				name : `${newProduct.title}_image${index + 1}`,
				url  : image
			}))
		}
	};

	return productToSend;
}

//@TODO: merge these two functions in a generic one (or in one hook ?)
function createProductUpdatedToSend(newProduct) {
	const productToSend = {
		title       : newProduct.title,
		category    : newProduct.category.label,
		price       : parseFloat(newProduct.price),
		description : newProduct.description,
		brand       : newProduct.brand,
		images      : {
			update : newProduct.images.map((image, index) => ({
				name : `${newProduct.title}_image${index + 1}`,
				url  : image
			}))
		}
	};

	return productToSend;
}
