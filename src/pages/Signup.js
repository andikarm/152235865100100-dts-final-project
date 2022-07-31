import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Signup = () => {
	const navigate = useNavigate();
	const [errorMessage, setErrorMessage] = useState("");

	const handleSubmit = async (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		const email = data.get("email");
		const password = data.get("password");

		try {
			const { user } = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			);
			console.log(user);
			navigate("/login");
		} catch (error) {
			setErrorMessage(error.message);
		}
	};

	return (
		<section className="section-formauth">
			<div className="formauth">
				<div className="box-formauth">
					<h1>Sign Up</h1>
					{errorMessage && (
						<span className="info-form error">{errorMessage}</span>
					)}
					<form className="form-wrapper" onSubmit={handleSubmit}>
						<div className="form-field">
							<input
								name="email"
								type="email"
								placeholder="Email address"
								required
							/>
						</div>
						<div className="form-field">
							<input
								name="password"
								type="password"
								placeholder="Password"
								required
							/>
						</div>
						<div className="form-field form-field-submit">
							<button type="submit" className="btn-submit">
								Sign Up
							</button>
						</div>
					</form>
					<Link className="link-register" to="/login">
						Already have an account? <strong>Sign in here</strong>
					</Link>
					<Link className="link-home" to="/">
						<strong>Go to homepage</strong>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Signup;
