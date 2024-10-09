import { validateProps } from "../../common/types";

export default function validate(values: validateProps) {
  let errors = {} as validateProps;

  if (!values.name) {
    errors.name = "Ime je obavezno";
  }
  if (!values.email) {
    errors.email = "Email je obavezan";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email je neispravan";
  }
  if (!values.message) {
    errors.message = "Poruka je obavezna";
  }
  return errors;
}
