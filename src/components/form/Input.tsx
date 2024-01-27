import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";

const Input = styled(TextField)({
  "& label.Mui-focused": {
    color: "#f5f5f5",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#f5f5f5",
  },

  "& label": {
    color: "#f5f5f5",
  },
  "& input": {
    color: "#f5f5f5",
    borderBottom: "1px solid white",
  },
});

export default Input;
