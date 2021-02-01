import React, { Fragment, useEffect, useState } from 'react';
import { useQuery, gql, useMutation } from '@apollo/client';
import { StyleSheet, Text, View } from 'react-native';
import Button from './Button';

const GET_USERS = gql`
	query GET_USERS {
		users {
			name
			email
		}
	}
`;

const GET_ITEMS = gql`
	query GET_ITEMS {
		items {
			id
			title
			description
			price
		}
	}
`;

const CREATE_ITEM = gql`
	mutation CREATE_ITEM($title: String, $description: String, $price: Float) {
		createItem(title: $title, description: $description, price: $price) {
			id
			title
			description
			price
		}
	}
`;

const DELETE_ITEM = gql`
	mutation DELETE_ITEM($id: ID!) {
		deleteItem(id: $id) {
			title
			description
			price
		}
	}
`;

const pickachuVariable = { title: 'Pickachu', description: 'zero description', price: 1000 };

export default function CardTest() {
	const [
		items,
		setItems
	] = useState([]);

	const { data: dataUsers, loading, error } = useQuery(GET_USERS);
	const { data: dataItems, loading: loadingItems, error: errorItems, refetch } = useQuery(
		GET_ITEMS
	);
	const [
		createItem,
		{ data: dataNewItems }
	] = useMutation(CREATE_ITEM, {
		refetchQueries : [
			{ query: GET_USERS }
		]
	});

	const [
		deleteItem,
		{ data: deletedItem }
	] = useMutation(DELETE_ITEM, {
		refetchQueries : [
			{ query: GET_USERS }
		]
	});

	const handleAddProduct = async () => {
		const { data } = await createItem({
			variables : { title: 'YatoGami', description: 'dev', price: 500 }
		});
		const newPikachuCreated = data.createItem;
		setItems([
			...items,
			newPikachuCreated
		]);
	};

	const handleDelete = (idToDelete) => {
		console.log('idToDelete : ', idToDelete);
		setItems((prevState) => prevState.filter((item) => item.id != idToDelete));
		deleteItem({ variables: { id: idToDelete } });
	};

	useEffect(
		() => {
			if (dataItems) setItems(dataItems.items);
		},
		[
			dataItems
		]
	);
	if (loading || loadingItems) return <Text>Loading</Text>;
	if (error || errorItems) return <Text>Error</Text>;

	return (
		<Fragment>
			<Button label="Ajouter un produit" onPress={handleAddProduct} />
			<View style={styles.items}>
				{items.map((item, key) => (
					<View style={{ flexDirection: 'row' }} key={`${key}${item.title}`}>
						<Text onPress={() => console.log(item.id)} key={`${key}${item.title}`}>
							{item.title}
						</Text>
						<Text style={{ fontWeight: 'bold' }} onPress={() => handleDelete(item.id)}>
							{' '}
							x{' '}
						</Text>
					</View>
				))}
			</View>
		</Fragment>
	);
}

const styles = StyleSheet.create({
	container : {},
	items     : {
		margin : 20
	}
});
