import * as yup from "yup";
import { validateFormValues } from "../validateForm";
import { messageValidations } from "./messageValidations";

export const initialValuesLogin = {
  email: "",
  password: ""
};

export const validateLogin = validateFormValues(
  yup.object({
    email: yup
      .string()
      .email(messageValidations.email)
      .required(messageValidations.required),
    password: yup.string().required(messageValidations.required)
  })
);
