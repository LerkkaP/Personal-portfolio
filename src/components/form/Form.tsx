import { useState, ChangeEvent, FormEvent } from "react";
import Input from "./Input";
import { sendEmail } from "../../services/sendEmail";

const Form = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const handleSubmit = (event: FormEvent<EventTarget>) => {
    event.preventDefault();
    sendEmail(data);
  };
  return (
    <div>
      <h2 className="text-4xl mb-20">Contact</h2>
      <form onSubmit={handleSubmit} className="flex flex-col w-96">
        <Input
          label="Name"
          name="name"
          value={data.name}
          onChange={handleChange}
          sx={{ paddingBottom: 4 }}
        />
        <Input
          label="email"
          name="email"
          value={data.email}
          onChange={handleChange}
        />
        <Input
          name="message"
          placeholder="Write a message..."
          multiline
          rows={5}
          maxRows={10}
          sx={{
            paddingTop: 4,
            paddingBottom: 4,
          }}
        />
        <button type="submit" className="bg-white text-black p-2 rounded">
          Send
        </button>
      </form>
    </div>
  );
};

export default Form;
