import { styled } from "@mui/material/styles";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { appBarStyles } from "../styles"; 
/**
 * The AppBar component represents the header of the application.
 *
 * It is a styled AppBar component from Material-UI. It has conditional styles based on the 'open' prop.
 *
 * @param {AppBarProps} props - The props of the AppBar component.
 * @returns The rendered AppBar component.
 */

/**
 * The AppBarProps interface defines the props for the AppBar component.
 *
 * It extends the MuiAppBarProps interface from Material-UI, and adds an optional
 * 'open' boolean prop.
 */
interface AppBarProps extends MuiAppBarProps {
  /**
   * A boolean indicating whether the AppBar is open.
   * If provided, the AppBar will have conditional styles based on this prop.
   */
  open?: boolean;
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  ...appBarStyles,
  /**
   * Create a transition effect for the width and margin properties when the AppBar is closed.
   */
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),

  /**
   * Apply different styles when the AppBar is open.
   */
  ...(open && {
    /**
     * Set the left margin of the AppBar to the width of the drawer.
     */
    marginLeft: drawerWidth, 
    /**
     * Set the width of the AppBar to the remaining space after the drawer.
     */
    width: `calc(100% - ${drawerWidth}px)`, 
    /**
     * Create a transition effect for the width and margin properties when the AppBar is opened.
     */
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default AppBar