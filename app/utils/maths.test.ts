import { formatMontant } from './maths'
import { expect } from '@jest/globals'

describe('Testing maths.js functions', () => {
	it('should return US format number', () => {
		// arrange
		const montant = 12
		const montantInFormatUS = '€12.00'

		//act
		const montantFormatted = formatMontant(montant)
		expect(montantFormatted).toBe(montantInFormatUS)
	})
})
