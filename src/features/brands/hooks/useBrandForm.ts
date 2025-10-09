// hooks/useAuthForm.ts
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { brand } from "../validation/validation";
import type { IForm } from "../types/form";



export const useBrandForm = () => {
  const form = useForm<IForm>({
    resolver: yupResolver(brand),
    mode: "onChange",
  });

  return form; // или деструктурируй и верни нужные методы
};