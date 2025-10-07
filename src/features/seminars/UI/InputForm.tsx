// InputForm.tsx
import { Container, InputBase, InputLabel, Typography } from "@mui/material";
import { useFormContext } from "react-hook-form";
import type { IForm, IInputField } from "../types/form";

export const InputForm = ({ type, text, placeholder }: IInputField) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<IForm>();

  const inputType = type === "date" || type === "time" ? type : "text";

  return (
    <Container disableGutters>
      <InputLabel sx={{ lineHeight: "24px", color: "#37393D" }} htmlFor={type}>
        {text}
      </InputLabel>
      <InputBase
        id={type}
        sx={{
          color: "#737680",
          lineHeight: "20px",
          width: "100%",
          height: type === "description" ? "60px" : "40px",
          border: "1px solid #D0D3DA",
          borderRadius: "8px",
          p: "10px 12px",
          mt: "8px",
        }}
        placeholder={placeholder}
        type={inputType}
        {...register(type)}
        error={!!errors[type]}
        //  {...register(type)} возврашает все ключи объека {
        // name: "email",         ← значение `type`, например "email".
        // onChange: функция,    ← следит за изменениями
        // onBlur: функция,      ← следит, когда поле теряет фокус
        // ref: ссылка,           ← нужна, чтобы фокусироваться на поле при ошибке
      />
      {errors[type] && <Typography sx={{ color: "red", mt: "4px", fontSize: "0.75rem" }}>{errors[type]?.message as string}</Typography>}
    </Container>
  );
};
