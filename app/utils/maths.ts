export function formatMontant(montant: number): string {
	// return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'EUR' }).format(montant);
	const res: string = new Intl.NumberFormat('fr-FR', {
		style: 'currency',
		currency: 'EUR'
	}).format(montant);
	return res;
}
