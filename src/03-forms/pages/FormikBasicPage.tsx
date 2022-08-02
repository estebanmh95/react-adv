import React from "react";
import "../styles/styles.css";
import { FormikErrors, useFormik } from "formik";

interface FormValues {
	firstName: string;
	lastName: string;
	emailAddress: string;
}
const FormikBasicPage = () => {
	const validate = (values: FormValues) => {
		const errors: FormikErrors<FormValues> = {};

		if (!values.firstName) {
			errors.firstName = "Required";
		} else if (values.firstName.length > 15) {
			errors.firstName = "Must be 15 characters or less";
		}

		if (!values.lastName) {
			errors.lastName = "Required";
		} else if (values.lastName.length > 15) {
			errors.lastName = "Must be 15 characters or less";
		}

		const re =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if (!values.emailAddress) {
			errors.emailAddress = "Required";
		} else if (!re.test(values.emailAddress)) {
			errors.emailAddress = "Must be a valid email";
		}

		return errors;
	};

	const { handleChange, handleSubmit, values, errors, touched, handleBlur } =
		useFormik({
			initialValues: {
				firstName: "",
				lastName: "",
				emailAddress: "",
			},
			onSubmit: (values) => {
				console.log(values);
			},
			validate,
		});

	return (
		<div>
			<h1>FormikBasicPage</h1>

			<form onSubmit={handleSubmit}>
				<label htmlFor="firstName">First Name</label>
				<input
					type="text"
					name="firstName"
					onBlur={handleBlur}
					onChange={handleChange}
					value={values.firstName}
				/>
				{touched.firstName && <span>{errors.firstName}</span>}
				<label htmlFor="lastName">Last Name</label>
				<input
					type="text"
					onBlur={handleBlur}
					name="lastName"
					onChange={handleChange}
					value={values.lastName}
				/>
				{touched.lastName && <span>{errors.lastName}</span>}

				<label htmlFor="emailAddress">Email Address</label>
				<input
					type="text"
					onBlur={handleBlur}
					name="emailAddress"
					onChange={handleChange}
					value={values.emailAddress}
				/>
				{touched.emailAddress && <span>{errors.emailAddress}</span>}

				<button type="submit">Submit</button>
			</form>
		</div>
	);
};

export default FormikBasicPage;
