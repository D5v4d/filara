// hooks/useAuthForm.ts
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import type { FormValues } from "../types/form";
import { authorization } from "../validation/validation";

export const useAuthForm = () => {
  const form = useForm<FormValues>({
    resolver: yupResolver(authorization),
    mode: "onChange",
  });

  return form; // или деструктурируй и верни нужные методы
};

// const {
//   register, // register — это функция, которая соединяет useForm и элемент (например, <input>), и позволяет отслеживать значение, изменения, валидацию и ошибки этого поля.
//   formState: { errors, isValid }, // formState — это объект, содержащий состояние всей формы. isValid -  true, если все поля прошли валидацию, и false — если есть хотя бы одна ошибка.
//   handleSubmit, // функция-обёртка. Она предотвращает стандартное поведение формы (перезагрузку страницы), собирает все данные формы, проводит финальную валидацию и, если всё в порядке — вызывает вашу функцию обработки.
//   reset, // Это функция, которая сбрасывает форму к начальному состоянию.
// } = useForm<FormValues>({
//   resolver: yupResolver(authorization), // resolver — это валидатор формы | yupResolver — это адаптер, который позволяет использовать библиотеку Yup
//   mode: "onChange", // mode определяет, когда происходит валидация формы.
// });
