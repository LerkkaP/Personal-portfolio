import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";

const Input = styled(TextField)({
  "& label.Mui-focused": {
    color: "#f5f5f5",
  },
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: "white",
    },
    "&:hover fieldset": {
      borderColor: "white",
    },
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "grey",
  },
  "& label": {
    color: "#f5f5f5",
  },
  "& input": {
    color: "#f5f5f5",
  },
  "& .MuiInputBase-multiline": {
    color: "#f5f5f5",
  },
});

export default Input;
