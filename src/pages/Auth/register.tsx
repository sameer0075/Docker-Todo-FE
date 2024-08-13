import type { FC } from 'react';
import AuthLayout from '../../components/modular-components/Auth';

/**
 * AuthPage component.
 *
 * This component renders the Auth component.
 *
 * @returns {JSX.Element} The NotFound component.
 */
const RegisterPage: FC = () => {
  // Render the Auth component
  return (
    <AuthLayout type="register"/>
  );
};

export default RegisterPage;
