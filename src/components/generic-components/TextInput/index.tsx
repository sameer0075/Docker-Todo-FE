import { TextInputInterface } from "./interface"
import { CustomTextField } from "./styled-components";
import { inputStyle } from "./styles";

/**
 * CustomTextInput component for rendering a custom text input field.
 * 
 * @param margin - The margin style for the input field.
 * @param fullWidth - Whether the input should take up the full width.
 * @param id - The id of the input field.
 * @param name - The name of the input field.
 * @param size - The size of the input field.
 * @param label - The label for the input field.
 * @param InputProps - Additional input properties.
 * @param type - The type of the input field.
 * @param extraProps - Extra properties for the input field.
 * @returns JSX.Element
 */
const CustomTextInput = ({ margin = 'normal', fullWidth, id, name, size = 'medium', label, InputProps, type, extraProps, sx, multiline, rows, inputProps,
    error,
    helperText,
    onBlur,
    onChange,
    value, }: TextInputInterface) => {
    // Determine the input type based on whether it is a password field and showPassword flag
    const inputType = type === 'password' ? extraProps.showPassword ? 'text' : 'password' : type;
    return (
        <CustomTextField
            multiline={multiline}
            margin={margin}
            sx={sx ? { ...inputStyle, ...sx } : { ...inputStyle }}
            fullWidth={fullWidth}
            id={id}
            name={name}
            size={size}
            label={label}
            InputProps={InputProps}
            type={inputType}
            rows={rows}
            inputProps={inputProps}
            error={error}
            helperText={helperText}
            onBlur={onBlur}
            onChange={onChange}
            value={value}
        />
    );
}

export default CustomTextInput