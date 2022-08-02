import React from "react";
import "../styles/styles.css";
import { useFormik } from "formik";
import * as Yup from "yup";

const FormikYupPage = () => {
	const { handleSubmit, errors, touched, getFieldProps } = useFormik({
		initialValues: {
			firstName: "",
			lastName: "",
			emailAddress: "",
		},
		onSubmit: (values) => {
			console.log(values);
		},
		validationSchema: Yup.object({
			firstName: Yup.string()
				.max(15, "Debe tener 15 caracteres o menos")
				.required("Requerido"),
			lastName: Yup.string()
				.max(15, "Debe tener 15 caracteres o menos")
				.required("Requerido"),
			emailAddress: Yup.string()
				.email("Debe ser un formato valido de correo")
				.required("Requerido"),
		}),
	});

	return (
		<div>
			<h1>Formik Yup</h1>

			<form onSubmit={handleSubmit}>
				<label htmlFor="firstName">First Name</label>
				<input type="text" {...getFieldProps("firstName")} />
				{touched.firstName && <span>{errors.firstName}</span>}

				<label htmlFor="lastName">Last Name</label>
				<input type="text" {...getFieldProps("lastName")} />
				{touched.lastName && <span>{errors.lastName}</span>}

				<label htmlFor="emailAddress">Email Address</label>
				<input type="text" {...getFieldProps("emailAddress")} />
				{touched.emailAddress && <span>{errors.emailAddress}</span>}

				<button type="submit">Submit</button>
			</form>
		</div>
	);
};

export default FormikYupPage;
