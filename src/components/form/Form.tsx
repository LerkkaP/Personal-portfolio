import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "./formSchema";
import { sendEmail } from "../../services/sendEmail";
import Input from "./Input";
import { motion } from "framer-motion";
import { FormData } from "../../types";

const Form = () => {
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    shouldFocusError: false,

    resolver: yupResolver(formSchema),
  });

  const onFocus = (fieldName: string) => {
    setFocusedField(fieldName);
  };

  const onBlur = () => {
    setFocusedField(null);
  };

  const onSubmitHandler = (data: FormData) => {
    //sendEmail(data);
    setSuccess(true);
    console.log(data);
    reset();
  };

  return (
    <div>
      {success ? (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              y: 0,
              opacity: 0,
            },
            visible: {
              y: 0,
              opacity: 1,
              transition: {
                ease: "ease",
                duration: 2,
                delay: 0.5,
              },
            },
          }}
          className="text-left"
        >
          <h2>
            <b className="text-5xl">Thank you for your message!</b>
          </h2>
          <p className="pb-4 text-lg">
            I'll be in touch with you as soon as possible.
          </p>
          <button
            onClick={() => setSuccess(false)}
            className="bg-white-text text-black p-2 rounded"
          >
            Lähetä uusi viesti
          </button>
        </motion.div>
      ) : (
        <form
          className="flex flex-col md:max-w-96"
          onSubmit={handleSubmit(onSubmitHandler)}
        >
          <Input
            {...register("name")}
            label="Name *"
            sx={{ paddingBottom: 4 }}
            error={!!errors.name && focusedField !== "name"}
            helperText={
              errors.name &&
              errors.name.message &&
              focusedField !== "name" &&
              errors.name.message
            }
            onFocus={() => onFocus("name")}
            onBlur={onBlur}
          />
          <Input
            {...register("email")}
            label="Email*"
            error={!!errors.email && focusedField !== "email"}
            helperText={
              errors.email &&
              errors.email.message &&
              focusedField !== "email" &&
              errors.email.message
            }
            onFocus={() => onFocus("email")}
            onBlur={onBlur}
          />
          <Input
            {...register("message")}
            placeholder="Write a message"
            multiline
            rows={7}
            sx={{
              paddingTop: 4,
              paddingBottom: 4,
            }}
            onFocus={() => onFocus("message")}
            onBlur={onBlur}
          />
          <p>{errors.message?.message}</p>
          <button className="bg-white-text p-2 rounded">
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default Form;