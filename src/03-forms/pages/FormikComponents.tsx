import React from "react";
import "../styles/styles.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormikComponents: () => JSX.Element = () => {
	return (
		<div>
			<h1>Formik Components</h1>
			<Formik
				initialValues={{
					firstName: "",
					lastName: "",
					emailAddress: "",
					terms: false,
					jobType: "",
				}}
				onSubmit={(values) => {
					console.log(values);
				}}
				validationSchema={Yup.object({
					firstName: Yup.string()
						.max(15, "Debe tener 15 caracteres o menos")
						.required("Requerido"),
					lastName: Yup.string()
						.max(15, "Debe tener 15 caracteres o menos")
						.required("Requerido"),
					emailAddress: Yup.string()
						.email("Debe ser un formato valido de correo")
						.required("Requerido"),
					terms: Yup.boolean().oneOf([true], "Debes aceptar las condiciones"),
					jobType: Yup.string()
						.notOneOf(["it-jr"], "Esta opcion no es permitida")
						.required("Requerido"),
				})}
			>
				{({ touched, getFieldProps, errors }) => (
					<Form>
						<label htmlFor="firstName">First Name</label>
						<Field name="firstName" type="text" />
						<ErrorMessage name="firstName" component="span" />

						<label htmlFor="lastName">Last Name</label>
						<Field name="lastName" type="text" />
						<ErrorMessage name="lastName" component="span" />

						<label htmlFor="emailAddress">Email Address</label>
						<Field name="emailAddress" type="text" />
						<ErrorMessage name="emailAddress" component="span" />

						<label htmlFor="jobType">Email Address</label>
						<Field name="jobType" as="select">
							<option value="">Pick something</option>
							<option value="developer">Developer</option>
							<option value="designer">Designer</option>
							<option value="it-senior">It Senior</option>
							<option value="it-jr">It Junior</option>
						</Field>
						<ErrorMessage name="jobType" component="span" />

						<label>
							<Field name="terms" type="checkbox" />
							Accept Terms and Conditions
						</label>
						<ErrorMessage name="terms" component="span" />

						<button type="submit">Submit</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default FormikComponents;
