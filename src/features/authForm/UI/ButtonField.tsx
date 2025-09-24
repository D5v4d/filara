import { Button } from "@mui/material";
import { Container } from "@mui/system";

export const ButtonField = ({isValid}: {isValid: boolean}) => {

  return (
    <Container disableGutters sx={{ display: "flex", flexDirection: "column", gap: "10px", alignItems: "center" }}>
      <Button type="submit" disabled={!isValid} sx={{ width: "466px", height: "40px", bgcolor: "#C06ECC", borderRadius: "8px", color: "#fff" }}>
        Войти
      </Button>
      <Button sx={{ border: "none", color: "#C06ECC" }}>Забыли пароль?</Button>
    </Container>
  );
};
