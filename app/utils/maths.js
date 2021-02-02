export function formatMontant(montant) {
	return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(montant);
}
