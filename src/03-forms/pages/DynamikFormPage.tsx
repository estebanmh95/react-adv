import { Form, Formik } from "formik";
import { MySelect, MyTextInput } from "../components";
import formJson from "../data/custom-form.json";
import * as Yup from "yup";

interface InitialValues {
	[key: string]: string | number | boolean;
}

interface RequiredFields {
	[key: string]: any;
}
const initialValues: InitialValues = {};
const requiredFields: RequiredFields = {};

formJson.map((input) => {
	initialValues[input.name] = input.initialValue;
	if (input.validations && input.validations.length) {
		let schema = Yup.string();
		for (const validation of input.validations) {
			if (validation.type === "required") {
				schema = schema.required("Este campo es requerido");
			}
			if (validation.type === "minLength") {
				schema = schema.min(
					(validation as any).value || 1,
					"El nombre debe tener al menos 5 caracteres"
				);
			}
			if (validation.type === "email") {
				schema = schema.email("Debe escribir un formato de correo valido");
			}
		}
		requiredFields[input.name] = schema;
	}
	return null;
});

const validationSchema = Yup.object({ ...requiredFields });
const DynamikFormPage = () => {
	return (
		<div>
			<h1>Dynamic Form</h1>
			<Formik
				initialValues={initialValues}
				onSubmit={(values) => {
					console.log(values);
				}}
				validationSchema={validationSchema}
			>
				{({}) => (
					<Form noValidate>
						{formJson.map((input) => {
							if (input.type === "select") {
								return (
									<MySelect
										key={input.name}
										label={input.label}
										name={input.name}
									>
										<option value="">Select an option</option>
										{input.options?.map(({ id, label }) => (
											<option key={id} value={id}>
												{label}
											</option>
										))}
									</MySelect>
								);
							} else {
								return (
									<MyTextInput
										type={input.type}
										key={input.name}
										label={input.label}
										name={input.name}
										placeholder={input.placeholder}
									/>
								);
							}
						})}

						<button type="submit">Enviar</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default DynamikFormPage;
