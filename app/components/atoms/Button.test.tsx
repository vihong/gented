export {}

import React from 'react'
import { expect } from '@jest/globals'
import { fireEvent, render } from '@testing-library/react-native'
import { screen } from '@testing-library/dom'
import '@testing-library/jest-dom/extend-expect'
import Button from './Button'

describe('App', () => {
	it('should render label inside Button', () => {
		const input = 'bonjour'
		const { getAllByText } = render(<Button label={input} />)
		expect(getAllByText(input).length).toBe(1)
	})
})
