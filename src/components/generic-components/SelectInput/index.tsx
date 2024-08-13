import { Select, MenuItem, FormControl, InputLabel, FormHelperText } from "@mui/material";
import { CustomSelectInterface } from "./interface";

/**
 * CustomSelect component is a wrapper around MUI's Select component
 * that applies a custom border style to the input element.
 *
 * @param {object} props - The props object containing the following properties:
 *   - margin: The margin of the Select component. Defaults to 'normal'.
 *   - fullWidth: Whether the Select component should take up all available space. Defaults to true.
 *   - id: The id of the Select component.
 *   - name: The name of the Select component.
 *   - size: The size of the Select component. Defaults to 'medium'.
 *   - label: The label of the Select component.
 *   - value: The selected value of the Select component.
 *   - onChange: The callback function to be called when the selected value changes.
 * @returns {JSX.Element} The rendered Select component.
 */
function CustomSelect({ inputLabel, sx, options, value, onChange, name, error }: CustomSelectInterface) {
    return (
        <FormControl
        margin="normal"
        fullWidth
        size="small"
        error={Boolean(error)}
    >
        <InputLabel id="demo-simple-select-label">
            {inputLabel}
        </InputLabel>
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={value}
            onChange={onChange}
            label={inputLabel}
            name={name}
            sx={{
                ...sx,
            }}
        >
            {options?.map((option: any) => (
                typeof option === 'string' ? (
                    <MenuItem value={option} key={option}>
                        {option}
                    </MenuItem>
                ) : (
                    <MenuItem value={option} key={option.id}>
                        {option.name}
                    </MenuItem>
                )
            ))}
        </Select>
        {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>

    );
}

export default CustomSelect;
