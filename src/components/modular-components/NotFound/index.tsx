import type { FC } from 'react';

import { Box, Container } from '@mui/material';

import NotFoundText from './NotFoundText';
import BackToHomeButton from './BackToHomeButton';
import { containerBoxStyles, buttonBoxStyles } from './styles';

/**
 * A component that displays a "404 Not Found" page.
 * It takes up the entire viewport and displays a message and a button to go back to the home page.
 *
 * @return {JSX.Element} The rendered component.
 */
const NotFound: FC = () => {

  return (
    <>
      {/* Container for the entire viewport */}
      <Box
        sx={containerBoxStyles}
      >
        {/* Container for the content */}
        <Container maxWidth="lg">
         {/* Text displaying the error message */}
         <NotFoundText text={"404: The page you are looking for isn’t here"}/>

          {/* Box containing the button to go back to the home page */}
          <Box
            sx={buttonBoxStyles}
          >

           {/* Button to go back to the home page */}
           <BackToHomeButton title={"Back to Home"}/>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default NotFound;
