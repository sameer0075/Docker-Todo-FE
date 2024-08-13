import { Link as RouterLink } from 'react-router-dom';
import { getToken } from '../../../utils/helper-functions';
import CustomButton from '../../generic-components/Button';
import { buttonStyles } from './styles';



/**
 * A component that renders a button to go back to the home page.
 * It uses the `CustomButton` component from the `Generic-Components` module.
 * The button is a link that points to the home page.
 * The button has a bold font weight and is outlined.
 * The button's style is defined in the `styles` module.
 * @param {Object} props - The props of the component.
 * @param {string} props.title - The title of the button.
 * @returns {JSX.Element} The rendered component.
 */
const BackToHomeButton = ({title}: any) => {
  const token = getToken();
  return (
    <CustomButton
      // The button is a link that points to the home page
      component={RouterLink}
      // The path to the home page
      to={token.token ? "/dashboard" : "/"}
      // The variant of the button
      variant="outlined"
      // The style of the button
      sx={buttonStyles}
      // The title of the button
      title={title}
      // The font weight of the button
      fontWeight={'bold'}
    />
 
  )
}

export default BackToHomeButton