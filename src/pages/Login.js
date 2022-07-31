import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
	const navigate = useNavigate();
	const [errorMessage, setErrorMessage] = useState("");

	const handleSubmit = async (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		const email = data.get("email");
		const password = data.get("password");

		try {
			await signInWithEmailAndPassword(auth, email, password);
			navigate("/");
		} catch (error) {
			setErrorMessage(error.message);
		}
	};

	return (
		<section className="section-formauth">
			<div className="formauth">
				<div className="box-formauth">
					<h1>Sign in</h1>
					{errorMessage && (
						<span className="info_form error">{errorMessage}</span>
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
						<div className="form-field">
							<button type="submit" className="btn-submit">
								Sign in
							</button>
						</div>
					</form>
					<Link className="link-register" to="/signup">
						Don't have an account? <strong>Sign up for free</strong>
					</Link>
					<Link className="link-home" to="/">
						<strong>Go to homepage</strong>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Login;
