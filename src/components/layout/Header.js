import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { IoGameController } from "react-icons/io5";
// styles
import styles from "./Header.module.css";

const Header = () => {
	const [user] = useAuthState(auth);

	const navigate = useNavigate();

	const onLogout = async () => {
		try {
			await signOut(auth);
			navigate("/");
		} catch (err) {
			console.log(err);
		}
	};

	const activeStyle = {
		color: "#fff",
	};

	return (
		<header className={styles.header}>
			<div className={`${styles.container} container`}>
				<NavLink to="/">
					<IoGameController className={styles.logo} />
					Gamepedia
				</NavLink>
				<nav className={styles.navigation}>
					<ul>
						<li>
							<NavLink
								to="/"
								style={({ isActive }) => (isActive ? activeStyle : undefined)}
							>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink
								to="popular"
								style={({ isActive }) => (isActive ? activeStyle : undefined)}
							>
								Popular
							</NavLink>
						</li>
						<li>
							<NavLink
								to="favorites"
								style={({ isActive }) => (isActive ? activeStyle : undefined)}
							>
								Favorites
							</NavLink>
						</li>
						<li>
							<NavLink
								to="contact"
								style={({ isActive }) => (isActive ? activeStyle : undefined)}
							>
								Contact Us
							</NavLink>
						</li>
						{!user ? (
							<li>
								<NavLink
									to="signup"
									style={({ isActive }) => (isActive ? activeStyle : undefined)}
								>
									Sign Up
								</NavLink>
							</li>
						) : (
							""
						)}
						{user ? (
							<li>
								<button className={styles.btn_logout} onClick={onLogout}>
									Sign out
								</button>
							</li>
						) : (
							<li>
								<NavLink to="/login">Sign In</NavLink>
							</li>
						)}
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
