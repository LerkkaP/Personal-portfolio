import Input from "./Input";

const Form = () => {
  return (
    <div>
      <form className="flex flex-col w-96">
        <Input label="Name" sx={{ paddingBottom: 4 }} />
        <Input label="email" />
        <Input
          placeholder="Write a message..."
          multiline
          rows={5}
          maxRows={10}
          sx={{
            paddingTop: 4,
            paddingBottom: 4,
          }}
        />
        <button className="bg-white text-black p-2 rounded">Send</button>
      </form>
    </div>
  );
};

export default Form;
