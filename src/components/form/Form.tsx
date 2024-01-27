import { TextField } from "@mui/material";
import Input from "./Input";

const Form = () => {
  return (
    <div>
      <form className="flex flex-col w-96">
        <Input label="Name" variant="standard" />
        <Input label="Email" variant="standard" />
        <TextField
          placeholder="Write a message..."
          multiline
          rows={5}
          maxRows={10}
          InputProps={{
            style: {
              border: "1px solid #f5f5f5",
            },
          }}
          sx={{
            paddingTop: 4,
            paddingBottom: 4,
          }}
        />
        <button className="bg-white-text text-black p-2 rounded">Lähetä</button>
      </form>
    </div>
  );
};

export default Form;
