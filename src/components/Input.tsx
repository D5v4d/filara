import { Container, InputBase, InputLabel, Typography } from "@mui/material";
import type { IInput } from "../types/Input";

function Input({ type, text, placeholder, register, errors }: IInput) {
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
      />
      {errors && <Typography sx={{ color: "red", mt: "10px" }}>{errors[type]?.message}</Typography>}
    </Container>
  );
}

export default Input;
