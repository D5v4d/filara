// InputForm.tsx
import { Box, InputBase, Typography } from "@mui/material";
import { useFormContext } from "react-hook-form";
import type { IForm, IInputField } from "../types/form";

export const InputForm = ({ type, placeholder }: IInputField) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<IForm>();

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        flexDirection: "column",
      }}
    >
      <InputBase
        sx={{
          lineHeight: "20px",
          border: "1px solid #D0D3DA",
          borderRadius: "8px",
          height: "40px",
          p: "10px 12px",
        }}
        type={type}
        placeholder={placeholder}
        {...register(type)}
        error={!!errors[type]}
        //  {...register(type)} возврашает все ключи объека {
        // name: "email",         ← значение `type`, например "email".
        // onChange: функция,    ← следит за изменениями
        // onBlur: функция,      ← следит, когда поле теряет фокус
        // ref: ссылка,           ← нужна, чтобы фокусироваться на поле при ошибке
      />
      {errors[type] && <Typography sx={{ color: "red", mt: "4px", fontSize: "0.75rem" }}>{errors[type]?.message as string}</Typography>}
    </Box>
  );
};
