import DashboardLayout from "../components/generic-components/DashboardLayout";
import LoginPage from "../pages/Auth/login";
import RegisterPage from "../pages/Auth/register";
import DashboardPage from "../pages/Dashboard";
import NotFoundPage from "../pages/NotFound";

/**
 * PublicRoutes is an array of objects that define the routes that do not require authentication.
 * Each object has a path and a component.
 * The component is the root component for the route.
 */
export const PublicRoutes = [
    {
		// The path for the root route
		path: "/",
		// The component for the root route
		component: <LoginPage />,
	},
	{
		// The path for the root route
		path: "/register",
		// The component for the root route
		component: <RegisterPage />,
	},
	{
		// The path for the not found route
		// Catches all routes that are not defined in the other routes
		path: "*",
		// The component for the not found route
		component: <NotFoundPage/> // Renders the NotFound component when the path is not found
	},
];

/**
 * PrivateRoutes is an array of objects that define the routes that require authentication.
 * Each object has a path and a component.
 * The component is wrapped in the DashboardLayout component.
 */
export const PrivateRoutes = [
	{
		// The path for the dashboard route
		path: "/dashboard",
		// The component for the dashboard route
		// The DashboardLayout component is wrapped around the Dashboard component
		component: <DashboardLayout>
			<DashboardPage />
		</DashboardLayout>,
	},
    {
		// The path for the not found route
		// Catches all routes that are not defined in the other routes
		path: "*",
		// The component for the not found route
		component: <NotFoundPage/> // Renders the NotFound component when the path is not found
	}
];
