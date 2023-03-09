import { TextField as MUITextField } from "@mui/material";

const TextField = ({
  autoFocus,
  required,
  name,
  label,
  type = "text",
  autoComplete,
}) => (
  <MUITextField
    margin="normal"
    required={required}
    fullWidth
    id={name}
    name={name}
    autoComplete={autoComplete ? autoComplete : name}
    label={label}
    type={type}
    autoFocus={autoFocus}
  />
);

export default TextField;
