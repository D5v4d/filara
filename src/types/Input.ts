import type { FormValues } from "./form";

export interface IInput {
  type: keyof FormValues;
  text: string;
  placeholder: string;
}