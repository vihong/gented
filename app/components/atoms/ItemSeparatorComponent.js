import React from 'react';
import styled from 'styled-components';
import colorPalette from '../../config/colorPalette';

function ItemSeparatorComponent() {
	return <ItemSeparatorComponentStyled />;
}

export default ItemSeparatorComponent;

const ItemSeparatorComponentStyled = styled.View`
	width: 100%;
	height: 1px;
	background-color: ${colorPalette.lightgrey};
`;
