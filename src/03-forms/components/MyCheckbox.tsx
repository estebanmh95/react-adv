import { ErrorMessage, Field, useField } from "formik";
import React from "react";

interface Props {
	label?: string;
	name: string;
	component?: string;
	[key: string]: any;
}
export const MyCheckbox = ({ label, ...props }: Props) => {
	const [field] = useField({ ...props, type: "checkbox" });

	return (
		<>
			<label>
				<Field {...field} {...props} type="checkbox" />
				{label}
			</label>
			<ErrorMessage name={props.name} component="span" />
		</>
	);
};
