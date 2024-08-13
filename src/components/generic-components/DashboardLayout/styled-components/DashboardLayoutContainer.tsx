import { Box } from '@mui/material';

/**
 * This is the container for the content of the dashboard layout.
 *
 * The container is a Box component that takes up all remaining space in the layout
 * and prevents its content from overflowing.
 */
export const DashboardLayoutContainer = (props: React.HTMLAttributes<HTMLDivElement>) => (
  <Box
    display="flex"
    flex="1 1 auto"
    overflow="hidden"
    {...props}
  />
);
