import { FormProvider } from "react-hook-form";
import { InputForm } from "./InputForm";
import { useBrandForm } from "../hooks/useBrandForm";
import FileInput from "./FileInput";
import { Box } from "@mui/material";
import { BtnAddBrand } from "./BtnAddBrand";
import type { Ibrand } from "../types/brands";
import brandsStore from '../mobX/mobx'

export const BrandForm = () => {
  const form = useBrandForm();
  const { handleSubmit, reset } = form;
  const {postAddBrand} = brandsStore

  const formBrand = (data: { name: string; file: string }) => {
    try {
      console.log(data)
      const brand: Ibrand = {
        id: Date.now().toString(),
        name: data.name,
        icon: data.file,
      };
      postAddBrand(brand)
      reset();
      
      console.log("Форма отправлена:", brand);
      console.log("Форма отправлена:", data.file);
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit(formBrand)}>
        <Box sx={{ display: "flex", gap: "8px" }}>
          <InputForm type="name" placeholder="Введите название бренда" />
          <FileInput name="file" />
          <BtnAddBrand />
        </Box>
      </form>
    </FormProvider>
  );
};
