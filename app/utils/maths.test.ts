import { formatMontant } from './maths'
import { expect } from '@jest/globals'

export {}

describe('Testing maths.js functions', () => {
	it.only('should return US format number', () => {
		const input: number = 12
		const USformatNumber: string = '€12.00'
		expect(formatMontant(input)).toBe(USformatNumber)
	})
})
