import { object, string } from "yup";

export const formSchema = object({
  name: string().required("Add name"),
  email: string()
    .required("Add email")
    .test(
      "email",
      "Invalid email",
      (value) => {
        return validateEmail(value);
      }
    ),
  message: string().max(500),
});

const validateEmail = (email: string | undefined) => {
  return string().email().isValidSync(email);
};
