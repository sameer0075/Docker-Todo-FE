import type { FC } from 'react';
import NotFound from '../../components/modular-components/NotFound';

/**
 * NotFoundPage component.
 *
 * This component renders the NotFound component when the requested page is not found.
 *
 * @returns {JSX.Element} The NotFound component.
 */
const NotFoundPage: FC = () => {
  // Render the NotFound component
  return (
    <NotFound/>
  );
};

export default NotFoundPage;
