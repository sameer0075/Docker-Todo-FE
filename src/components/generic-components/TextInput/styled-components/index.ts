import styled from "@emotion/styled";
import { Checkbox, TextField } from "@mui/material";

/**
 * Styled Checkbox component with gradient effect
 */
const GradientCheckbox = styled(Checkbox)({
    /**
     * Hide the default checkbox
     */
    '&.Mui-checked': {
        color: 'red',
    },
    /**
     * Using sibling selector to target the icon button
     * and add a gradient background when checked
     */
    '&.Mui-checked ~ .MuiIconButton-colorPrimary': {
        backgroundImage: 'linear-gradient(180deg, #E7463F, #EF8439)',
        border: '1px solid #E7463F', // Border color when checked
    },
});



/**
 * Styled TextField component with custom styles
 */
const CustomTextField = styled(TextField)({
    /**
     * Customize the input field
     */
    '& .MuiOutlinedInput-root': {
        /**
         * Customize the outline when focused
         */
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#777777', // Your border color when focused
            borderWidth: '1px',
        },
    },

    /**
     * Customize the label
     */
    '& .MuiInputLabel-root': {
        color: '#333', // Default label color
        /**
         * Customize the label color when focused
         */
        '&.Mui-focused': {
            color: '#777777',
        },
    },
});

export { GradientCheckbox, CustomTextField }
