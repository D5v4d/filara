import * as yup from "yup";

export const brand = yup.object({
  name: yup.string().required("Поле обязательно для заполнения"),
  file: yup.string().required("Поле обязательно для заполнения"),
});

// yup равен {object, string и другие методы}
