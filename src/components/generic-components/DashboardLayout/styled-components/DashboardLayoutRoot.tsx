/**
 * The styled root element for the dashboard layout.
 * It has a background color of #F7F8FA, a display of flex,
 * a height of 100vh, and an overflow of hidden.
 * It also takes up 100% of the width.
 */
import { styled } from '@mui/material/styles';

const DashboardLayoutRoot = styled('div')({
  backgroundColor: '#F7F8FA',
  display: 'flex',
  height: '100vh',
  overflow: 'hidden',
  width: '100%',
});

export default DashboardLayoutRoot;

