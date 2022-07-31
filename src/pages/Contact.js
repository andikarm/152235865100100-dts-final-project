import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../config/firebase";

const Contact = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");

	const [loader, setLoader] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoader(true);

		try {
			await addDoc(collection(db, "contact-us"), {
				name: name,
				email: email,
				subject: subject,
				message: message,
			});
			setLoader(false);
			alert("Your message has been submitted👍");
		} catch (e) {
			alert(e.message);
			setLoader(false);
		}

		setName("");
		setEmail("");
		setSubject("");
		setMessage("");
	};

	return (
		<section className="section-formauth">
			<div className="formauth">
				<div className="box-formauth">
					<h1>Contact Us</h1>
					<form className="form-wrapper" onSubmit={handleSubmit}>
						<div className="form-field">
							<input
								name="name"
								type="text"
								placeholder="Your name"
								value={name}
								onChange={(e) => setName(e.target.value)}
								required
							/>
						</div>
						<div className="form-field">
							<input
								name="email"
								type="email"
								placeholder="Your email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								required
							/>
						</div>
						<div className="form-field">
							<input
								name="subject"
								type="text"
								placeholder="Your subject"
								value={subject}
								onChange={(e) => setSubject(e.target.value)}
								required
							/>
						</div>
						<div className="form-field">
							<textarea
								placeholder="Your message"
								value={message}
								onChange={(e) => setMessage(e.target.value)}
								required
							></textarea>
						</div>
						<div className="form-field">
							<button
								type="submit"
								className="btn-submit"
								style={{ background: loader ? "" : " " }}
							>
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Contact;
