import { Routes, Route } from "react-router-dom";

// Pages & components
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import ProtectedRoute from "./config/ProtectedRoute";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Popular from "./pages/Popular";
import Favorites from "./pages/Favorites";
import Details from "./pages/Details";
import NotFound from "./pages/NotFound";

function App() {
	return (
		<Layout>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route
					path="signup"
					element={
						<ProtectedRoute loginOnly={false}>
							<Signup />
						</ProtectedRoute>
					}
				/>
				<Route
					path="login"
					element={
						<ProtectedRoute loginOnly={false}>
							<Login />
						</ProtectedRoute>
					}
				/>
				<Route path="popular" element={<Popular />} />
				<Route path="favorites" element={<Favorites />} />
				<Route
					path="games/:id"
					element={
						<ProtectedRoute loginOnly={true}>
							<Details />
						</ProtectedRoute>
					}
				/>
				<Route path="*" element={<NotFound />} />
			</Routes>
		</Layout>
	);
}

export default App;
