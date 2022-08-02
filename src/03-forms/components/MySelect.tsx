import { ErrorMessage, Field, useField } from "formik";
import React from "react";

interface Props {
	label: string;
	name: string;
	type?: string;
	component?: string;
	placeholder?: string;
	[key: string]: any;
}
export const MySelect = ({ label, ...props }: Props) => {
	const [field] = useField(props);

	return (
		<>
			<label htmlFor={props.id || props.name}>{label}</label>
			<Field {...field} {...props} as="select" />
			<ErrorMessage name={props.name} component="span" />
		</>
	);
};
