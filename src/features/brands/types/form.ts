export interface IForm {
  name: string;
  file: string;
}

export interface IInputField {
  type: keyof IForm;
  placeholder: string;
}
