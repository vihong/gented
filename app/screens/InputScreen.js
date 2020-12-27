import React, { useState } from 'react';
import PickerMolecule from '../components/molecules/PickerMolecule';
import Screen from '../components/atoms/Screen';
import TextInputAtom from '../components/atoms/TextInputAtom';

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

function InputScreen(props) {
	return (
		<Screen>
			<PickerMolecule
				placeholder="Category"
				icon="apps"
				itemsAvailable={categories}
			/>
			<TextInputAtom placeholder="Email" icon="email" />
		</Screen>
	);
}

export default InputScreen;
