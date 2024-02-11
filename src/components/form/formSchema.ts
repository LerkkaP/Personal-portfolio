import { object, string } from "yup"

export const formSchema = object({
    name: string().required('Nimi puuttuu'),
    email: string().email('Väärä sähköpostiosoite').required('Sähköposti puuttuu'),
    message: string().required('Viesti puuttuu'),
  });