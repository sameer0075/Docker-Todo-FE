/**
 * This interface defines the props for the CustomButton component.
 * @prop {CSSProperties} sx - The styles for the button. If not provided, the default styles from the style.ts file are used.
 * @prop {boolean} fullWidth - If true, the button will take up all available space.
 * @prop {string} variant - The variant of the button. Can be 'text', 'outlined', or 'contained'.
 * @prop {string} title - The text inside the button.
 * @prop {string} titleSize - The size of the text inside the button. If not provided, 18px is used.
 * @prop {string} fontWeight - The font weight of the text inside the button. If not provided, 'bold' is used.
 */
export interface ButtonInterface {
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
}
