import "../styles/styles.css";
import { Formik, Form } from "formik";
import { MyCheckbox, MySelect, MyTextInput } from "../components";
import { validationSchema } from "../schemas/validationSchema";

const INITIAL_VALUES = {
	firstName: "",
	lastName: "",
	emailAddress: "",
	terms: false,
	jobType: "",
};

const FormikAbstractation: () => JSX.Element = () => {
	return (
		<div>
			<h1>Formik Abstractation</h1>
			<Formik
				initialValues={INITIAL_VALUES}
				onSubmit={(values) => {
					console.log(values);
				}}
				validationSchema={validationSchema}
			>
				{() => (
					<Form>
						<MyTextInput label={"First Name"} name={"firstName"} />
						<MyTextInput label={"Last Name"} name={"lastName"} />
						<MyTextInput
							label={"Email Address"}
							name={"emailAddress"}
							type="email"
						/>
						<MySelect label={"Job Type"} name={"jobType"}>
							<option value="">Pick something</option>
							<option value="developer">Developer</option>
							<option value="designer">Designer</option>
							<option value="it-senior">It Senior</option>
							<option value="it-jr">It Junior</option>
						</MySelect>

						<MyCheckbox name="terms" label="Accept Terms and Conditions" />

						<button type="submit">Submit</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default FormikAbstractation;
