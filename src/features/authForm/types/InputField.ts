import type { IForm } from "./form";

export interface IInputField {
  type: keyof IForm;
  text: string;
  placeholder: string;
}