export interface IForm {
  title: string;
  description: string;
  speaker: string;
  specialization: string;
  city: string;
  date: string;
  time: string;
}


export interface IInputField {
  type: keyof IForm;
  text: string;
  placeholder: string;
}
