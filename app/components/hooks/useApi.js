import { useState } from 'react';
/**
 * Returns the average of two numbers.
 *
 * @remarks
 * Used to call any api request you pass in the hook
 * @returns `data`, `loading`, `error` and `request`, `request` being a callback
 * @beta
 */

export default (useApi = (apiFunction) => {
	const [
		data,
		setData
	] = useState([]);

	const [
		error,
		setError
	] = useState();

	const [
		loading,
		setLoading
	] = useState();

	const request = async (...args) => {
		setLoading(true);
		const { data, ok } = await apiFunction(...args);
		setLoading(false);

		if (!ok) return setError(true);

		setError(false);
		setData(data);
	};
	return { data, loading, error, request };
});
