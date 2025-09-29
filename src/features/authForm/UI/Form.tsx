// Authorization.tsx
import { Container, Snackbar, Typography } from "@mui/material";
import type { IForm } from "../types/form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthForm } from "../hooks/useAuthForm";
import { useAuthorizationMutation } from "../api/postAuth";
import { ButtonField } from "./ButtonField";
import { CheckboxField } from "./CheckboxField";
import { InputField } from "./InputField";
import { FormProvider } from "react-hook-form";

export const Form = () => {
  const [postApiClient, { error }] = useAuthorizationMutation();
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const navigate = useNavigate();

  const form = useAuthForm(); // так как нельзя просто вызывать useForm несколько раз и брать методы одного вызова, потому что каждый вызов создаёт новый, независимый экземпляр формы.
  // Для того что бы мы могли брать из одной формы методы в разных компонентах сушествуют FormProvider и useFormContext.

  const {
    handleSubmit,
    formState: { isValid },
  } = form;

  const onSubmit = async (data: IForm) => {
    try {
      const result = await postApiClient(data).unwrap();
      console.log(result)
      localStorage.setItem('accountstoken', result.access_token);
      localStorage.setItem('user', JSON.stringify(result.user_data));
      navigate("/seminars");
    } catch (err) {
      console.log(err);
      const message = (err as { data?: { message?: string } })?.data?.message || "Ошибка входа";
      setErrorMessage(message);
      setOpenSnackbar(true);
    }
  };
  return (
    <>
      <FormProvider {...form}>
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
              <InputField type="email" text="E-mail" placeholder="Введите свой e-mail" />
              <InputField type="password" text="Пароль" placeholder="Введите пароль" />
              <CheckboxField />
            </Container>
            <ButtonField isValid={isValid} />
          </Container>
        </form>
      </FormProvider>

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
    </>
  );
};
