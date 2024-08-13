import { styled } from "@mui/material/styles";

/**
 * The content div of the dashboard layout.
 *
 * This component represents the content area of the dashboard layout. It takes up all available space,
 * overflows its content with a scrollbar, and positions itself relative to its parent. It also provides
 * a smooth scrolling experience on touch devices.
 */
const DashboardLayoutContent = styled("div")(({ theme }) => ({
  flex: "1 1 0",
  height: "100%",
  overflow: "auto",
  position: "relative",
  WebkitOverflowScrolling: "touch",
}));

export default DashboardLayoutContent;

