import React from "react";
import {
	BrowserRouter,
	Routes,
	Route,
	NavLink,
	Navigate,
} from "react-router-dom";
import {
	FormikBasicPage,
	FormikComponents,
	FormikYupPage,
	RegisterPage,
	FormikAbstractation,
	RegisterFormikPage,
	DynamikFormPage,
} from "../03-forms/pages";

import logo from "../logo.svg";

export const Navigation = () => {
	return (
		<BrowserRouter>
			<div className="main-layout">
				<nav>
					<img src={logo} alt="React logo"></img>
					<ul>
						<li>
							<NavLink
								to="/register"
								className={({ isActive }) => (isActive ? "nav-active" : "")}
							>
								Register Page
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/formik-basic"
								className={({ isActive }) => (isActive ? "nav-active" : "")}
							>
								Basic Formik
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/formik-yup"
								className={({ isActive }) => (isActive ? "nav-active" : "")}
							>
								Yup Formik
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/formik-components"
								className={({ isActive }) => (isActive ? "nav-active" : "")}
							>
								Yup Formik Components
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/formik-abstractation"
								className={({ isActive }) => (isActive ? "nav-active" : "")}
							>
								Yup Formik abstractation
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/formik-register"
								className={({ isActive }) => (isActive ? "nav-active" : "")}
							>
								Register Formik
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/dynamic-form"
								className={({ isActive }) => (isActive ? "nav-active" : "")}
							>
								Dynamic Form
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/users"
								className={({ isActive }) => (isActive ? "nav-active" : "")}
							>
								Users
							</NavLink>
						</li>
					</ul>
				</nav>

				<Routes>
					<Route path="/about" element={<h1>About page</h1>} />
					<Route path="/users" element={<h1>Users page</h1>} />
					<Route path="/home" element={<h1>Home page</h1>} />
					<Route path="/register" element={<RegisterPage />} />
					<Route path="/formik-basic" element={<FormikBasicPage />} />
					<Route path="/formik-yup" element={<FormikYupPage />} />
					<Route path="/formik-components" element={<FormikComponents />} />
					<Route path="/formik-components" element={<FormikComponents />} />
					<Route path="/dynamic-form" element={<DynamikFormPage />} />
					<Route path="/formik-register" element={<RegisterFormikPage />} />
					<Route
						path="/formik-abstractation"
						element={<FormikAbstractation />}
					/>
					<Route path="/*" element={<Navigate to="/home" replace />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
};
