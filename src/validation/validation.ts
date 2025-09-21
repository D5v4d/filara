import * as yup from "yup";

export const authorization = yup.object({
  email: yup.string().required("Поле обязательно для заполнения").email("Введите корректный email"),
  password: yup.string().required("Поле обязательно для заполнения"),
});
