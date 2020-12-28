import { Formik } from 'formik';
import React, { Fragment } from 'react';

function AppForm({ initialValues, onSubmit, validationSchema, children }) {
	return (
		<Formik
			initialValues={initialValues}
			onSubmit={onSubmit}
			validationSchema={validationSchema}
		>
			{() => <Fragment>{children}</Fragment>}
		</Formik>
	);
}

export default AppForm;
