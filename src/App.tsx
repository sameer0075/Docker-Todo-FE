import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Provider } from 'react-redux';

import './App.css';
import { PrivateRoutes, PublicRoutes } from './routes';
import { RouteConfig } from './routes/Interface/interface';
import NotFound from './pages/NotFound';
import { getToken } from './utils/helper-functions';
import { store } from './redux/store';
import { ToastContainer } from 'react-toastify';

/**
 * The main App component.
 *
 * This component is the root of the React application.
 * It renders the BrowserRouter component, which provides routing functionality.
 * It maps over the appropriate routes based on whether the user is authenticated or not.
 * The routes are defined in the PublicRoutes and PrivateRoutes arrays.
 * The component for each route is rendered when the path matches the current URL.
 * The 404 route is included at the end.
 */
function App() {
  // Get the user's token from local storage
  const token = getToken();

  return (
    // Render the App component
    <Provider store={store}>
      <ToastContainer />
      {/* Render the BrowserRouter component */}
      <BrowserRouter>
        {/* Render the Routes component */}
        <Routes>
          {/* Render the public routes if the user is authenticated */}
          {!token.token ? (
            PublicRoutes.map(({ component, path }: RouteConfig, index: number) => (
              <Route key={index} path={path} element={component} />
            ))
          ) : (
            /* Render the private routes if the user is not authenticated */
            PrivateRoutes.map(({ component, path }: RouteConfig, index: number) => (
              <Route key={index} path={path} element={component} />
            ))
          )}
          {/* Include the 404 route at the end */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
