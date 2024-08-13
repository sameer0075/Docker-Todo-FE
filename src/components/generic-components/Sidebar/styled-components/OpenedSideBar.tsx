import { CSSObject, Theme } from '@mui/material';

const drawerWidth = 240;
/**
 * Defines the CSS styles for the opened sidebar.
 *
 * @param {Theme} theme - The MUI theme object.
 * @returns {CSSObject} The CSS object for the opened sidebar.
 */
const OpenedSideBar = (theme: Theme): CSSObject => ({
  // Set the background color of the sidebar to white.
  backgroundColor: "white",

  // Set the width of the sidebar.
  width: drawerWidth,

  // Apply a transition effect for the width property when the sidebar is opened.
  transition: theme.transitions.create("width", {
    // Use a sharp easing function for the transition.
    easing: theme.transitions.easing.sharp,
    // Set the duration of the transition to the standard entering screen duration.
    duration: theme.transitions.duration.enteringScreen,
  }),

  // Hide any overflowing content horizontally.
  overflowX: "hidden",
});

export default OpenedSideBar