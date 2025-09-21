import type { FieldErrors, UseFormRegister } from "react-hook-form";
import type { FormValues } from "./form";

export interface IInput {
  type: keyof FormValues;
  text: string;
  placeholder: string;
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
}