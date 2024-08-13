import { styled } from '@mui/material/styles';

/**
 * A styled div component that represents the wrapper of the dashboard layout.
 * It takes up all available space, hides overflow content, and applies padding
 * on top for the header component.
 */
const DashboardLayoutWrapper = styled('div')(({ theme }) => ({
  // Set the display property to flex to enable flexbox layout.
  display: 'flex',
  // Set the flex properties to take up all available space.
  flex: '1 1 auto',
  // Hide overflow content to prevent it from overflowing.
  overflow: 'hidden',
  // Apply padding on top for the header component.
  paddingTop: '64px',
  // Apply different padding on the left side for larger screens.
  [theme.breakpoints.up('lg')]: {
    paddingLeft: 0,
  },
}));

export default DashboardLayoutWrapper;

