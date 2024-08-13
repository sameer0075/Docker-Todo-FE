import { CSSObject, Theme } from "@mui/material";

/**
 * Defines the CSS styles for the closed sidebar.
 *
 * @param {Theme} theme - The MUI theme object.
 * @returns {CSSObject} The CSS object for the closed sidebar.
 */
const ClosedSideBar = (theme: Theme): CSSObject => ({
  // Set the background color of the sidebar to white.
  backgroundColor: "white",

  // Apply a transition effect for the width property when the sidebar is closed.
  transition: theme.transitions.create("width", {
    // Use a sharp easing function for the transition.
    easing: theme.transitions.easing.sharp,
    // Set the duration of the transition to the standard leaving screen duration.
    duration: theme.transitions.duration.leavingScreen,
  }),

  // Hide any overflowing content horizontally.
  overflowX: "hidden",

  // Set the width of the sidebar based on the spacing scale.
  width: `calc(${theme.spacing(7)} + 1px)`,

  // Apply a different width for larger screens.
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

export default ClosedSideBar