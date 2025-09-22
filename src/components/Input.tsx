import { Container, InputBase, InputLabel, Typography } from "@mui/material";
import type { IInput } from "../types/Input";
import { useAuthForm } from "../hooks/useAuthForm";

function Input({ type, text, placeholder }: IInput) {
  const {register, formState: { errors }} = useAuthForm();

  return (
    <Container sx={{ height: "100px" }} disableGutters>
      <InputLabel sx={{ lineHeight: "24px", color: "#37393D" }} htmlFor={type}>
        {text}
      </InputLabel>
      <InputBase
        sx={{
          color: "#737680",
          lineHeight: "20px",
          width: "466px",
          height: "40px",
          border: "1px solid #D0D3DA",
          borderRadius: "8px",
          p: "10px 12px",
          mt: "8px",
        }}
        placeholder={placeholder}
        id={type}
        type={type}
        {...register(type)}
        //  {...register(type)} возврашает все ключи объека {
        // name: "email",         ← значение `type`, например "email".
        // onChange: функция,    ← следит за изменениями
        // onBlur: функция,      ← следит, когда поле теряет фокус
        // ref: ссылка,           ← нужна, чтобы фокусироваться на поле при ошибке
      />
      {errors && <Typography sx={{ color: "red", mt: "10px" }}>{errors[type]?.message}</Typography>}
    </Container>
  );
}

export default Input;
