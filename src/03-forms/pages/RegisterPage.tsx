import "../styles/styles.css";
import { useForm } from "../hooks/useForm";

const INITIAL_STATE = {
	name: "Esteban",
	email: "",
	password: "",
	rePassword: "",
};

const RegisterPage = () => {
	const { onSubmit, register, reset, isValidEmail, registerData } =
		useForm(INITIAL_STATE);
	// const { registerData, handleChange, onSubmit, register } = useForm();
	// const { name, email, password, rePassword } = registerData;
	return (
		<div>
			<h1>Register Page</h1>
			<form noValidate onSubmit={onSubmit}>
				<input placeholder="Name" {...register("name")} />
				<input placeholder="Email" {...register("email")} />
				{!isValidEmail() && <span>No es un email válido</span>}
				<input placeholder="Password" {...register("password")} />
				{(!registerData.password || registerData.password.length < 8) && (
					<span>No es una contraseña válida</span>
				)}

				<input placeholder="Repeat Password" {...register("rePassword")} />
				{/* <input
					onChange={(e) => handleChange(e.target.value, e.target.name)}
					type="text"
					value={name}
					name="name"
					placeholder="Name"
				/> */}
				{/* <input
					onChange={(e) => handleChange(e.target.value, e.target.name)}
					type="email"
					value={email}
					placeholder="Email"
					name="email"
				/>
				<input
					onChange={(e) => handleChange(e.target.value, e.target.name)}
					type="password"
					value={password}
					placeholder="Password"
					name="password"
				/>
				<input
					onChange={(e) => handleChange(e.target.value, e.target.name)}
					type="password"
					value={rePassword}
					name="rePassword"
					placeholder="Repeat Password"
				/> */}
				<button type="submit">Create</button>
				<button type="button" onClick={reset}>
					Reset
				</button>
			</form>
		</div>
	);
};

export default RegisterPage;
