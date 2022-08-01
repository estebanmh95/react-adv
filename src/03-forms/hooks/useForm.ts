import React, { useState } from "react";

interface StateInterface {
	[key: string]: string;
}

const useForm = (initialState: StateInterface) => {
	const [registerData, setRegisterData] =
		useState<StateInterface>(initialState);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setRegisterData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log(registerData);
	};

	const reset = () => {
		setRegisterData(initialState);
	};
	const register = (property: string) => {
		return {
			name: property,
			onChange: handleChange,
			value: registerData[property] ? registerData[property] : "",
		};
	};

	const isValidEmail = () => {
		const re =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(registerData.email);
	};
	return {
		registerData,
		onSubmit,
		register,
		reset,
		isValidEmail,
	};
};

export { useForm };
