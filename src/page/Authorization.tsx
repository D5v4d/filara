// Authorization.tsx
import { Box, Button, Checkbox, Container, Snackbar, Typography } from "@mui/material";
import Input from "../components/Input";
import type { FormValues } from "../types/form";
import { useAuthorizationMutation } from "../api/postAuthorization";
import { useDispatch } from "react-redux";
import { addAccounts } from "../redux/slice/accountsSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthForm } from "../hooks/useAuthForm";

function Authorization() {
  const [postApiClient, { error }] = useAuthorizationMutation();
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    handleSubmit,
    formState: { isValid },
    reset,
  } = useAuthForm();

  const onSubmit = async (data: FormValues) => {
    try {
      const result = await postApiClient(data).unwrap();
      localStorage.setItem("accountstoken", result.access_token);
      dispatch(addAccounts(result.user_data));
      navigate("/");
      reset();
    } catch (err) {
      console.log(error);
      const message = (err as { data?: { message?: string } })?.data?.message || "Ошибка входа";
      setErrorMessage(message);
      setOpenSnackbar(true);
    }
  };

  return (
    <Container sx={{ display: "flex", flexDirection: "column", alignItems: "center", mt: "69px", gap: "72px" }}>
      <Box component="img" src="/logo.svg" alt="Логотип компании" sx={{ width: "274px", height: "206px", cursor: "pointer" }} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            borderRadius: "8px",
            gap: "24px",
            width: "514px",
            boxShadow: "0 4px 9px rgba(76, 93, 112, 0.3)",
            p: "32px 24px",
            border: error && "1px solid red",
          }}
        >
          <Typography variant="h1" sx={{ fontSize: "24px" }}>
            Вход в учётную запись
          </Typography>
          <Container disableGutters sx={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <Input type="email" text="E-mail" placeholder="Введите свой e-mail" />
            <Input type="password" text="Пароль" placeholder="Введите пароль" />
            <Container disableGutters sx={{ display: "flex", alignItems: "center", gap: "12px", height: "24px" }}>
              <Checkbox sx={{ width: "16px" }} />
              <Typography variant="h1" sx={{ fontSize: "16px", lineHeight: "24px" }}>
                Запомнить меня
              </Typography>
            </Container>
          </Container>
          <Container disableGutters sx={{ display: "flex", flexDirection: "column", gap: "10px", alignItems: "center" }}>
            <Button type="submit" disabled={!isValid} sx={{ width: "466px", height: "40px", bgcolor: "#C06ECC", borderRadius: "8px", color: "#fff" }}>
              Войти
            </Button>
            <Button sx={{ border: "none", color: "#C06ECC" }}>Забыли пароль?</Button>
          </Container>
        </Container>
      </form>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={2000}
        onClose={() => setOpenSnackbar(false)}
        message={errorMessage}
        slotProps={{
          content: {
            sx: {
              backgroundColor: "#ff2b2bff",
              color: "#fff",
              fontWeight: "bold",
            },
          },
        }}
      />
    </Container>
  );
}

export default Authorization;
