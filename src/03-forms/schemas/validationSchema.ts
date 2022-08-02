import * as Yup from "yup";

export const validationSchema = Yup.object({
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
});
