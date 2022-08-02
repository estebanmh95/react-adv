import "../styles/styles.css";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { MyTextInput } from "../components";

const INITIAL_STATE = {
	name: "",
	email: "",
	password: "",
	rePassword: "",
};

const yupSchema = Yup.object({
	name: Yup.string()
		.min(2, "El nombre debe tener al menos 2 caracteres")
		.max(15, "El nombre debe tener maximo 15 caracteres")
		.required("Requerido"),
	email: Yup.string().email("Debe ser un email valido").required("Requerido"),
	password: Yup.string()
		.min(6, "La contraseña debe ser de al menos 6 caracteres")
		.required("Requerido"),
	rePassword: Yup.string()
		.test(
			"is-equal-password",
			"La contraseñas no coinciden",
			function (refpassword) {
				const { password } = this.parent;
				if (password && password !== refpassword) {
					return false;
				}
				return true;
			}
		)
		.required("Requerido"),
});

const RegisterFormikPage = () => {
	return (
		<div>
			<h1>RegisterFormikPage</h1>

			<Formik
				initialValues={INITIAL_STATE}
				onSubmit={(values) => {
					console.log(values);
				}}
				validationSchema={yupSchema}
			>
				{() => (
					<Form>
						<MyTextInput name="name" label="Nombre" />
						<MyTextInput name="email" label="Correo" />
						<MyTextInput name="password" label="Contraseña" type="password" />
						<MyTextInput
							name="rePassword"
							label="Repetir Contraseña"
							type="password"
						/>
						<button type="submit">Submit</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default RegisterFormikPage;
