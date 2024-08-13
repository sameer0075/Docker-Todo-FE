import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";

import OpenedSideBar from "./OpenedSideBar";
import ClosedSideBar from "./ClosedSideBar";


const drawerWidth = 240;

// Create a styled MUI Drawer component with conditional styles based on the 'open' prop
const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open", // prevent 'open' prop from being passed to the underlying MUI Drawer component
})(({ theme, open }) => ({
  width: drawerWidth, // set the width of the drawer
  flexShrink: 0, // prevent the drawer from shrinking
  whiteSpace: "nowrap", // prevent text from wrapping
  boxSizing: "border-box", // use border-box sizing for the drawer
  // apply different styles based on the 'open' prop
  ...(open && {
    // if the drawer is open, apply the styles from the 'OpenedSideBar' function
    ...OpenedSideBar(theme),
    // also apply the styles to the 'MuiDrawer-paper' class
    "& .MuiDrawer-paper": OpenedSideBar(theme),
  }),
  ...(!open && {
    // if the drawer is closed, apply the styles from the 'ClosedSideBar' function
    ...ClosedSideBar(theme),
    // also apply the styles to the 'MuiDrawer-paper' class
    "& .MuiDrawer-paper": ClosedSideBar(theme),
  }),
}));

export default Drawer