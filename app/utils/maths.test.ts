import { formatMontant } from './maths';

export {};

describe('Testing maths.js functions', () => {
	it('should return FR format number', () => {
		const input: number = 12;
		const FRformatNumber: string = '12,00 €';
		expect(formatMontant(input)).toBe(FRformatNumber);
	});
	it.only('should return US format number', () => {
		const input: number = 12;
		const USformatNumber: string = '€12.00';
		expect(formatMontant(input)).toBe(USformatNumber);
	});
});
