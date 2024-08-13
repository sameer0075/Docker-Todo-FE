import { Toolbar, Box, Button } from "@mui/material";
import AppBar from "./styled-components/AppBar";
import CustomButton from "../Button";

/**
 * The Header component represents the top bar of the application.
 *
 * It is a fixed position AppBar component from Material-UI.
 *
 * @returns The rendered Header component.
 */
const Header = () => {
  const handleLogout = () => {
    sessionStorage.clear();
    window.location.href= '/'
  }
  // Render the AppBar component with the position set to "fixed".
  return (
    <AppBar
      // Set the position of the AppBar to "fixed" to make it stay at the top of the viewport.
      position="fixed"
    >
      <Toolbar>
        <Box sx={{ flexGrow: 1 }} />
        <CustomButton
            variant="contained"
            sx={{
              mt: 2,
              mb: 2,
              ml: 2,
              height: 55,
              width: 100,
              borderRadius: 'none',
              display: 'block',
              background: 'linear-gradient(180deg, #E7463F, #EF8439)'
            }}
            title='Logout'
            onSubmit={handleLogout}
          />
      </Toolbar>
    </AppBar>
  )
}

export default Header
