import React, { useRef } from 'react';
import { Keyboard, StyleSheet, View } from 'react-native';
import * as Yup from 'yup';

import colorPalette from '../../config/colorPalette';
import defaultStyles from '../../config/defaultStyles';
import AppText from '../atoms/AppText';
import Screen from '../atoms/Screen';
import AppField from '../molecules/AppField';
import AppFormPicker from '../molecules/AppFormPicker';
import AppPicker from '../molecules/AppPicker';
import SubmitButton from '../molecules/SubmitButton';
import AppForm from '../organisms/AppForm';

const validationSchema = Yup.object().shape({
	title       : Yup.string().required().min(1).label('Title'),
	price       : Yup.number()
		.required()
		.typeError('Price must be a number')
		.min(1)
		.label('Price'),
	category    : Yup.object().required().nullable().label('Category'),
	description : Yup.string().label('Description')
});

export default function ProductEditScreen() {
	const handleOnSubmit = (values) => {
		alert(
			`title: ${values.title} \n price: ${values.price} \n description: ${values.description}`
		);
	};

	const ref_input2 = useRef();
	const ref_input3 = useRef();

	return (
		<Screen style={styles.screen}>
			<AppText
				style={[
					defaultStyles.text,
					styles.title
				]}
			>
				What would you like to sell?
			</AppText>
			<View style={styles.form}>
				<AppForm
					initialValues={{
						title       : '',
						price       : '',
						category    : null,
						description : ''
					}}
					onSubmit={(values) => handleOnSubmit(values)}
					validationSchema={validationSchema}
				>
					<AppField
						style={styles.textInputAtom}
						name="title"
						placeholder="Title"
						maxLength={255}
						blurOnSubmit={false}
						onSubmitEditing={() => ref_input2.current.focus()}
					/>
					<AppField
						style={styles.textInputAtom}
						name="price"
						placeholder="Price"
						keyboardType="numeric"
						maxLength={10}
						width={'50%'}
						ref={ref_input2}
						onSubmitEditing={() => ref_input3.current.focus()}
					/>
					<AppFormPicker
						style={styles.category}
						name="category"
						placeholder="Category"
						itemsAvailable={categories}
						width={'60%'}
					/>
					<AppField
						style={styles.textInputAtom}
						name="description"
						placeholder="Description"
						maxLength={255}
						multiline
						ref={ref_input3}
						onSubmitEditing={Keyboard.dismiss}
					/>
					<SubmitButton
						label="post"
						color={colorPalette.white}
						backgroundColor={colorPalette.primary}
					/>
				</AppForm>
			</View>
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
		label               : 'Tech',
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
