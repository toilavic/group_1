import { Grid, InputLabel, TextField, Typography } from "@mui/material"
import { useField } from "formik"

interface InterfaceTextFieldProps {
    name: string
    label: string
    placeholder: string
    type: string
}

const InputField = (props: InterfaceTextFieldProps) => {
    const [field, {error}] = useField(props)
    return (
        <Grid item xs={12}>
            <InputLabel htmlFor={field.name}>{props.label}</InputLabel>
            <TextField {...field} id={field.name} {...props} />
            {error && <Typography variant="caption">{error}</Typography>}
        </Grid>
    )
}

export default InputField
