import { Button } from "@mui/material"
import CustomText from "../Text"

interface ButtonInterface {
    sx?: any;
    fullWidth?: boolean;
    variant?: 'text' | 'outlined' | 'contained';
    title?: string;
    titleSize?:string;
    fontWeight?:string;
    component?: any;
    to?: string;
    type?:string
    onSubmit?:any
    disabled?:boolean
}

const buttonStyle = {
    // Margin top and bottom styles
    mt: 3,
    mb: 2,

    // Border radius style
    borderRadius: 10,

    // Height style
    height: 50,

    // Width style
    width: 280,

    // Display style
    display: 'block',

    // Background style
    background: 'linear-gradient(180deg, #E7463F, #EF8439)'
}

/**
 * CustomButton component
 * 
 * This component renders a MUI Button with the given props.
 * The default styles for the button are defined in the style.ts file.
 * The text inside the button is rendered with a MUI Typography component.
 * 
 * @param {ButtonInterface} props
 *      @prop {string} title - The text inside the button.
 *      @prop {CSSProperties} sx - The styles for the button. If not provided, the default styles from the style.ts file are used.
 *      @prop {boolean} fullWidth - If true, the button will take up all available space.
 *      @prop {string} variant - The variant of the button. Can be 'text', 'outlined', or 'contained'.
 *      @prop {string} titleSize - The size of the text inside the button. If not provided, 18px is used.
 *      @prop {string} fontWeight - The font weight of the text inside the button. If not provided, 'bold' is used.
 * 
 * @returns {JSX.Element} The CustomButton component.
 */
const CustomButton = ({ title, sx, fullWidth, variant, titleSize, fontWeight, component, to, type, onSubmit, disabled }: ButtonInterface) => {
    return <Button
        fullWidth={fullWidth}
        variant={variant}
        sx={sx ? sx : buttonStyle}
        component={component}
        to={to}
        type={type}
        onClick={onSubmit}
        disabled={disabled}
    >
        <CustomText sx={{
            /**
             * Set the font weight of the text inside the button.
             * If not provided, 'bold' is used.
             */
            fontWeight: fontWeight ? fontWeight : 'bold',
            /**
             * Set the font size of the text inside the button.
             * If not provided, 18px is used.
             */
            fontSize: titleSize ? titleSize : '18px'
        }}
        content={title}
        />
    </Button>
}

export default CustomButton